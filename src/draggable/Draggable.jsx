import React from "react";
import "./Draggable.css";

const Draggable = ({ id, onDragStart, onDragOver, onDragEnd, children }) => {
  return (
    <div
      id={id}
      className="draggable"
      draggable="true"
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      {children}
    </div>
  );
};

export default Draggable;
