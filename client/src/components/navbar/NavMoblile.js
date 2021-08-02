import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/NavMobile.scss";

const NavMobile = () => {
  const [header, setHeader] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("");
    } else if (window.scrollY > 70) {
      return setHeader("alt-color");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <div className={`NavMobile ${header}`}>
      <div className="menu-top">
        <div className="hamburger-menu">
          <i onClick={() => setShowMenu(!showMenu)} className={`fas ${showMenu ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <div className="brand">
          <Link to="/">
            <h1 className="alt-font">SUAY RESORTS</h1>
          </Link>
        </div>
        <Link to="/booking">
          <button className="btn">Book Now</button>
        </Link>
      </div>
      <div className={`menu-bottom ${showMenu && 'show-menu'}`}>
        <ul>
          <li>
          <div className="contact">
          <i className="fas fa-phone-alt"></i>
          <i className="fas fa-envelope"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook-square"></i>
        </div>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li>
            <Link to="/dining">Dining </Link>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li>
            <Link to="/tours">Tours </Link>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li>
            <Link to="/about">About</Link>
            <i className="fas fa-chevron-right"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMobile;
