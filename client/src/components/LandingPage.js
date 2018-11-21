import React from "react";
import "../styles/landing.css";
import { Link } from "react-router-dom";

const LandingPage = props => {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Find your band!</h1>
        <p class="lead">Still finding your band or musician?? Join Now!</p>
        <div>
          <Link className="nav-item" to="/signup">
            <button className="btn btn-primary">Signup</button>
          </Link>
          <Link className="nav-item" to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
