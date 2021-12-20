import React from "react";

export default function Image({ src, caption }) {
  return <img src={src} alt={caption} />;
}
