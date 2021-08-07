import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
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
          ? <Available /> : <div className='filler'></div> } 
    </div>
  );
};

export default Booking;
