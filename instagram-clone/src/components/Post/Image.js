import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ src, caption }) {
  return (
    <img src={src} alt={caption} className="w-full max-h-screen object-cover" />
  );
}

Image.defaultProps = {
  caption: 'No caption',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
};
