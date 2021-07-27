import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";
import "./Auth.scss";
import SignInSide from "./signin/Signin";
const Auth = () => {
  const classes = useStyles();
  return (
    <div className={`Auth ${classes.root}`}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Admin Panel
          </Typography>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <SignInSide />
    </div>
  );
};

export default Auth;
