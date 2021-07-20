import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "./BookWidget.scss";

const BookWidget = () => {
  const [showCalender, setShowCalender] = useState(false);
  const [adults, setAdults] = useState(1);
  const [child, setChild] = useState(0);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  const handleSelect = (range) => {
    // do something with data here
    console.log(range);
  };
  const handleCalenderDisplay = (e) => {
    e.preventDefault();
    setShowCalender(!showCalender);
  };

  const handleAdultSel = (e, action) => {
    e.preventDefault();
    console.log(action);
  };
  const handleSel = (e) => {
    e.preventDefault();
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
            <button className="btn" onClick={(e) => handleAdultSel(e, "+")}>
              <i className="fas fa-plus"></i>
            </button>
            <span>{adults}</span>
            <button className="btn" onClick={(e) => handleAdultSel(e, "-")}>
              <i className="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="children">
          <label>Children</label>
          <div className="guest-select">
            <button className="btn">
              <i className="fas fa-plus"></i>
            </button>
            <span>{child}</span>
            <button className="btn">
              <i className="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <button className="btn">Check Availability</button>
      </form>
      <div className="calender">
        {showCalender && (
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
          />
        )}
      </div>
    </div>
  );
};

export default BookWidget;
