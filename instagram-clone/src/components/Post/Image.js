import React from "react";

export default function Image({ src, caption }) {
  return (
    <img src={src} alt={caption} className="w-full max-h-screen object-cover" />
  );
}
