import React from "react";

const status = ["stt", "backlog", "todo", "inprocess", "stagging", "done"];

export default function TaskModalDetail(props) {
  const obj = props.task.obj;

  function handlecloseModal(e) {
    console.log(props.closeModal)
    props.closeModal(0);
  }

  return (
    <div className="modaldetail">
      <div className="modal-header">
        <h3>Edit {obj.name}</h3>
      </div>
      <textarea className="task-desc">{obj.name}</textarea>
      <select value={obj.status}>
        {status.map((s) => {
          return <item>{s}</item>;
        })}
      </select>
      <button type="submit" onClick={e=> handlecloseModal(0)}>Change</button>
    </div>
  );
}
