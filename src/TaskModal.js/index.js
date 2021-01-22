import React, {useState, useEffect} from "react";
import TaskModalDetail from "./TaskModalDetail";
import "./TaskModal.css";


export default function TaskModal(obj) {
  const [openModal, setopenModal] = useState( 0 );
  const [targetTask, setTargetTask] = useState(obj.obj)

function handleClose(e){
  setopenModal(0);
  setTargetTask({});
}

  return (
    <div className="taskmodal" style={{display: openModal ? "flex" : "none"}}>
      <TaskModalDetail task={obj} closeModal={handleClose}/>
    </div>
  );
}
