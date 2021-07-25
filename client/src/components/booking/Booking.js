import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "./Booking.scss";
const Booking = (props) => {
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0
  })
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
  const handleAdultSel = (action) => {
    if (action === '+') { 
      setGuests((prevState) => {
        return {
          ...prevState,
          adults: prevState.adults + 1
        };
      });
    } else {  
      setGuests((prevState) => {
        return {
          ...prevState,
          adults: prevState.adults - 1
        };
      });
    }
  };
  useEffect(() => {
    if (props.params) {
      // do something here
    }
  });
  console.log(JSON.stringify(state[0].startDate));
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
            <span>{state[0].startDate.toLocaleDateString("en-US")}</span>
          </div>
        </div>
        <div>
          <label>End Date</label>
          <div>
            <i class="far fa-calendar-alt"></i>
            <span>{state[0].endDate.toLocaleDateString("en-US")}</span>
          </div>
        </div>
        <div className="adults">
          <label>Adults</label>
          <div className="guest-select">
            <div
              className="btn contrast"
              onClick={(e) => handleAdultSel("+")}
            >
              <i className="fas fa-plus"></i>
            </div>
            <span>{guests.adults}</span>
            <div
              className="btn contrast"
              onClick={(e) => handleAdultSel("-")}
            >
              <i className="fas fa-minus"></i>
            </div>
          </div>
        </div>
        <div className="children">
          <label>Children</label>
          <div className="guest-select">
            <div className="btn contrast">
              <i className="fas fa-plus"></i>
            </div>
            <span>{guests.children}</span>
            <div className="btn contrast">
              <i className="fas fa-minus"></i>
            </div>
          </div>
        </div>
        <button className="btn contrast">Check Availability</button>
      </form>
      <section className="calenderContainer">
        <DateRangePicker
          onChange={(item) => setState([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={state}
          direction="horizontal"
        />
      </section>
    </div>
  );
};

export default Booking;
