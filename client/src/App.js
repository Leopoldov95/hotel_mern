import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/main/Home";
import Rooms from "./components/main/rooms/Rooms";
import Room from "./components/main/rooms/Room";
import Dining from "./components/main/Dining";
import Footer from "./components/main/Footer";
import About from "./components/main/About";
import Tour from "./components/main/Tour";
import Booking from "./components/booking/Booking";
import Available from "./components/booking/Available";
import Auth from "./components/auth/Auth";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route
          path="/rooms/:id"
          exact
          render={(props) => <Room {...props} />}
        />
        <Route path="/dining" exact component={Dining} />
        <Route path="/about" exact component={About} />
        <Route path="/tours" exact component={Tour} />
        <Route path="/booking" exact component={Booking} />
        <Route path="/booking/availability" exact component={Available} />
        <Route path="/admin" exact component={Auth} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
