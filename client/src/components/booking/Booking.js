import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAdult, updateChildren, updateDate } from "../../actions/booking";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "./Booking.scss";
import { bookingAPIReducer } from "../../reducers/booking";
const Booking = () => {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.bookings);

  const handleSubmit = () => {
    console.log("");
  };

  return (
    <div className="Booking">
      <section className="desc">
        <h1 className="alt-font">BOOK A ROOM</h1>
      </section>
      <form className="displayInfo">
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
        <button className="btn contrast" onClick={handleSubmit}>
          Check Availability
        </button>
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
