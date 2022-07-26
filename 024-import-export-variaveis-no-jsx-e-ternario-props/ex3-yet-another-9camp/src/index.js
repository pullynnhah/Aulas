import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";

function App() {
  return (
    <div>
      <Navbar />
      <Conteudo />
      <Rodape />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
