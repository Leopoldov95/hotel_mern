import React from "react";
import { useSelector, useDispatch } from "react-redux";
// make the header image dynamic so that it changes based on the booking
const Existing = () => {
  const { result } = useSelector((state) => state.existing.booking);
  console.log(result);
  const helper = (room) => {};

  return (
    <div className="Existing">
      <header
        className="header-main"
        style={{
          background: `no-repeat center/cover url("/img/about/about_header.jpg")`,
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Manage Your Reservations</h2>
        </div>
      </header>
      {result && result.length > 0 ? (
        result.map((data) => (
          <div className="room-card" key={data.confirmation}>
            <div className="card-img">
              <img
                src={`img/rooms/${data.room.split(" ")[0]}.jpg`}
                alt={room.mainImage}
              />
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
              <button
                className="btn contrast"
                onClick={() => handleSubmit(room)}
              >
                Book
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1>No Booking was found...</h1>
      )}
    </div>
  );
};

export default Existing;
