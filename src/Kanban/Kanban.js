import React from "react";
import KanbanFirstRow from "./KanbanFirstRow";
import KanbanBody from "./KanbanBody";
import TaskModal from "../TaskModal.js";

export default function KanbanTable() {
  return (
    <table id="kanban" className="kanban">
      <thead>
        <KanbanFirstRow />
      </thead>
      <tbody>
      
        <KanbanBody />
      </tbody>
    </table>
  );
}
