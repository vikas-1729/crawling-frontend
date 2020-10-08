import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { searchContent } from '../actions/content';

class Content extends Component {
  constructor(props) {
    super(props);
    this.contentRed = React.createRef();
  }
  componentDidMount() {
    if (this.props.location.state === undefined) {
      return;
    }
    const { url } = this.props.location.state;

    this.props.dispatch(searchContent(url));
  }
  createMarkup = () => {
    const content = this.props.content;
    return {
      __html: content,
    };
  };

  render() {
    const { inProgress } = this.props;

    if (inProgress) {
      return <h1>Loading ...</h1>;
    }
    return (
      <div className="content" dangerouslySetInnerHTML={this.createMarkup()} />
    );
  }
}

function mapToState(state) {
  return {
    content: state.search.content,
    inProgress: state.search.inProgress,
    error: state.search.error,
  };
}
export default connect(mapToState)(Content);
