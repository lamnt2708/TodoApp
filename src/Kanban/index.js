import React, {useState} from "react";
import "./Kanban.css";
import KanbanHeader from "./KanbanHeader";
import KanbanTable from "./Kanban";
import TaskModal from "../TaskModal/index.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Kanban() {
  const [targetObj, settargetObj] = useState({});

  function handleOpenModal(e) {
    settargetObj(e);
    console.log('called')
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="kanban">
        <TaskModal obj={targetObj} closeModal={settargetObj}/>
        <KanbanHeader />
        <KanbanTable handeOpenModal={handleOpenModal} />
      </div>
    </DndProvider>
  );
}
export default Kanban;
