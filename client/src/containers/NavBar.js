import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { logout } from "../store/actions/authActions";

import "../styles/navbar.css";

class NavBar extends Component {
  render() {
    const { isUserLoggedIn, logout, history } = this.props;
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
          {!isUserLoggedIn && (
            <Link className="nav-item" to="/login">
              Login
            </Link>
          )}
          {!isUserLoggedIn && (
            <Link className="nav-item" to="/signup">
              Signup
            </Link>
          )}
          {isUserLoggedIn && (
            <Link className="nav-item" to="/" onClick={logout}>
              Logout
            </Link>
          )}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserLoggedIn: !!state.currentUser
  };
};

export default withRouter(connect(
  mapStateToProps,
  { logout }
)(NavBar));
