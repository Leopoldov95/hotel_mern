import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Available.scss";
import { getAllAvailable } from "../../actions/booking";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

// styling for the material ui progress circle
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Available = () => {
  // when storing and managind date in the database, make sure to first convert it to US format!!
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.bookings);

  const classes = useStyles();

  return (
    <div className="Available">
      <div className={classes.root}>
        <CircularProgress />
      </div>
      <h1>Hello from the Availability page</h1>
    </div>
  );
};

export default Available;
