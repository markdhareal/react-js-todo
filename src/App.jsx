import React, { useEffect, useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import TaskColumn from "./components/TaskColumn";

import todoIcon from "./assets/target.png";
import working from "./assets/roadmap.png";
import done from "./assets/checked.png";

const oldTask = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };

  const onDrop = (status, position) => {
    console.log(`status: ${status} position: ${position}`);

    if (activeCard == null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTask = tasks.filter((task, index) => index !== activeCard);

    updatedTask.splice(position, 0, {
      ...taskToMove,
      status: status,
    });

    setTasks(updatedTask);
  };

  return (
    <div className="app">
      <FormComponent setTasks={setTasks} />
      <main className="app_main_section">
        <TaskColumn
          taskTitle="To-Do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          taskTitle="Working"
          icon={working}
          tasks={tasks}
          status="working"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          taskTitle="Done"
          icon={done}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
};

export default App;
