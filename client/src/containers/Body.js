import React, {Component} from 'react';
import Filter from './Filter';
import Main from './Main';

class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Filter/>
        <Main/>
      </div>
    );
  }
}

export default Body;