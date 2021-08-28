import React, { useState } from "react";
import * as api from "../../api/index";
import Bookings from "./bookings/Bookings";

import "./Auth.scss";

const Auth = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile"))); // profile is being access from local storage, shich was set in the reducer file auth.js

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (error.length > 0) {
        setError("");
      }
      if (formData.username.length < 1 || formData.password.length < 1) {
        return setError("Please fill Out All Fields");
      }
      const { data } = await api.signin(formData);

      if (data) {
        localStorage.setItem("profile", JSON.stringify({ data }));
        setUser(JSON.parse(localStorage.getItem("profile")));
      }
      // dispatch(signin(formData));
      setFormData({
        username: "",
        password: "",
      });
    } catch (error) {
      if (error) {
        return setError("Invalid Username/Password");
      }
    }
  };
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <div className="Auth">
      <header
        className="header-main"
        style={{
          background:
            ' no-repeat center/cover url("/img/admin/admin_main.jpg")',
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Admin Page</h2>
        </div>
      </header>
      {!user ? (
        <div className="login">
          <h1 className="alt-font">Admin Login</h1>
          <span style={{ color: "red" }}>{error.length > 0 && error}</span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              autoComplete="off"
              value={formData.username}
            />
            <input
              type="password"
              value={formData.password}
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <button className="btn">Login</button>
          </form>
        </div>
      ) : (
        <>
          <Bookings />
          <div className="btn-container">
            <button className="btn" onClick={logout}>
              Log Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Auth;
