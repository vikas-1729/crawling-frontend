import React from 'react';
import { search } from '../actions/search';
import { connect } from 'react-redux';
import { BlogListItem } from './index';
import queryString from 'query-string';
import ReleatedTags from './ReleatedTags';
class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      page: 1,
    };
  }
  componentDidMount() {
    const url = this.props.location.search;
    let query = queryString.parse(url);
    this.props.dispatch(search(query.tagName, query.startIndex));
  }
  componentDidUpdate(prevProps, prevState) {
    const urlPrev = prevProps.location.search;
    const prevQuery = queryString.parse(urlPrev);
    const urlCurr = this.props.location.search;
    const currQuery = queryString.parse(urlCurr);
    if (prevQuery && currQuery && prevQuery.tagName !== currQuery.tagName) {
      //dispatch an action

      this.props.dispatch(search(currQuery.tagName, 1));
      this.setState({
        startIndex: 0,
        page: 1,
      });
    }
  }

  increaseStartIndex = () => {
    this.setState({
      startIndex: this.state.startIndex + 10,
    });
  };
  decreaseStartIndex = () => {
    if (this.state.startIndex < 10) {
      return;
    }
    this.setState({
      startIndex: this.state.startIndex - 10,
    });
  };
  fetchMoreBlogs = () => {
    let searchValue = this.props.search.tagName;
    searchValue = searchValue.trim();
    if (searchValue === '') {
      return;
    }
    this.setState({
      page: this.state.page + 1,
    });

    this.props.dispatch(search(searchValue, this.state.page));
  };
  render() {
    const { result, inProgress } = this.props.search;
    const {} = result;
    const { blogsArray: blogs, releatedTags } = result;
    if (inProgress) {
      return <h1>Loading .wait a minute ..</h1>;
    }
    let tempArray = [];
    let lastIndex = 0;
    if (blogs.length > 0) {
      lastIndex = this.state.startIndex + 10;
    }
    if (lastIndex >= blogs.length && blogs.length > 0 && inProgress === false) {
      this.fetchMoreBlogs();
    } else {
      for (
        let i = this.state.startIndex;
        i < lastIndex && lastIndex < blogs.length;
        i++
      ) {
        tempArray.push(blogs[i]);
      }
    }

    return (
      <div className="search-container">
        <div className="left-div">
          {releatedTags.length === 0 ? (
            <header>
              No Result Found try for most searched or look into history
            </header>
          ) : (
            <header>Releated tags</header>
          )}

          <ReleatedTags input={releatedTags} />
        </div>
        <div className="blog-list">
          {tempArray.map((blog) => {
            return (
              <BlogListItem
                blog={blog}
                key={blog._id}
                nextPage={this.increaseStartIndex}
                prevPage={this.decreaseStartIndex}
              />
            );
          })}
          <div className="btn-list-footer">
            {lastIndex <= blogs.length && lastIndex > 0 && (
              <button
                className="btn btn-forward"
                onClick={this.increaseStartIndex}
              >
                See Next
              </button>
            )}
            {this.state.startIndex >= 10 && (
              <button
                className="btn btn-backword"
                onClick={this.decreaseStartIndex}
              >
                See Prev
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
function mapToState(state) {
  console.log('state', state);
  return {
    search: state.search,
  };
}
export default connect(mapToState)(BlogList);
