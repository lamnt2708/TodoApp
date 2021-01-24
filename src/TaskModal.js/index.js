import React, { useState, useEffect } from "react";
import TaskModalDetail from "./TaskModalDetail";
import "./TaskModal.css";


export default function TaskModal(obj) {
  const [openModal, setopenModal] = useState(0);
  const [targetTask, setTargetTask] = useState(0);

  useEffect(() => {
    if (Object.keys(obj.obj).length > 0 && openModal === 0 ) { setTargetTask(targetTask + 1); setopenModal(1) }
  }, [obj.obj])

  function handleClose(e) {
    setopenModal(0);
  }

  return (
    <div className="taskmodal" style={{ display: openModal ? "flex" : "none" }}>
      <TaskModalDetail task={obj} closeModal={handleClose} />
    </div>
  );
}
