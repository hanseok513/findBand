import React, { Component } from "react";

const DEFAULT_STATE = {
  email: "",
  username: "",
  age: 20,
  gender: "N/A",
  password: ""
};

class AuthForm extends Component {
  state = DEFAULT_STATE;

  handleSubmit = async e => {
    const { onAuth, history } = this.props;
    e.preventDefault();
    this.setState(DEFAULT_STATE);
    onAuth(this.state, this.props.isSignup ? "signup" : "login").then(res => {
      history.goBack();
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { isSignup } = this.props;

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
          {isSignup && (
            <div>
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
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  type="gender"
                  className="form-control"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.handleChange}
                  id="gender"
                  placeholder="Gender"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>N/A</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  className="form-control"
                  type="number"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  id="age"
                  min="20"
                  placeholder="20"
                />
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
