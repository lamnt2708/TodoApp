import React from "react";
import KanbanFirstRow from "./KanbanFirstRow";
import DisplayTask from "./KanbanBody";


export default function KanbanTable(props) {
  return (
    <table id="kanban" className="kanban">
      <thead>
        <KanbanFirstRow />
      </thead>
      <tbody>
        <DisplayTask onClick={props.handeOpenModal}/>
      </tbody>
    </table>
  );
}
