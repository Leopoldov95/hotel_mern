import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../styles/Available.scss";
import { postRoomDetails } from "../../actions/booking";
import { displayIcon } from "../helper/Icons";
// styling for the material ui progress circle

const Available = () => {
  // when storing and managind date in the database, make sure to first convert it to US format!!
  const dispatch = useDispatch();
  const history = useHistory();
  const details = useSelector((state) => state.details.booking);
  const availableBookings = useSelector((state) => state.bookingsAPI);

  const handleSubmit = (room) => {
    // For the purpsoses of booking info, we only want to have the title and price per night
    const { title, price } = room;
    const rawDates = details.dates[1].getTime() - details.dates[0].getTime();
    const totalNights = Math.round(rawDates / (1000 * 3600 * 24));
    const totalPrice = totalNights * price;

    dispatch(postRoomDetails({ title, price, totalNights, totalPrice }));
    // we want to save our room to localStorage at this point
    history.push("/booking/checkout");
  };
  const rawDates = details.dates[1].getTime() - details.dates[0].getTime();
  const totalNights = Math.round(rawDates / (1000 * 3600 * 24));
  return (
    <div className="Available">
      {availableBookings.map((room) => (
        <React.Fragment key={room.url}>
          <div className="room-card">
            <div className="card-img">
              <img src={`img/rooms/${room.mainImage}`} alt={room.mainImage} />
            </div>
            <div className="card-info">
              <h2 className="alt-font">{room.title}</h2>
              <span className="location">
                <i className="fas fa-map-marker-alt"></i> Suay Resort, Phuket
              </span>
              <div className="details">
                <div>
                  <label>Size:</label>
                  <p>{room.size}</p>
                </div>
                <div>
                  <label>Occupancy:</label>
                  <p>{`${room.adults} Adults & ${room.children} Children`}</p>
                </div>
                <div>
                  <label>Bedding:</label>
                  <p>{room.bedding}</p>
                </div>
              </div>
              <div className="amenities">
                <label>Amenities:</label>
                <ul>
                  {room.amenities.map((item) => (
                    <li key={item}>
                      <i className={`${displayIcon(item)}`}></i>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card-price">
              <div>
                <label>Daily Price</label>
                <h4>{`$${room.price}`}</h4>
              </div>
              <div>
                <label>Total ({totalNights} Nights)</label>
                <h4>{`$${room.price * totalNights}`}</h4>
              </div>
              {room.hasError ? (
                <button
                  className="btn contrast"
                  style={{ color: "white", backgroundColor: "black" }}
                >
                  Unavailable
                </button>
              ) : (
                <button
                  className="btn contrast"
                  onClick={() => handleSubmit(room)}
                >
                  Book
                </button>
              )}
            </div>
          </div>
          {room.hasError && (
            <span className="error-msg">
              This room has been booked from{" "}
              {new Date(room.hasError.dates[0]).toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}{" "}
              to{" "}
              {new Date(room.hasError.dates[1]).toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Available;
