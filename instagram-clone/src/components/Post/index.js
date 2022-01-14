import React, { Component } from 'react';
import PropTypes from 'prop-types';

<<<<<<< Updated upstream
import Header from "./Header";
import Actions from "./Actions";
import Caption from "./Caption";
import Comments from "./Comments";
import PropTypes from "prop-types";
=======
import Image from './Image';
import Header from './Header';
import Actions from './Actions';
import Caption from './Caption';
import Comments from './Comments';
>>>>>>> Stashed changes

export default class Post extends Component {
  constructor(props) {
    super(props);
<<<<<<< Updated upstream
    this.commentInputRef = React.createRef();
  }
  handleCommentClick = () => {
    this.commentInputRef.current.focus();
  };
  render() {
    const { post, onAddComments, currentUser } = this.props;
    return (
      <div className="border rounded border-gray-200 col-span-3">
        <Header username={post.username} profileSrc={post.profileSrc}></Header>
=======

    this.commentInputRef = React.createRef();
  }

  handleCommentClick = () => {
    this.commentInputRef.current.focus();
  };

  render() {
    const { post, onAddComment, currentUser } = this.props;

    return (
      <div className="border rounded border-black col-span-3">
        <Header username={post.username} profileSrc={post.profileSrc} />
>>>>>>> Stashed changes
        <Image src={post.src} caption={post.caption} />
        <Actions likes={post.likes} onCommentClick={this.handleCommentClick} />
        <Caption username={post.username} caption={post.caption} />
        <Comments
          comments={post.comments}
          commentInput={this.commentInputRef}
<<<<<<< Updated upstream
          onAddComments={onAddComments}
=======
          onAddComment={onAddComment}
>>>>>>> Stashed changes
          currentUser={currentUser}
        />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    profileSrc: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    caption: PropTypes.string,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
<<<<<<< Updated upstream
  onAddComments: PropTypes.func.isRequired,
=======
  onAddComment: PropTypes.func.isRequired,
>>>>>>> Stashed changes
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};
