import React, { Component } from "react";
import { connect } from "react-redux";

import { handleLoadUsers } from "../store/actions/userActions";
import UserItem from "../components/UserItem";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.props.handleLoadUsers();
  }

  render() {
    const users = this.props.users.map(user => (
      <UserItem className="list-group-item" user={user} key={user._id} />
    ));
    return (
      <div className="container">
        <ul className="list-group">{users}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { handleLoadUsers }
)(UserList);
