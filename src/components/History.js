import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateHistoryTag } from '../actions/search';
import { API_URLS } from '../helper/urls';
import { historyFunction } from '../helper/utils';

class History extends Component {
  handleDelete = (tagName) => {
    if (tagName) {
      tagName = tagName.toLowerCase();
      historyFunction.deleteTag(tagName);
      this.props.dispatch(updateHistoryTag());
    }
  };
  render() {
    const { historyTags } = this.props;
    console.log('val', historyTags);
    if (historyTags.length === 0) {
      return <h1>No History</h1>;
    }
    return (
      <div className="history">
        <header>History</header>
        <div className="sub-header">
          <h3>Tag</h3>
          <h3>No of Time Searched</h3>
          <h3>Recently Search</h3>
          <h3>Delete</h3>
        </div>
        <div className="history-body">
          {historyTags.map((obj, index) => {
            return (
              <div className="history-item" key={index}>
                <Link to={API_URLS.linkToSearchComponent(obj.tag, 1)}>
                  <span>{obj.tag}</span>
                </Link>
                <span>{obj.hitCount}</span>
                <span>{obj.time}</span>
                <button
                  className="btn-del"
                  onClick={() => {
                    this.handleDelete(obj.tag);
                  }}
                >
                  <span>
                    <img
                      className="delete-icon"
                      src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg"
                      alt="delete"
                    />
                  </span>
                </button>
              </div>
            );
          })}
          ;
        </div>
        {historyTags.length > 0 && (
          <button
            className="btn-del"
            onClick={() => {
              historyFunction.deleteAll();
              this.props.dispatch(updateHistoryTag());
            }}
          >
            Clear All
            <span>
              <img
                className="delete-icon"
                src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg"
                alt="delete"
              />
            </span>
          </button>
        )}
      </div>
    );
  }
}
function mapToState(state) {
  console.log(state.tags);
  return {
    historyTags: state.tags.historyTags,
  };
}
export default connect(mapToState)(History);
