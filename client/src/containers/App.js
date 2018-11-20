import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { configureStore } from "../store";
import NavBar from "./NavBar";
import Body from "./Body";

const store = configureStore();

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
