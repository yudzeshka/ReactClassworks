import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header({ username, profileSrc }) {
  return (
    <div className="p-4">
      <Link to={`/p/${username}`} className="flex items-center">
        <img
          src={profileSrc}
          alt={username}
          className="w-8 h-8 rounded-full object-cover mr-3"
        />
        <p className="font-bold">{username}</p>
      </Link>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
  profileSrc: PropTypes.string.isRequired,
};
