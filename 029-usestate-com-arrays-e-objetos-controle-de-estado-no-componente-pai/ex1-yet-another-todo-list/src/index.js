import {useState} from "react";
import ReactDOM from "react-dom";

function App() {
  const [tasks, setTasks] = useState(["Comprar banana", "Comprar pão"]);

  function addTask() {
    const task = prompt("Digite a tarefa:");
    setTasks([...tasks, task]);
  }

  return (
    <div className="todo-list">
      <button onClick={addTask}>Adicionar Tarefa</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
