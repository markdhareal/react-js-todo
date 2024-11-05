import React from "react";
import "./TaskCard.css";
import TagComponent from "./TagComponent";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags, handleDelete, index, setActiveCard }) => {
  return (
    <>
      <article
        className="task_card"
        draggable
        onDragStart={() => setActiveCard(index)}
        onDragEnd={() => setActiveCard(null)}
      >
        <p className="task_text">{title}</p>

        <div className="class_card_bottomLine">
          <div className="task_card_tags">
            {tags.map((tag, index) => (
              <TagComponent key={index} tagName={tag} selected />
            ))}
          </div>
          <div className="task_delete" onClick={() => handleDelete(index)}>
            <img className="delete_icon" src={deleteIcon} alt="" />
          </div>
        </div>
      </article>
    </>
  );
};

export default TaskCard;
