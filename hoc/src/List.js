import React from "react";
import propTypes from "prop-types";
import withLoading from "./withLoading";

export function List({ items }) {
  if (!items) {
    return null;
  }

  if (!items.length) {
    return <p>No items</p>;
  }
  return (
    <ul>
      {items.map((item) => (
        <li key={item.value}>{item.label}</li>
      ))}
    </ul>
  );
}

List.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.string,
      label: propTypes.string,
    })
  ).isRequired,
};

export default withLoading(List);
