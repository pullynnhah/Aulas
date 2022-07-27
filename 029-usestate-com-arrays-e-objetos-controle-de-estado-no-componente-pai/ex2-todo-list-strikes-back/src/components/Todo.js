/* eslint-disable */

export default function Todo({task, removeTask}) {
  return (
    <li>
      <div className="delete" onClick={() => removeTask(task)}>
        <ion-icon name="trash-outline"></ion-icon>
      </div>
      <div className="text">{task}</div>
    </li>
  );
}
