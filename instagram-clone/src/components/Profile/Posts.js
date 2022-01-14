import React, { Component } from 'react';

export default class Posts extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="grid sm:grid-cols-3 gap-8 col-span-3 grid-cols-1">
        {posts.map((post) => (
          <div className="relative group pt-[100%]">
            <img
              src={post.src}
              alt={post.caption}
              className=" w-full h-full object-cover absolute top-0 left-0"
            />

            <div className="absolute flex items-center justify-around w-full h-full top-0 left-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out ">
              <p className="text-white font-bold">{post.likes}</p>
              <p className="text-white font-bold">{post.comments.length}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
