import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMostSearchTag } from '../actions/tags';
import { Cart } from './index';
class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMostSearchTag());
  }
  render() {
    const { historyTags, mostSearchedTags } = this.props.tags;
    const { result } = this.props.search;

    return (
      <div className="home">
        <div className="left-div">
          <div className="cart-collection"></div>
        </div>
        <div className="right-div"></div>
      </div>
    );
  }
}
function mapToState(state) {
  console.log('state', state);
  return {
    search: state.search,
    tags: state.tags,
  };
}
export default connect(mapToState)(Home);
