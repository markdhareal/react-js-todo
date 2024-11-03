import React, { useState } from "react";
import "./FormComponent.css";
import TagComponent from "./TagComponent";

const FormComponent = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTaskData((previosValue) => {
      return { ...previosValue, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(taskData);
  };

  return (
    <>
      <header className="app_header_section">
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            className="task_input"
            placeholder="Enter Task"
            onChange={handleChange}
          />

          <div className="task_form_bottom_line">
            <div>
              <TagComponent tagName="Personal" />
              <TagComponent tagName="Work" />
              <TagComponent tagName="Shopping" />
              <TagComponent tagName="Hobbies" />
            </div>

            <div>
              <select
                name="status"
                className="task_status"
                onChange={handleChange}
              >
                <option value="todo">To-Do</option>
                <option value="working">Working</option>
                <option value="done">Done</option>
              </select>

              <button type="submit" className="task_submit">
                + Add
              </button>
            </div>
          </div>
        </form>
      </header>
    </>
  );
};

export default FormComponent;
