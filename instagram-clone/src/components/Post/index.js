import React, { Component } from "react";
import Image from "./Image";
import Post from "../Post";
import img from "../Img";
export default class Post extends Component {
  render() {
    const { post } = this.props;
    return <Image src={src} alt={alt} />;
  }
}
