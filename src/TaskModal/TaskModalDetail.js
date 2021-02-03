import React from "react";

const status = ["stt", "backlog", "todo", "inprocess", "stagging", "done"];

export default function TaskModalDetail(props) {
  const obj = props.task;

return Object.keys(obj).length ? (
    <div className="modaldetail">
      <div className="modal-header">
        <h3>Edit {obj.name}</h3>
      </div>
      <select value={obj.status}>
        {status.map((s) => {
          return <option value={s}>{s}</option>;
        })}
      </select>
      <button type="submit" onClick={e=> props.closeModal(0)}>Change</button>
    </div>
  ) : null;
}
