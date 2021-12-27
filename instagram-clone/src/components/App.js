import React, { Component } from "react";
import Post from "./Post";
import profileImg from "../Img/cat.jpg";
import img from "../Img/photo_2021-12-20_20-40-30.jpg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { username: "katarinich" },
      post: {
        src: img,
        caption: "Cat on Piano",
        username: "katarinich",
        profileSrc: profileImg,
        likes: 11,
        comments: [
          { text: "Very nice cat", username: "mom" },
          { text: "I like black cats", username: "freind" },
          { text: "I hate cats", username: "hater" },
          { text: "Very nice cat", username: "mom" },
          { text: "I like black cats", username: "freind" },
          { text: "I hate cats", username: "hater" },
          { text: "Very nice cat", username: "mom" },
          { text: "I like black cats", username: "freind" },
          { text: "I hate cats", username: "hater" },
        ],
      },
    };
  }

  handleAddComment = (text) => {
    const { post } = this.state;

    this.setState({
      post: {
        ...post,
        comments: [...post.comments, { text, username: "katarinich" }],
      },
    });
  };

  render() {
    const { post, currentUser } = this.state;
    return (
      <div className="grid grid-cols-3 mx-auto max-w-screen-md ">
        <Post
          post={post}
          onAddComment={this.handleAddComment}
          currentUser={currentUser}
        />
      </div>
    );
  }
}
