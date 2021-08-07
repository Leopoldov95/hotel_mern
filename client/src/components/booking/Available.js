import React, { useEffect } from "react";
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
  const booking = useSelector((state) => state.bookings);
  const bookingsAPI = useSelector((state) => state.bookingsAPI);
 // const details = useSelector((state) => state.details);


  const handleSubmit = (room) => {
    // For the purpsoses of booking info, we only want to have the title and price per night
    const {title, price} =room;
    dispatch(postRoomDetails({title, price}));
    // we want to save our room to localStorage at this point
    history.push("/booking/checkout");
  };
  const totalNights = booking.dates[1].getDate() - booking.dates[0].getDate();
  return (
    <div className="Available">
      {bookingsAPI.booking.map((room) => (
        <div className="room-card" key={room.url}>
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
            <button className="btn contrast" onClick={() => handleSubmit(room)}>
              Book
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Available;
