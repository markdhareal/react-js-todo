import React, { useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import TaskColumn from "./components/TaskColumn";

const App = () => {
  const [tasks, setTasks] = useState([]);

  console.log("tasks", tasks);

  return (
    <div className="app">
      <FormComponent setTasks={setTasks} />
      <main className="app_main_section">
        <TaskColumn taskTitle="To-Do" tasks={tasks} status="todo" />
        <TaskColumn taskTitle="Working" tasks={tasks} status="working" />
        <TaskColumn taskTitle="Done" tasks={tasks} status="done" />
      </main>
    </div>
  );
};

export default App;
