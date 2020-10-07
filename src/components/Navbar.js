import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }
  // handleSubmit = () => {
  //   let { searchValue } = this.state;
  //   searchValue = searchValue.trim();
  //   if (searchValue === false) {
  //     return;
  //   }
  //   searchValue = searchValue.toLowerCase();
  //   let searchUrl = `/search?tagName=${searchValue}&startIndex=1`;
  //   this.setState({
  //     searchValue: '',
  //   });
  // };
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img
              className="logo"
              src="https://www.flaticon.com/svg/static/icons/svg/1063/1063669.svg"
              alt="logo"
            />
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="enter your tag"
              value={this.state.searchValue}
              onChange={(e) => {
                this.setState({
                  searchValue: e.target.value,
                });
              }}
            />
            <Link
              className="link-submit"
              to={`/search/?tagName=${this.state.searchValue}&startIndex=1`}
            >
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/38/38298.svg"
                className="search-icon"
                alt="search"
              />
            </Link>
          </div>
          <div className="right-div nav-links">
            <ul>
              <li className="history">
                <Link to="/history">
                  <span className="link">History</span>
                </Link>
              </li>
              <li className="most-search-link">
                <Link to="/mostSearch">
                  <span className="link">MostSearch</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect()(Navbar);
