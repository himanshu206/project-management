import React from "react";
import Task from "./Task";
import Draggable from "../draggable/Draggable";

import "./TaskList.css";

class TaskList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.draggingTaskId = null;
    this.dragOverTaskId = null;
  }

  handleOnUpdate = (updatedTask) => {
    const { tasks, onUpdate } = this.props;
    const updatedTaskList = tasks.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    onUpdate(updatedTaskList);
  };

  handleOnDragStart = (event) => {
    event.dataTransfer.effectAllowed = "move";
    this.draggingTaskId = event.currentTarget.id;
  };

  handleOnDragOver = (event) => {
    event.preventDefault();
    this.dragOverTaskId = event.currentTarget.id;
  };

  handleOnDragEnd = () => {
    const { tasks, onUpdate } = this.props;

    const draggingTask = tasks.find((task) => task.id === this.draggingTaskId);
    const dragOverTask = tasks.find((task) => task.id === this.dragOverTaskId);

    const updatedTaskList = tasks.map((task) => {
      if (task.id === draggingTask.id) {
        return dragOverTask;
      }
      if (task.id === dragOverTask.id) {
        return draggingTask;
      }
      return task;
    });

    onUpdate(updatedTaskList);
  };

  render() {
    const { tasks } = this.props;
    return (
      <div className="task-list">
        {tasks.map((task) => (
          <Draggable
            key={task.id}
            id={task.id}
            onDragStart={this.handleOnDragStart}
            onDragEnd={this.handleOnDragEnd}
            onDragOver={this.handleOnDragOver}
          >
            <Task task={task} onUpdate={this.handleOnUpdate}></Task>
          </Draggable>
        ))}
      </div>
    );
  }
}

export default TaskList;
