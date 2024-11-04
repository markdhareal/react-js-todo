import React from "react";
import "./TagComponent.css";

const TagComponent = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    Personal: { backgroundColor: "#fda821" },
    Work: { backgroundColor: "#15d4c8" },
    Shopping: { backgroundColor: "#ffd12c" },
    Hobbies: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
      className="tag"
    >
      {tagName}
    </button>
  );
};

export default TagComponent;
