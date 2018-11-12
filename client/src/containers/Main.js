import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import GroupList from '../components/GroupList';
import UserList from '../components/UserList';
import UserInfo from '../components/UserInfo';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid main">
        <Switch> 
          <Route exact path="/login" component={AuthForm}></Route>
          <Route exact path="/signup" render={()=>(<AuthForm isSignup/>)}></Route>
          <Route exact path="/user-info" component={UserInfo}></Route>
          <Route exact path="/user-list" component={UserList}></Route>
          <Route exact path="/group-list" component={GroupList}></Route>
        </Switch>
      </div>
    );
  }
}

export default Main;