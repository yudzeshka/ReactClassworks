import React from "react";
import PropTypes from "prop-types";

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

Header.propTypes = {
  username: PropTypes.string.isRequired,
  profileSrc: PropTypes.string.isRequired,
};
