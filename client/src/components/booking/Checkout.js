// may want to savetolocalsrage the guest details
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postBooking } from "../../actions/booking";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import "../../styles/Checkout.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: 1,
      width: "25ch",
    },
  },
}));

const card = [
  {
    value: "VISA",
    label: "VISA",
  },
  {
    value: "MASTERCARD",
    label: "MASTERCARD",
  },
  {
    value: "DISCOVER",
    label: "DISCOVER",
  },
  {
    value: "OTHER",
    label: "OTHER",
  },
];

const Checkout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    paymentType: "VISA",
    cardNum: "0112358132134558",
  });
  const { room } = useSelector((state) => state.details);
  const guestDetails = useSelector((state) => state.details);

  //if (room.length < 1) history.push("/");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    for (let val in formData) {
      if (formData[val] === "") {
        setMsg("You must Fill Out Every Field");
        return setError(true);
      }
    }

    if (isNaN(Number(formData.phone))) {
      setMsg("Phone number must only contain numbers");
      return setError(true);
    }

    if (formData.email !== formData.confirmEmail) {
      setMsg("Emails must match");
      return setError(true);
    }

    if (/.+@.+\..+/.test(formData.email) === false) {
      setMsg("Must be a valid email");
      return setError(true);
    }

    dispatch(postBooking({ formData, guestDetails }));
    // create a booking for the guest
    history.push("/booking/confirm");
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="Checkout">
      <header
        className="header-main"
        style={{
          background: `no-repeat center/cover url("/img/booking/checkout_header.jpg")`,
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Finish Your Reservation</h2>
        </div>
      </header>
      <section className="desc">
        <h1 className="alt-font">YOUR DETAILS</h1>
      </section>
      <section className="room-info">
        {room && (
          <>
            <h1>BOOKING SUMMARY</h1>
            <div>
              <h4>Room:</h4> <span>{room.title}</span>
            </div>
            <div>
              <h4>Dates:</h4>{" "}
              <span>{`${guestDetails.booking.dates[0].toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })} - ${guestDetails.booking.dates[1].toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}`}</span>
            </div>
            <div>
              <h4>Number of Nights:</h4>
              <span>{room.totalNights}</span>
            </div>
            <div>
              <h4>Guests</h4>
              <span>
                {guestDetails.booking.adults} Adults{" "}
                {guestDetails.booking.children > 0 &&
                  `${guestDetails.booking.children} Children`}
              </span>
            </div>
            <div>
              <h4>Total</h4>
              <span style={{ fontWeight: "bold" }}>${room.totalPrice}</span>
            </div>
          </>
        )}
      </section>
      <section className="details">
        <h1 className="alt-font">Enter Your Information</h1>
        {error && <span className="error-msg">{msg}</span>}
        <form className={classes.root} autoComplete="off">
          <TextField
            onChange={handleChange}
            required
            className="outlined-basic"
            name="firstName"
            label="First Name"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            required
            className="outlined-basic"
            name="lastName"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            required
            className="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            required
            className="outlined-basic"
            name="confirmEmail"
            label="Confirm Email"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            required
            className="outlined-basic"
            name="phone"
            label="Phone Number"
            variant="outlined"
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
          />
          <TextField
            onChange={handleChange}
            required
            className="outlined-basic"
            name="paymentType"
            select
            label="Select"
            value={formData.paymentType}
            /*       onChange={handleChange} */
            helperText="Card Type"
            variant="outlined"
          >
            {card.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            className="outlined-basic"
            name="cardNum"
            label="Card Number"
            value={formData.cardNum}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            helperText="This value cannot be changed"
          />
          <div className="btn-container">
            <Button onClick={handleSubmit} variant="outlined">
              Submit
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
