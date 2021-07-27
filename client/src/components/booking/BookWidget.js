import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAdult, updateChildren, updateDate } from "../../actions/booking";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import "./BookWidget.scss";

const BookWidget = () => {
  const dispatch = useDispatch();
  const [showCalender, setShowCalender] = useState(false);
  const booking = useSelector((state) => state.bookings);
  const handleCalenderDisplay = (e) => {
    e.preventDefault();
    setShowCalender(!showCalender);
  };

  return (
    <div className="BookWidget">
      <form>
        <div className="date">
          <label>Check-In/Check-Out</label>
          <button className="btn btn-date" onClick={handleCalenderDisplay}>
            <span> Select Dates</span> <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="adults">
          <label>Adults</label>
          <div className="guest-select">
            <div
              className="btn contrast"
              onClick={() => dispatch(updateAdult(1))}
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
        <button className="btn">Check Availability</button>
      </form>
      <div className="calender">
        {showCalender && (
          <DateRangePicker
            /*  onChange={(item) => setState([item.selection])} */ // will need to use dispatch here to truly update the state
            onChange={(item) => dispatch(updateDate([item.selection]))}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={booking.dates}
            direction="horizontal"
          />
        )}
      </div>
    </div>
  );
};

export default BookWidget;
