import React from "react";


const arr = [
  {
    status: "inprocess",
    name: "Implement Todo App",
    tasklist: ["implenment Ui", "implenment backend", "deploy"],
    time: "2021/1",
  },
  {
    status: "todo",
    name: "Plan and preper for new year",
    tasklist: ["plan for whole year", "do 1st month plan"],
    time: "2021/12",
  },
];

function ChangeTask(obj) {
  console.log(obj);
}

function TaskNote(obj) {
  return (
    <div className="sticky-note">
      <div className="note-des" onClick={e => console.log(obj)}>
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

const status = ["stt", "backlog", "todo", "inprocess", "stagging", "done"];

export default function DisplayTask(props) {
  console.log(props);
  return arr.map((obj) => {
    return (
      <tr>
        {status.map((s) => {
          return (
            <td
              key={s}
              className={s === "stt" ? "status-column" : "kanban-column " + s}
             // onClick={(e) => ChangeTask(obj)}
            >
              {obj.status === s && TaskNote(obj)}
            </td>
          );
        })}
      </tr>
    );
  });
}
