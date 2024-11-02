import React from "react";
import "./TagComponent.css";

const TagComponent = (props) => {
  return <button className="tag">{props.tagName}</button>;
};

export default TagComponent;
