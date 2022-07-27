import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";

function App() {
  return <TodoList />;
}

ReactDOM.render(<App />, document.querySelector(".root"));
