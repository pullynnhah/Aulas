import Contato from "./components/Contato";

const contatos = [
  {
    nome: "Jake",
    email: "jake@aventure.time",
    imagem: [
      "https://i.pinimg.com/originals/26/3f/2a/263f2a3dbceb91ef5dbb8c3988fbc25e.gif",
      "Jake sorrindo GIF",
    ],
  },
  {
    nome: "Finn",
    email: "finn@adventure.time",
    imagem: [
      "https://i.pinimg.com/originals/b6/cb/30/b6cb30057fd6f6f5ac602b3811c63a53.gif",
      "Finn feliz no fogo",
    ],
  },
  {
    nome: "Princesa Jujuba",
    email: "bubblegum@adventure.time",
    imagem: ["https://i.gifer.com/SERv.gif", "Princesa Jujuba GIF"],
  },
];

export default function App() {
  return (
    <div className="contatos">
      {contatos.map(c => (
        <Contato nome={c.nome} email={c.email} imagem={c.imagem} />
      ))}
    </div>
  );
}
