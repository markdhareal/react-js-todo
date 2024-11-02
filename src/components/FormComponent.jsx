import React from "react";
import "./FormComponent.css";
import TagComponent from "./TagComponent";

const FormComponent = () => {
  return (
    <>
      <header className="app_header_section">
        <form>
          <input type="text" className="task_input" placeholder="Enter Task" />

          <div className="task_form_bottom_line">
            <div>
              <TagComponent tagName="Personal" />
              <TagComponent tagName="Work" />
              <TagComponent tagName="Shopping" />
              <TagComponent tagName="Hobbies" />
            </div>

            <div>
              <select className="task_status">
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
