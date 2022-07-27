export default function Contato({nome, email, imagem: [src, alt]}) {
  return (
    <div className="contato">
      <img src={src} alt={alt} />
      <div className="informacoes">
        <div className="nome">{nome}</div>
        <div className="email">{email}</div>
      </div>
    </div>
  );
}
