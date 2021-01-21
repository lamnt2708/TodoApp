import React from "react";

const status = ["stt", "backlog", "todo", "inprocess", "stagging", "done"];

export default function TaskModalDetail(props) {
  const { task: obj } = props;
  return (
    <div className="modaldetail">
      <div className="modal-header">
        <h3>Edit {obj.name}</h3>
      </div>
      <textarea className="task-desc"></textarea>
      <select value={obj.status}>
        {status.map((s) => {
          return <item>{s}</item>;
        })}
      </select>
      <button type="submit">Change</button>
    </div>
  );
}
