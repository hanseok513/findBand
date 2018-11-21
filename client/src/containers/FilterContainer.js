import React, { Component } from "react";
import { Link } from "react-router-dom";

class FilterContainer extends Component {
  state = {
    isFilterShown: false
  };
  render() {
    const { isFilterShown } = this.state;
    return (
      <div className="container-fluid">
        <div className="filter-menu">
          <ul className="nav nav-pills">
            <Link className="nav-item" to="/user-list">
              Find Musician
            </Link>
            <Link className="nav-item" to="/group-list">
              Find Group
            </Link>
          </ul>

          <button
            onClick={e => this.setState({ isFilterShown: !isFilterShown })}
          >
            Show Filter
          </button>
        </div>
        {isFilterShown && (
          <div>
            <h1>This will be filter</h1>
          </div>
        )}
      </div>
    );
  }
}

export default FilterContainer;
