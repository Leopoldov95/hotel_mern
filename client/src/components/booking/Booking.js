import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkConnection, getSingleBooking } from "../../actions/booking";
import BookingWidget from "./BookWidget";
import Available from "./Available";
import Loader from "../helper/Loader";
import "../../styles/Booking.scss";

const Booking = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const bookingsAPI = useSelector((state) => state.bookingsAPI);
  const details = useSelector((state) => state.details);
  const serverStatus = useSelector((state) => state.serverStatus);

  const [formData, setFormData] = useState({
    confirmation: "",
    email: "",
  });
  const [error, setError] = useState("");
  useEffect(() => {
    dispatch(checkConnection());
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.confirmation === "" && formData.email === "") {
      return setError("Please fill out ONE of these fields.");
    }
    if (formData.confirmation.length > 0 && formData.email.length > 0) {
      return setError("Only Fill out ONE of these fields.");
    }

    dispatch(getSingleBooking(formData));
    history.push("/booking/existing");
  };

  return (
    <div className="Booking">
      <header
        className="header-main"
        style={{
          background:
            ' no-repeat center/cover url("/img/booking/booking_header.jpg")',
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Make A Reservation</h2>
        </div>
      </header>
      <section className="existing">
        <label>Already have a Booking?</label>
        <form>
          <input
            maxLength="6"
            name="confirmation"
            type="text"
            placeholder="Enter Confirmation Code"
            value={formData.confirmation}
            onChange={handleChange}
          />
          <input
            name="email"
            type="text"
            placeholder="Or Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="btn contrast">
            Lookup
          </button>
        </form>
        <span className="disclaimer">
          * expired bookings will automatically be deleted
        </span>
        {error.length > 0 && <span style={{ color: "red" }}>{error}</span>}
      </section>
      <section className="desc">
        <h1 className="alt-font">BOOK A ROOM</h1>
      </section>
      <BookingWidget />
      {details.booking.adults && bookingsAPI.length < 1 && (
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
      )}
      {bookingsAPI && bookingsAPI.length > 0 ? (
        <Available />
      ) : (
        <div className="filler"></div>
      )}
      {!serverStatus && <Loader />}
    </div>
  );
};

export default Booking;
