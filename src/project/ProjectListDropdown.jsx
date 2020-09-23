import React from "react";
import "./ProjectListDropdown.css";

const ProjectListDropdown = ({ projects, onSelect }) => {
  const handleOnSelect = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div className="project-list-dropdown">
      <span className="project-list-dropdown--label">Select Project</span>
      <select
        className="project-list-dropdown--select"
        onChange={handleOnSelect}
      >
        {projects.map((project, index) => {
          const { id, name } = project;

          return (
            <option key={index} value={id}>{`${name} - ${index + 1}`}</option>
          );
        })}
      </select>
    </div>
  );
};

export default ProjectListDropdown;
