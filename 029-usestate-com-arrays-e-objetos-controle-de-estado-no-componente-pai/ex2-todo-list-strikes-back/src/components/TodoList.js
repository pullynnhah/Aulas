import React from "react";

import Todo from "./Todo";

export default function TodoList() {
  const [tasks, setTasks] = React.useState(["Comprar banana", "Comprar pão"]);

  function addTask() {
    const task = prompt("Digite a tarefa:");
    setTasks([...tasks, task]);
  }

  function removeTask(task) {
    setTasks(tasks.filter(t => t !== task));
  }

  return (
    <div className="todo-list">
      <button onClick={addTask}>Adicionar Tarefa</button>
      <ul>
        {tasks.map((t, index) => (
          <Todo task={t} key={index} removeTask={removeTask} />
        ))}
      </ul>
    </div>
  );
}
