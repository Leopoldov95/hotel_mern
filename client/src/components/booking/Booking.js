import React, {useState, useEffect} from 'react'
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import './Booking.scss'
const Booking = (props) => {
    const [dates, setDates] = useState({
        startDate: '',
        endDate: ''
    });
    const [adults, setAdults] = useState(1);
  const [child, setChild] = useState(0);
    const [value, onChange] = useState(new Date());
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
      const handleAdultSel = (e, action) => {
        e.preventDefault();
        console.log(action);
      };
    useEffect(() => {
        if (props.params){
            // do something here
        }
     })
    return (
        <div className='Booking'>
             <section className="desc">
                <h1 className="alt-font">BOOK A ROOM</h1>
             </section>
             <section className='displayInfo'>
                 <div>

                 </div>
                 <div>
                     
                 </div>
                 <div className="adults">
          <label>Adults</label>
          <div className="guest-select">
            <button
              className="btn contrast"
              onClick={(e) => handleAdultSel(e, "+")}
            >
              <i className="fas fa-plus"></i>
            </button>
            <span>{adults}</span>
            <button
              className="btn contrast"
              onClick={(e) => handleAdultSel(e, "-")}
            >
              <i className="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="children">
          <label>Children</label>
          <div className="guest-select">
            <button className="btn contrast">
              <i className="fas fa-plus"></i>
            </button>
            <span>{child}</span>
            <button className="btn contrast">
              <i className="fas fa-minus"></i>
            </button>
          </div>
        </div>
             </section>
             <section className='calenderContainer'>
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
    )
}

export default Booking;