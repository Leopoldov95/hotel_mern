import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/Confirm.scss";

/* This page is to confirm the booking and provide the user with the confirmation details */
const Confirm = () => {
  const history = useHistory();
  const details = useSelector((state) => state.details);
  console.log(details);

  return (
    <div className="Confirm">
      <h1>Welcome to the confirmation page</h1>
    </div>
  );
};

export default Confirm;
