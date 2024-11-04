import React, { useState } from "react";
import "./FormComponent.css";
import TagComponent from "./TagComponent";

const FormComponent = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.includes(tag);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTaskData((previosValue) => {
      return { ...previosValue, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((previosValue) => {
        return { ...previosValue, tags: filterTags };
      });
    } else {
      setTaskData((previosValue) => {
        return { ...previosValue, tags: [...previosValue.tags, tag] };
      });
    }
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
              <TagComponent
                tagName="Personal"
                selectTag={selectTag}
                selected={checkTag("Personal")}
              />
              <TagComponent
                tagName="Work"
                selectTag={selectTag}
                selected={checkTag("Work")}
              />
              <TagComponent
                tagName="Shopping"
                selectTag={selectTag}
                selected={checkTag("Shopping")}
              />
              <TagComponent
                tagName="Hobbies"
                selectTag={selectTag}
                selected={checkTag("Hobbies")}
              />
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
