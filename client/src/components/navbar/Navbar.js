import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navTop">
        <div className="contact">
          <i className="fas fa-phone-alt"></i>
          <i className="fas fa-envelope"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook-square"></i>
        </div>
        <div>
          <Link to="/">
            <h1>SUAY RESORTS</h1>
          </Link>
        </div>
        <button className="btn">Book Now</button>
      </div>
      <div className="navBottom">
        <Link to="/rooms">
          Rooms <span>&#183;</span>
        </Link>
        <Link to="/dining">
          Dining <span>&#183;</span>{" "}
        </Link>
        <Link to="/auth">
          Account <span>&#183;</span>{" "}
        </Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
