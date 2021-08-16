import React from 'react';
import { useSelector, useDispatch } from "react-redux";
// make the header image dynamic so that it changes based on the booking
const Existing = () => {
    const existing = useSelector((state) => state.existing);

    return (
        <div className='Existing'>
            <h1>Checking for existing bookings...</h1>
            {existing && existing.length >0 ? 
            existing.booking.result.map((data) => 
            <div className='card'>
                <h1>{data.firstName}</h1>
            </div>  
            )
              : (
                  <h1>No Booking was found...</h1>
              )
        }
        </div>
    )
}

export default Existing;