import React from "react";
import TaskNote from "./TaskNote";
import { useDrop } from "react-dnd";
import { ItemType } from "../ItemType/ItemType";
import {TaskArr} from '../ItemType/TaskList'


function ChangeTask(obj) {
  console.log(obj);
}

const status = ["stt", "backlog", "todo", "inprocess", "stagging", "done"];
function changeStatus(e) {
  console.log(e.target.value);
}

export default function DisplayTask(props) {
  
  const [{ isOver }, drop] = useDrop({
    accept: ItemType.Task,
    drop: (e) => changeStatus(e),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });


  return TaskArr.map((obj) => {
    return (
      <tr>
        {status.map((s) => {
          return (
            <td
              key={s}
              className={s === "stt" ? "status-column" : "kanban-column " + s}            >
              {obj.status === s && TaskNote(obj, props)}
            </td>
          );
        })}
      </tr>
    );
  });
}
