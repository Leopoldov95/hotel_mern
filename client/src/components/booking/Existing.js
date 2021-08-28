import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteBooking } from "../../actions/booking";
import "../../styles/Existing.scss";
// make the header image dynamic so that it changes based on the booking
const Existing = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let existing = useSelector((state) => state.existing);
  const [loading, setLoading] = useState(true);
  // update the page if a booking gets delete
  const handleDelete = (id) => {
    // handle booking deletion...
    dispatch(deleteBooking({ id }));
    // rerender the page once deleted to update the booking list
  };
  useEffect(() => {
    console.log(" i was triggered");
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <div className="Existing">
      <header
        className="header-main"
        style={{
          background: `no-repeat center/cover url("/img/booking/existing_header.jpg")`,
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Manage Your Reservations</h2>
        </div>
      </header>
      {existing.length > 0 ? (
        existing.map((info) => (
          <div className="card" key={info.confirmation}>
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
        ))
      ) : loading ? (
        <div className="loader">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <section className="desc">
          <h1>No Booking was Found...</h1>
          <button className="btn" onClick={() => history.push("/booking")}>
            Go Back
          </button>
        </section>
      )}
    </div>
  );
};

export default Existing;
