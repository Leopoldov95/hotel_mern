import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'
import {
 getSingleBooking
} from "../../actions/booking";
import BookingWidget from './BookWidget'
import Available from "./Available";
import "../../styles/Booking.scss"
const Booking = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const bookingsAPI = useSelector((state) => state.bookingsAPI);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('you want to look for an existing booking')
    const value = e.target[0].value.toUpperCase();
    dispatch(getSingleBooking(value));
    history.push('/booking/existing')
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
        <form onSubmit={handleSubmit}>
          <input maxLength="6" type="text" placeholder="Enter Confirmation Code" />
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
