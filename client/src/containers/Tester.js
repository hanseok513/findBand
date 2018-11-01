import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { sendTestAction, sendTestAction2 } from "../store/actions/testActions";

class Tester extends Component {
  render() {
    const {
      firstAction,
      secondAction,
      sendTestAction,
      sendTestAction2
    } = this.props;
    return (
      <div>
        <Link to="/one">LINK_ONE</Link>
        <Link to="/two">LINK_TWO</Link>
        <Link to="/">LINK_HOME</Link>
        <h1>firstAction {firstAction}</h1>
        <h2>secondAction {secondAction}</h2>
        <button onClick={sendTestAction}>Test Action</button>
        <button onClick={sendTestAction2}>Test Action2</button>
        <Route
          exact
          path="/one"
          render={() => <div> You've come to Link ONE!</div>}
        />
        <Route
          exact
          path="/two"
          render={() => <div> You've come to Link TWO!!</div>}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    firstAction: state.firstAction.data,
    secondAction: state.secondAction.data2
  };
}

export default withRouter(connect(
  mapStateToProps,
  { sendTestAction, sendTestAction2 }
)(Tester));
