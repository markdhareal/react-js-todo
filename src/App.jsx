import React, { useEffect, useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import TaskColumn from "./components/TaskColumn";

const oldTask = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };

  return (
    <div className="app">
      <FormComponent setTasks={setTasks} />
      <main className="app_main_section">
        <TaskColumn
          taskTitle="To-Do"
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          taskTitle="Working"
          tasks={tasks}
          status="working"
          handleDelete={handleDelete}
        />
        <TaskColumn
          taskTitle="Done"
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
