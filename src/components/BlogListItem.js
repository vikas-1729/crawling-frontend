import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class BlogListItem extends Component {
  render() {
    const { header, blogInfo } = this.props.blog;
    const { author } = header;
    return (
      <div className="blog-list-item">
        <div className="blog-info">
          <div className="blog-title-info">
            <span className="blog-title">{blogInfo.title}</span>
            <span className="blog-subtitle">{blogInfo.subtitle}</span>
          </div>
          <Link className="link-to-read">ReadMe</Link>
          <div className="blog-response-info">
            <span className="blog-date">{blogInfo.time}</span>
            <span className="blog-time">{blogInfo.readTime}</span>

            <div className="blog-clap">
              <img
                className="clap-icon small-icon"
                src="https://www.flaticon.com/svg/static/icons/svg/599/599730.svg"
              />
              <span className="blog-clap-text">{blogInfo.clap}</span>
            </div>
            <div className="blog-response">
              <img
                className="response-icon small-icon"
                src="https://www.flaticon.com/svg/static/icons/svg/1380/1380338.svg"
              />
              <span className="blog-response-text">
                {blogInfo.response.count}
              </span>
            </div>
          </div>
          <div className="author">
            <Link to="#">
              <span className="author-name">Written By {author.name}</span>
            </Link>
            <Link to="#">
              {' '}
              <span className="author-community">
                {author.community.length > 0
                  ? `from Community  ${author.community}`
                  : ''}
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogListItem;
