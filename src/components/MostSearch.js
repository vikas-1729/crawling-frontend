import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMostSearchTag } from '../actions/tags';
import { API_URLS } from '../helper/urls';

class MostSearch extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMostSearchTag());
  }

  render() {
    const { mostSearchedTags } = this.props;
    return (
      <div className="most-search">
        <header>MostSearch</header>
        <div className="body">
          {mostSearchedTags.map((tag) => {
            return (
              <div className="tag-item" key={tag._id}>
                <Link
                  className="link-search"
                  to={API_URLS.linkToSearchComponent(tag.tag, 1)}
                >
                  <span className="tag-name">{tag.tag.toUpperCase()}</span>
                </Link>
                <span className="tag-hit-count">{tag.hitCount}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
function mapToState(state) {
  return {
    mostSearchedTags: state.tags.mostSearchedTags,
  };
}
export default connect(mapToState)(MostSearch);
