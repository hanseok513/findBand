import React, { Component } from "react";
import { Route } from "react-router-dom";
import FilterContainer from "./FilterContainer";
import Main from "./Main";
import "../styles/body.css";

class Body extends Component {
  render() {
    return (
      <div id="body-container">
        <Route path={["/user-list/", "/group-list/"]} component={FilterContainer}/>
        <Main />
      </div>
    );
  }
}

export default Body;
