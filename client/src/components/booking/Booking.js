import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateAdult,
  updateChildren,
  updateDate,
  getAllAvailable,
} from "../../actions/booking";
import BookingWidget from './BookWidget'
import Available from "./Available";
import "../../styles/Booking.scss"
const Booking = (props) => {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.bookings);
  const bookingsAPI = useSelector((state) => state.bookingsAPI);
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
      <BookingWidget />
   {/*    <section className="bookingResults"> */}
        {bookingsAPI.booking && bookingsAPI.booking.length > 0
          && <Available /> } {/*  bookingsAPI.booking.map((room) => (
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
          : "" }
       </section>  */}
    </div>
  );
};

export default Booking;
