import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings, deleteBooking } from "../../../actions/booking";

const Bookings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);
  const allBookings = useSelector((state) => state.existing);
  console.log(allBookings);
  const handleDelete = (id) => {
    // handle booking deletion...
    console.log(`you want to delete booking: ${id}`);
    dispatch(deleteBooking({ id }));
    // rerender the page once deleted to update the booking list
  };

  return (
    <div className="Bookings">
      <section className="desc">
        <h1 className="alt-font">Admin Booking Management</h1>
        <span></span>
      </section>
      {allBookings.booking &&
        allBookings.booking.map((info) => (
          <div className="card" key={info.confiramtion}>
            <div className="info">
              <h1>Confirmation Number:</h1>
              <h1>{info.confirmation}</h1>
              <div>
                <h3>Room:</h3>
                <h3>{info.room}</h3>
              </div>
              <div>
                <h3>Name:</h3>
                <h3>
                  {info.firstName} {info.lastName}
                </h3>
              </div>
              <div>
                <h3>Email:</h3>
                <h3>{info.email}</h3>
              </div>
              <div>
                <h3>Phone:</h3>
                <h3>{info.phone}</h3>
              </div>
              <div>
                <h3>Guests:</h3>
                <h3>
                  {info.adults} Adults{" "}
                  {info.children > 0 && `& ${info.children} Children`}
                </h3>
              </div>
              <div>
                <h3>Dates</h3>
                <h3>
                  {new Date(info.startDate).toLocaleString("en-us", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}{" "}
                  -{" "}
                  {new Date(info.endDate).toLocaleString("en-us", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </h3>
              </div>
              <div>
                <h3>Payment Type:</h3>
                <h3>{info.cardType}</h3>
              </div>
              <div>
                <h3>Card Number:</h3>
                <h3>XXXXXXXXXXXX{info.cardNum.slice(12, 16)}</h3>
              </div>
            </div>
            <div className="actions">
              <button
                className="delete-btn"
                onClick={() => handleDelete(info.confirmation)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Bookings;
