import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  updateAdult,
  updateChildren,
  updateDate,
  getAllAvailable,
} from "../../actions/booking";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "./Booking.scss";
import { bookingAPIReducer } from "../../reducers/booking";
const Booking = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const booking = useSelector((state) => state.bookings);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("You are looking for a booking based on existing ID");

    // return error if booking does not exist
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("you want to create/ look for a new booking");
    const { adults, children, dates } = booking;
    dispatch(getAllAvailable({ adults, children, dates }));
    history.push("/booking/availability");
  };

  return (
    <div className="Booking">
      <header
        style={{
          background:
            ' no-repeat center/cover url("/img/booking/booking_header.jpg")',
        }}
      >
        <h2 className="alt-font">Make A Reservation</h2>
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
        <div>
          <label>Start Date</label>
          <div>
            <i class="far fa-calendar-alt"></i>
            <span>
              {booking.dates[0].startDate.toLocaleDateString("en-US")}
            </span>
          </div>
        </div>
        <div>
          <label>End Date</label>
          <div>
            <i class="far fa-calendar-alt"></i>
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
        <DateRangePicker
          onChange={(item) => dispatch(updateDate([item.selection]))}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={booking.dates}
          direction="horizontal"
        />
      </section>
    </div>
  );
};

export default Booking;
