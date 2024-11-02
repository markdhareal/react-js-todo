import React from "react";
import "./TaskCard.css";
import TagComponent from "./TagComponent";
import deleteIcon from "../assets/delete.png";

const TaskCard = () => {
  return (
    <>
      <article className="task_card">
        <p className="task_text">This is a Text</p>

        <div className="class_card_bottomLine">
          <div className="task_card_tags">
            <TagComponent tagName="Personal" />
            <TagComponent tagName="Work" />
            <TagComponent tagName="Shopping" />
            <TagComponent tagName="Hobbies" />
          </div>
          <div className="task_delete">
            <img className="delete_icon" src={deleteIcon} alt="" />
          </div>
        </div>
      </article>
    </>
  );
};

export default TaskCard;
