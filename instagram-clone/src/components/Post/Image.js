<<<<<<< Updated upstream
import React from "react";
import PropTypes from "prop-types";
=======
import React from 'react';
import PropTypes from 'prop-types';
>>>>>>> Stashed changes

export default function Image({ src, caption }) {
  return (
    <img src={src} alt={caption} className="w-full max-h-screen object-cover" />
  );
}
<<<<<<< Updated upstream
Image.defaultProps = {
  caption: "No caption",
=======

Image.defaultProps = {
  caption: 'No caption',
>>>>>>> Stashed changes
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
};
