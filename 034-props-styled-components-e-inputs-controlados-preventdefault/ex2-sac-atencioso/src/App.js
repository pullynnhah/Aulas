import {useState} from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submitData(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <>
      <h2>Contato</h2>
      <h4>Sua opinião é muito importante para nós :)</h4>
      <form className="flex column" onSubmit={submitData}>
        <div className="row flex column margin-top">
          <label htmlFor="nome">Nome</label>
          <input
            required
            type="text"
            id="nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="row flex column margin-top">
          <label htmlFor="email">E-mail</label>
          <input
            required
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="row flex column margin-top">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            required
            id="mensagem"
            value={message}
            onChange={e => setMessage(e.target.value)}></textarea>
        </div>
        <div className="row flex column margin-top">
          <button type="submit">Enviar mensagem!</button>
        </div>
      </form>
    </>
  );
}
