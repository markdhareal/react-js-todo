import React from "react";
import "./TagComponent.css";

const TagComponent = ({ tagName, selectTag }) => {
  return (
    <button type="button" onClick={() => selectTag(tagName)} className="tag">
      {tagName}
    </button>
  );
};

export default TagComponent;
