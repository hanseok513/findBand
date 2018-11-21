import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AuthForm from "../components/AuthForm";
import GroupList from "../components/GroupList";
import LandingPage from "../components/LandingPage";
import withAuth from "../hocs/withAuth";
import UserList from "./UserList";
import UserInfo from "../components/UserInfo";
import { handleAuth } from "../store/actions/authActions";
import { addError, removeError } from "../store/actions/errorActions";

class Main extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location && this.props.error) {
      this.props.removeError();
      console.log("location has changed");
    }
  }

  render() {
    const {
      handleAuth,
      history,
      addError,
      removeError,
      error,
      currentUser
    } = this.props;
    return (
      <div className="container-fluid main">
        {error && <h1>{error}</h1>}
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              !currentUser ? <LandingPage /> : <Redirect to="/user-list" />
            }
          />
          <Route
            exact
            path="/login"
            render={() => (
              <AuthForm
                onAuth={handleAuth}
                history={history}
                onError={addError}
                removeError={removeError}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={() => (
              <AuthForm
                isSignup
                onAuth={handleAuth}
                history={history}
                onError={addError}
                removeError={removeError}
              />
            )}
          />
          <Route exact path="/user-info" component={UserInfo} />
          <Route exact path="/user-list" component={withAuth(UserList)} />
          <Route exact path="/group-list" component={withAuth(GroupList)} /> />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    error: state.errors
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { handleAuth, addError, removeError }
  )(Main)
);
