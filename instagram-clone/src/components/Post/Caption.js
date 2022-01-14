<<<<<<< Updated upstream
import React from "react";
import PropTypes from "prop-types";
=======
import React from 'react';
import PropTypes from 'prop-types';

>>>>>>> Stashed changes
export default function Caption({ username, caption }) {
  return (
    <div className="p-4 pt-0">
      <span className="font-bold mr-1">{username}</span>
      <span>{caption}</span>
    </div>
  );
}

Caption.defaultProps = {
<<<<<<< Updated upstream
  caption: "",
=======
  caption: '',
>>>>>>> Stashed changes
};

Caption.propTypes = {
  username: PropTypes.string.isRequired,
  caption: PropTypes.string,
};
