import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateAdult,
  updateChildren,
  updateDate,
  getAllAvailable,
} from "../../actions/booking";
import { displayIcon } from "../helper/Icons";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import "../../styles/Booking.scss"
const Booking = (props) => {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.bookings);
  const bookingsAPI = useSelector((state) => state.bookingsAPI);
  const [showCalender, setShowCalender] = useState(false);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("You are looking for a booking based on existing ID");

    // return error if booking does not exist
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("you want to create/look for a new booking");
    const { adults, children, dates } = booking;
    dispatch(getAllAvailable({ adults, children, dates }));
  };

  return (
    <div className="Booking">
      <header className='header-main'
        style={{
          background:
            ' no-repeat center/cover url("/img/booking/booking_header.jpg")',
        }}
      >
        <div className='header-content'>
             <h2 className="alt-font">Make A Reservation</h2>
        </div>
     
      </header>
      <section className="existing">
        <label>Already have a Booking?</label>
        <form onSubmit={handleSearchSubmit}>
          <input type="text" placeholder="Enter Confirmation Code" />
          <button className="btn contrast">Lookup</button>
        </form>
      </section>
      <section className="desc">
        <h1 className="alt-font">BOOK A ROOM</h1>
      </section>
      <form className="displayInfo" onSubmit={handleSubmit}>
        <div onClick={() => setShowCalender(!showCalender)}>
          <label>Start Date</label>
          <div>
            <i className="far fa-calendar-alt"></i>
            <span>
              {booking.dates[0].startDate.toLocaleDateString("en-US")}
            </span>
          </div>
        </div>
        <div onClick={() => setShowCalender(!showCalender)}>
          <label>End Date</label>
          <div>
            <i className="far fa-calendar-alt"></i>
            <span>{booking.dates[0].endDate.toLocaleDateString("en-US")}</span>
          </div>
        </div>
        <div className="adults">
          <label>Adults</label>
          <div className="guest-select">
            <div
              className="btn contrast"
              onClick={() => {
                dispatch(updateAdult(1));
              }}
            >
              <i className="fas fa-plus"></i>
            </div>
            <span>{booking.adults}</span>
            <div
              className="btn contrast"
              onClick={() => {
                dispatch(updateAdult(-1));
              }}
            >
              <i className="fas fa-minus"></i>
            </div>
          </div>
        </div>
        <div className="children">
          <label>Children</label>
          <div className="guest-select">
            <div
              className="btn contrast"
              onClick={() => {
                dispatch(updateChildren(1));
              }}
            >
              <i className="fas fa-plus"></i>
            </div>
            <span>{booking.children}</span>
            <div
              className="btn contrast"
              onClick={() => {
                dispatch(updateChildren(-1));
              }}
            >
              <i className="fas fa-minus"></i>
            </div>
          </div>
        </div>
        <button className="btn contrast">Check Availability</button>
      </form>
      <section className="calenderContainer">
        {showCalender && (
          <DateRangePicker
            onChange={(item) => dispatch(updateDate([item.selection]))}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={booking.dates}
            direction="horizontal"
          />
        )}
      </section>
      <section className="bookingResults">
        {bookingsAPI.booking && bookingsAPI.booking.length > 0
          ? bookingsAPI.booking.map((room) => (
              <div className="room-card" key={room.url}>
                <div className="card-img">
                  <img
                    src={`img/rooms/${room.mainImage}`}
                    alt={room.mainImage}
                  />
                </div>
                <div className="card-info">
                  <h2 className="alt-font">{room.title}</h2>
                  <span className="location">
                    <i className="fas fa-map-marker-alt"></i> Suay Resort,
                    Phuket
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
                    <label>Total</label>
                    <h4>{`$${room.price * 5}`}</h4>
                  </div>
                  <button className="btn contrast">Book</button>
                </div>
              </div>
            ))
          : ""}
      </section>
    </div>
  );
};

export default Booking;
