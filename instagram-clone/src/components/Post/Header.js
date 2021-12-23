import React from "react";

export default function Header({ username, profileSrc }) {
  return (
    <div className="p-4">
      <a href="#" className="flex items-center">
        <img
          src={profileSrc}
          alt={username}
          className="w-8 h-8 rounded-full object-cover mr-3"
        />{" "}
        <p className="font-bold">{username}</p>
      </a>
    </div>
  );
}
