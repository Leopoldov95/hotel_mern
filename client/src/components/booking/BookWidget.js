import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Available from "./Available";
import TextField from "@material-ui/core/TextField";
import DateRangePicker from "@material-ui/lab/DateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import Box from "@material-ui/core/Box";
import { updateAdult, updateChildren, updateDate, getAllAvailable } from "../../actions/booking";
import "../../styles/BookWidget.scss";

const BookWidget = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [showInfo, setShowInfo] = useState(false)
 /*  const [value, setValue] = useState([null, null]); */
  const booking = useSelector((state) => state.bookings);
  const bookingsAPI = useSelector((state) => state.bookingsAPI);
 
  const toggleMobileDisplay = () => {
    if (window.innerWidth < 920) {
      setShowInfo(!showInfo)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const { adults, children, dates } = booking;
    console.log(adults, children, dates);
    if (location.pathname !== '/booking') {
       history.push("/booking");
    }
   dispatch(getAllAvailable({ adults, children, dates })); 
  };
/* onChange={(item) => dispatch(updateDate([item.selection]))} */
  return (
    <div className="BookWidget">
      <form onSubmit={handleSubmit}>
        <div className="date" onClick={toggleMobileDisplay}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Check-in"
              endText="Check-out"
              value={booking.dates}
              onChange={(newValue) => {
                dispatch(updateDate(newValue))
               /*  setValue(newValue); */
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
          <i className={`mobile-toggle fas fa-chevron-${showInfo ? 'up' : 'down'}`} onClick={toggleMobileDisplay}></i>
        </div>
        <div className='guests' style={{display: `${showInfo || window.innerWidth >= 960 ? 'flex' : 'none'}`}}>
        <div className="adults">
          <label>Adults</label>
          <div className="guest-select">
            <div
              className="btn-sm contrast"
              onClick={() => dispatch(updateAdult(1))}
            >
              <i className="fas fa-plus"></i>
            </div>
            <span>{booking.adults}</span>
            <div
              className="btn-sm contrast"
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
              className="btn-sm contrast"
              onClick={() => {
                dispatch(updateChildren(1));
              }}
            >
              <i className="fas fa-plus"></i>
            </div>
            <span>{booking.children}</span>
            <div
              className="btn-sm contrast"
              onClick={() => {
                dispatch(updateChildren(-1));
              }}
            >
              <i className="fas fa-minus"></i>
            </div>
          </div>
        </div>
        </div>
        
        <button className="btn"  style={{display: `${showInfo || window.innerWidth >= 960 ? 'block' : 'none'}`}}>Check Availability</button>
      </form>
    </div>
  );
};

export default BookWidget;
