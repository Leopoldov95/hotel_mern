import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/main/Home";
import Dining from "./components/main/Dining";
import Footer from "./components/main/Footer";
import About from "./components/main/About";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dining" exact component={Dining} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
