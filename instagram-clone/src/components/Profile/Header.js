import React, { Component } from 'react';

import defaultAvatar from '../../img/default_avatar.jpg';

export default class Header extends Component {
  render() {
    const {
      user: {
        username,
        profileSrc,
        postCount,
        followersCount,
        followingCount,
        fullName,
      },
    } = this.props;

    return (
      <div className="grid grid-cols-3 gap-4 items-center mx-auto max-w-screen-lg col-span-3">
        <img
          className="rounded-full h-40 w-40 object-cover"
          alt={`${username} profile`}
          src={profileSrc}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = defaultAvatar;
          }}
        />

        <div className="col-span-2">
          <div className="flex items-stretch">
            <p className="text-2xl mr-4">{username}</p>
            <button className="font-bold text-sm rounded bg-blue-500 text-white px-4">
              Follow
            </button>
          </div>

          <div className="flex mt-4">
            <p className="mr-10">
              <span className="font-bold">{postCount}</span> posts
            </p>

            <p className="mr-10">
              <span className="font-bold">{followersCount}</span> followers
            </p>

            <p className="mr-10">
              <span className="font-bold">{followingCount}</span> following
            </p>
          </div>

          <p className="mt-4 font-medium">{fullName}</p>
        </div>
      </div>
    );
  }
}
