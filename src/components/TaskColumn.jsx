import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const TaskColumn = ({
  taskTitle,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop,
}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_title">{taskTitle}</h2>
      {/* Drop Area for the whole column */}
      <DropArea onDrop={() => onDrop(status, 0)} />{" "}
      {/* Using index 0 as an example */}
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <React.Fragment key={index}>
              <TaskCard
                title={task.task}
                tags={task.tags}
                handleDelete={handleDelete}
                index={index}
                setActiveCard={setActiveCard}
              />
              {/* Drop Area for each task card */}
              <DropArea onDrop={() => onDrop(status, index + 1)} />{" "}
              {/* Pass correct index */}
            </React.Fragment>
          )
      )}
    </section>
  );
};

export default TaskColumn;
