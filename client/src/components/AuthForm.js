import React, { Component } from "react";
import {requestSignup, requestLogin} from '../services/api'

const DEFAULT_STATE = {
  email: "",
  username: "",
  password: ""
};

class AuthForm extends Component {
  state = DEFAULT_STATE;

  handleSubmit = e => {
    e.preventDefault();
    this.setState(DEFAULT_STATE);
    if (this.props.isSignup) {
      requestSignup(this.state);
    } else {
      requestLogin(this.state);
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const isSignup = this.props.isSignup;
    console.log(this.props);
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              id="email"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          {this.props.isSignup && (
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="username"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                id="username"
                placeholder="Username"
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
              placeholder="Password"
            />
          </div>
          

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
