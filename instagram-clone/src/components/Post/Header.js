<<<<<<< Updated upstream
import React from "react";
import PropTypes from "prop-types";
=======
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
>>>>>>> Stashed changes

export default function Header({ username, profileSrc }) {
  return (
    <div className="p-4">
<<<<<<< Updated upstream
      <a href="#" className="flex items-center">
=======
      <Link to={`/p/${username}`} className="flex items-center">
>>>>>>> Stashed changes
        <img
          src={profileSrc}
          alt={username}
          className="w-8 h-8 rounded-full object-cover mr-3"
<<<<<<< Updated upstream
        />{" "}
        <p className="font-bold">{username}</p>
      </a>
=======
        />
        <p className="font-bold">{username}</p>
      </Link>
>>>>>>> Stashed changes
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
  profileSrc: PropTypes.string.isRequired,
};
