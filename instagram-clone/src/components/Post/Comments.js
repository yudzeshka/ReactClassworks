import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddCommentForm from './AddCommentForm';

const COMMENTS_MIN_COUNT = 3;

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentSlice: COMMENTS_MIN_COUNT,
    };
  }

  handleViewMoreComments = () => {
    const { commentSlice } = this.state;

    this.setState({
      commentSlice: commentSlice + COMMENTS_MIN_COUNT,
    });
  };

  render() {
    const { comments, commentInput, onAddComment, currentUser } = this.props;
    const { commentSlice } = this.state;

    const [currentUserComment, otherComments] = comments.reduce(
      (result, currentComment) => {
        if (currentComment.username === currentUser.username) {
          result[0].push(currentComment);
        } else {
          result[1].push(currentComment);
        }

        return result;
      },
      [[], []]
    );

    const sortedComments = [...currentUserComment.reverse(), ...otherComments];

    return (
      <div className="p-4 pt-0">
        {sortedComments.slice(0, commentSlice).map((comment) => (
          <p className="mb-1">
            <a href="#">
              <span className="font-bold mr-1">{comment.username}</span>
            </a>

            <span>{comment.text}</span>
          </p>
        ))}

        {sortedComments.length > COMMENTS_MIN_COUNT &&
          commentSlice < sortedComments.length && (
            <button
              type="button"
              className="cursor-pointer text-gray-400 mb-2"
              onClick={this.handleViewMoreComments}
            >
              View more comments
            </button>
          )}

        <AddCommentForm commentInput={commentInput} onSubmit={onAddComment} />
      </div>
    );
  }
}

Comments.propTypes = {
  commentInput: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddComment: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};
