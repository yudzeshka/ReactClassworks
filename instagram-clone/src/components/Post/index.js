import React, { Component } from "react";
import Image from "./Image";

import Header from "./Header";

export default class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <>
        {" "}
        <Header username={post.username} profileSrc={post.profileSrc}></Header>
        <Image src={post.src} caption={post.caption} />;
      </>
    );
  }
}
