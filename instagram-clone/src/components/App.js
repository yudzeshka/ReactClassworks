import React, { Component } from "react";
import Post from "./Post";
import profileImg from "../Img/cat.jpg";
import img from "../Img/photo_2021-12-20_20-40-30.jpg";

export default class App extends Component {
  render() {
    const post = {
      src: img,
      caption: "cat",
      username: "katarinich",
      profileSrc: profileImg,
    };
    return <Post post={post} />;
  }
}
