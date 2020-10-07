import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/search';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }
  handleSubmit = () => {
    let { searchValue } = this.state;
    searchValue = searchValue.trim();
    if (searchValue === false) {
      return;
    }
    searchValue = searchValue.toLowerCase();
    this.props.dispatch(search(searchValue));
    this.setState({
      searchValue: '',
    });
  };
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
            <button className="btn-submit" onClick={this.handleSubmit}>
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/38/38298.svg"
                className="search-icon"
                alt="search"
              />
            </button>
          </div>
          <div className="right-part">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/53/53133.svg"
              className="logo"
              alt="avataar"
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default connect()(Navbar);
