import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { configureStore } from "../store";
import {setCurrentUser} from "../store/actions/authActions";
import NavBar from "./NavBar";
import Body from "./Body";
import '../styles/app.css';
import { setTokenHeader } from "../services/api";

const store = configureStore();

const token = localStorage.getItem("jwtToken");
if (token) {
  const currentUser = localStorage.getItem("authorizedUser");
  store.dispatch(setCurrentUser(currentUser));
  setTokenHeader(token);
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Body />
            HI
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
