import React from "react";
import "./Task.css";

const Task = ({ task, onUpdate }) => {
  const { id, description, isCompleted } = task;

  const handleOnChange = () => {
    onUpdate({ ...task, isCompleted: !isCompleted });
  };

  const strikeClassName = isCompleted ? "task--strike" : "";
  return (
    <div className="task">
      <input
        type="checkbox"
        onChange={handleOnChange}
        checked={isCompleted}
      ></input>
      <span className={`task--description ${strikeClassName}`}>
        {description}
      </span>
    </div>
  );
};

export default Task;
