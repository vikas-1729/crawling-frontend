import React from 'react';
import { search } from '../actions/search';
import { connect } from 'react-redux';
import { BlogListItem } from './index';
class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      page: 2,
    };
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
    let searchValue = this.props.tagName;
    searchValue = searchValue.trim();
    if (searchValue === '') {
      return;
    }
    searchValue = searchValue.toLowerCase();
    this.props.dispatch(search(searchValue, this.state.page));
    this.setState({
      page: this.state.page + 1,
    });
  };
  render() {
    const { blogs, inProgress } = this.props;
    if (inProgress) {
      return <h1>Loading .wait a minute ..</h1>;
    }
    let blogsArray = [];
    let lastIndex = 0;
    if (blogs.length > 0) {
      lastIndex = this.state.startIndex + 10;
    }
    if (
      lastIndex >= blogs.length &&
      blogs.length > 0 &&
      this.props.inProgress === false
    ) {
      this.fetchMoreBlogs();
    } else {
      for (
        let i = this.state.startIndex;
        i < lastIndex && lastIndex < blogs.length;
        i++
      ) {
        blogsArray.push(blogs[i]);
      }
    }
    console.log('blogs', blogsArray.length, blogsArray);
    return (
      <div className="blog-list">
        {blogsArray.map((blog) => {
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
    );
  }
}
export default connect()(BlogList);
