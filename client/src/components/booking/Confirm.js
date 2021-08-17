import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/Confirm.scss";

/* This page is to confirm the booking and provide the user with the confirmation details */

// at this point the guest has submitted their booking information

// at the backend, a booking will be created at the database and a id will be genertated for that particular booking
const Confirm = () => {
  const history = useHistory();
  const details = useSelector((state) => state.details);
  console.log(details)
  return (
    <div className="Confirm">
      <header
        className="header-main"
        style={{
          background: `no-repeat center/cover url("/img/booking/confirm_header.jpg")`,
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Enjoy Your Stay!</h2>
        </div>
      </header>
      <h1>Welcome to the confirmation page</h1>
    </div>
  );
};

export default Confirm;
