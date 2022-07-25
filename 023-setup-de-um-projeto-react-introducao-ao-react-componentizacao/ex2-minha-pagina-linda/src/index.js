import ReactDOM from "react-dom";

function Topo() {
  return <div className="topo">Minha página linda</div>;
}

function SobreMim() {
  return (
    <div>
      <h2>Sobre Mim</h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </div>
  );
}

function SaibaMais() {
  return (
    <div>
      <h2>Saiba Mais</h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </div>
  );
}

function Corpo() {
  return (
    <div className="corpo">
      <SobreMim />
      <SaibaMais />
    </div>
  );
}

function Rodape() {
  return <div className="rodape">Copyright 2021. Todos os direitos reservados.</div>;

}

function App() {
  return (
    <div>
      <Topo />
      <Corpo />
      <Rodape />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
