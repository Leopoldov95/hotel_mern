import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Bookings from "./bookings/Bookings";
import { signin } from "../../actions/auth";
import "./Auth.scss";

const Auth = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isUser, setIsUser] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData));
    setFormData({
      username: "",
      password: "",
    });
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
      {!isUser ? (
        <div className="login">
          <h1 className="alt-font">Admin Login</h1>
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
        <Bookings />
      )}
    </div>
  );
};

export default Auth;
