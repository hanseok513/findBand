import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          MEET
        </Link>
        <ul className="nav nav-pills">
          <Link className="nav-item" to="/user-list">
            Users
          </Link>
          <Link className="nav-item" to="/group-list">
            Groups
          </Link>
          <Link className="nav-item" to="/user-info">
            UserInfo
          </Link>
          <Link className="nav-item" to="/login">
            Login
          </Link>
          <Link className="nav-item" to="/signup">
            Signup
          </Link>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
