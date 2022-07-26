function Post(props) {
  return (
    <div className="post">
      <img src={props.src} alt={props.alt} />
      <h1 className="titulo">{props.alt}</h1>
    </div>
  );
}

export default function Conteudo() {
  return (
    <div className="posts">
      <Post src="img/asshole-fish.jpeg" alt="Parabéns, evolução" />
      <Post src="img/polite-bunny.jpeg" alt="Iti malia" />
    </div>
  );
}
