import React from "react";

import ProjectUtil from "./ProjectUtil";
import ProjectListDropdown from "./ProjectListDropdown";

import TaskList from "../task/TaskList";

import "./ProjectContainer.css";

const API_URL = "http://demo0242938.mockable.io/todo";

class ProjectContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      selectedProjectId: null,
    };
  }

  componentDidMount() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          { projects: ProjectUtil.transformProjects(data.Project) },
          () => {
            const { projects } = this.state;
            this.setState({ selectedProjectId: projects[0].id });
          }
        )
      );
  }

  handleOnProjectSelect = (projectId) => {
    this.setState({ selectedProjectId: projectId });
  };

  handleOnUpdateTaskList = (updatedTaskList) => {
    const { projects, selectedProjectId } = this.state;
    const projectIndex = projects.findIndex(
      (project) => project.id === selectedProjectId
    );

    const updatedProjects = [...projects];
    updatedProjects[projectIndex].tasks = updatedTaskList;

    this.setState({
      projects: updatedProjects,
    });
  };

  render() {
    const { projects, selectedProjectId } = this.state;
    return (
      <div className="project-container">
        <ProjectListDropdown
          projects={projects}
          onSelect={this.handleOnProjectSelect}
        ></ProjectListDropdown>

        {selectedProjectId ? (
          <TaskList
            tasks={
              projects.find((project) => project.id === selectedProjectId).tasks
            }
            onUpdate={this.handleOnUpdateTaskList}
          ></TaskList>
        ) : null}
      </div>
    );
  }
}

export default ProjectContainer;
