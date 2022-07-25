import ReactDOM from "react-dom";

function List() {
  return (
    <div>
      <h1>Lista de Compras</h1>
      <ul>
        <li>Pão</li>
        <li>Banana</li>
        <li>Milk Shake de Doce de Leite</li>
        <li>Nutella</li>
        <li>Sorvete</li>
      </ul>
    </div>
  );
}

ReactDOM.render(List(), document.querySelector(".root"));