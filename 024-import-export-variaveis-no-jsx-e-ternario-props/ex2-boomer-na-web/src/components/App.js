export default function App() {
  const name = prompt("Qual a sua graça?");
  return (
    <div>
      <div className="wordart rainbow">
        <div className="text">Bem vindo, {name ? name : "Anônimo"}!</div>
      </div>
      <div className="wordart blues">
        <div className="text">Como vai você?</div>
      </div>
    </div>
  );
}
