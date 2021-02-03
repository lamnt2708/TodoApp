import React from "react";
import { ItemType } from "../ItemType/ItemType";
import { useDrag } from "react-dnd";

export default function TaskNote(obj, props) {
  const [{ isDraging }, drag] = useDrag({
    item: { type: ItemType.Task },
    collect: (monitor) => ({
        isDraging: !!monitor.isDragging()})
    
  });

  return (
    <div className="sticky-note">
      <div className="note-des" onClick={(e) => props.onClick(obj)}>
        <h4>{obj.name}</h4>
        <div className="list-task">
          <ul>
            {obj.tasklist.map((task) => (
              <li>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
