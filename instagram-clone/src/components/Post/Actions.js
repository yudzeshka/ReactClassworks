<<<<<<< Updated upstream
import React, { Component } from "react";
import { ReactComponent as LikeIcon } from "../../icons/heart-thin.svg";
import { ReactComponent as ShareIcon } from "../../icons/instagram-share.svg";
import { ReactComponent as CommentIcon } from "../../icons/instagram-comment.svg";
import PropTypes from "prop-types";
export default class Actions extends Component {
  render() {
    const { likes, onCommentClick } = this.props;
    return (
      <div className="p-4 ">
=======
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as LikeIcon } from '../../icons/heart-thin.svg';
import { ReactComponent as ShareIcon } from '../../icons/instagram-share.svg';
import { ReactComponent as CommentIcon } from '../../icons/instagram-comment.svg';

export default class Actions extends Component {
  render() {
    const { likes, onCommentClick } = this.props;

    return (
      <div className="p-4">
>>>>>>> Stashed changes
        <div className="flex">
          <LikeIcon className="w-8 cursor-pointer mr-4" />
          <CommentIcon
            className="w-8 cursor-pointer mr-4"
            onClick={onCommentClick}
          />
<<<<<<< Updated upstream
          <ShareIcon className="w-8 cursor-pointer " />
        </div>
        <p className="p-4 py-0 font-bold mt-2">
=======
          <ShareIcon className="w-8 cursor-pointer" />
        </div>

        <p className="font-bold mt-2">
>>>>>>> Stashed changes
          {likes === 1 ? `${likes} like` : `${likes} likes`}
        </p>
      </div>
    );
  }
}

Actions.propTypes = {
  likes: PropTypes.number.isRequired,
  onCommentClick: PropTypes.func.isRequired,
};
