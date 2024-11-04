import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ taskTitle, tasks, status }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_title">{taskTitle}</h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard key={index} title={task.task} tags={task.tags} />
          )
      )}
    </section>
  );
};

export default TaskColumn;
