import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import "./styles/index.scss";

import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  // Provider connects the store (global states) to the entire App
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  
  </Provider>,
  document.getElementById("root")
);
