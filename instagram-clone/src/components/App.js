import React, { Component } from "react";
import Post from "./Post";
import profileImg from "../Img/cat.jpg";
import img from "../Img/photo_2021-12-20_20-40-30.jpg";

export default class App extends Component {
  render() {
    const post = {
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
    };
    return (
      <div className="grid grid-cols-3 mx-auto max-w-screen-md ">
        <Post post={post} />
      </div>
    );
  }
}
