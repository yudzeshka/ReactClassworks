import React, { Component } from "react";

const COMMENTS_MIN_COUNT = 3;

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentSlice: 3,
    };
  }
  handleViewMoreComments = () => {
    const { commentSlice } = this.state;
    this.setState({
      commentSlice: commentSlice + COMMENTS_MIN_COUNT,
    });
  };

  render() {
    const { comments } = this.props;
    const { commentSlice } = this.state;
    return (
      <div className="p-4 pt-0">
        {comments.slice(0, commentSlice).map((comment) => (
          <p className="mb-1">
            <a href="#">
              <span className="font-bold mr-1">{comment.username}</span>
            </a>
            <span>{comment.text}</span>
          </p>
        ))}
        {comments.length > 3 && commentSlice < comments.length && (
          <button
            type="button"
            className="cursor-pointer text-gray-400"
            onClick={this.handleViewMoreComments}
          >
            View more comments
          </button>
        )}
      </div>
    );
  }
}
