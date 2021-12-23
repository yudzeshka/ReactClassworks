import React from "react";

export default function Caption({ username, caption }) {
  return (
    <div className="p-4 pt-0">
      <span className="font-bold mr-1">{username}</span>
      <span>{caption}</span>
    </div>
  );
}
