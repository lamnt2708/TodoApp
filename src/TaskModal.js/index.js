import React from "react";
import TaskModalDetail from "./TaskModalDetail";
import "./TaskModal.css";

export default function TaskModal(obj) {
  return (
    <div className="taskmodal">
      <TaskModalDetail task={obj}/>
    </div>
  );
}
