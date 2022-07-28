import ReactDOM from "react-dom";

import "./assets/css/reset.css";
import "./assets/css/style.css";

import dog from "./assets/img/cao.png";
import cat from "./assets/img/gato.png";

function App() {
  return (
    <div class="page">
      <div class="member">
        <div class="info">
          <img src={dog} alt="Cão" />
          <div class="name">Cão</div>
        </div>
      </div>

      <div class="member">
        <div class="info">
          <img src={cat} alt="Gato" />
          <div class="name">Gato</div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
