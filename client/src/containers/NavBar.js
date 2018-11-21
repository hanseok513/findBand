import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { logout } from "../store/actions/authActions";

import "../styles/navbar.css";

class NavBar extends Component {
  render() {
    const { isUserLoggedIn, logout } = this.props;
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          FindBand
        </Link>
        <ul className="nav nav-pills">
          {!isUserLoggedIn && (
            <div>
              <Link className="nav-item" to="/login">
                Login
              </Link>
              <Link className="nav-item" to="/signup">
                Signup
              </Link>
            </div>
          )}
          {isUserLoggedIn && (
            <div>
              <Link className="nav-item" to="/user-info">
                MyInfo
              </Link>

              <Link className="nav-item" to="/" onClick={logout}>
                Logout
              </Link>
            </div>
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

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(NavBar)
);
