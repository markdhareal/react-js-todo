import React from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import TaskColumn from "./components/TaskColumn";

const App = () => {
  return (
    <div className="app">
      <FormComponent />
      <main className="app_main_section">
        <TaskColumn taskTitle="To-Do" />
        <TaskColumn taskTitle="Working" />
        <TaskColumn taskTitle="Done" />
      </main>
    </div>
  );
};

export default App;
