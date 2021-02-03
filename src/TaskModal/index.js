import React, { useState, useEffect } from "react";
import TaskModalDetail from "./TaskModalDetail";
import "./TaskModal.css";


export default function TaskModal(props) {
  const [openModal, setopenModal] = useState(0);

  useEffect(() => {
    if (Object.keys(props.obj).length > 0 && openModal === 0 ) { setopenModal(1) }
  }, [props])

  function handleClose(e) {
    setopenModal(0);
    props.closeModal({})
  }

  return (
    <div className="taskmodal" style={{ display: openModal ? "flex" : "none" }}>
      <TaskModalDetail task={props.obj} closeModal={handleClose} />
    </div>
  );
}
