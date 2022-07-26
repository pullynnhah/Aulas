export default function App() {
  function selecionarPrimeiraOpcao(opcao) {
    if (opcao === "bolacha") {
      alert("Você escolheu sabiamente");
    } else {
      alert("Você escolheu erradamente");
    }
  }

  function selecionarSegundaOpcao(opcao) {
    if (opcao === "nescau") {
      alert("Você escolheu sabiamente");
    } else {
      alert("Você escolheu erradamente");
    }
  }

  return (
    <>
      <div className="grupo">
        <h1>Escolha a opção correta</h1>
        <button onClick={() => selecionarPrimeiraOpcao("bolacha")}>Bolacha</button>
        <button onClick={() => selecionarPrimeiraOpcao("biscoito")}>Biscoito</button>
      </div>

      <div className="grupo">
        <h1>Escolha a opção correta</h1>
        <button onClick={() => selecionarSegundaOpcao("toddy")}>Toddy</button>
        <button onClick={() => selecionarSegundaOpcao("nescau")}>Nescau</button>
      </div>
    </>
  );
}
