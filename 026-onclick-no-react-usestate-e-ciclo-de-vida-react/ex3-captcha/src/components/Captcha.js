import React from "react";

export default function Captcha() {
  const [mensagem, setMensagem] = React.useState(null);

  return (
    <div className="captcha">
      <div className="titulo">Selecione o cachorro quente</div>
      <div className="imagens">
        <img
          onClick={() => setMensagem("Você é um robô")}
          src="https://cdn.shopify.com/s/files/1/0011/2191/0839/products/UTB8ldYRJCnEXKJk43Ubq6zLppXay_1024x1024@2x.jpg"
          alt="Salsicha fantasiado de cachorro quente"
        />
        <img
          onClick={() => setMensagem("Você é um robô")}
          src="https://i.pinimg.com/originals/aa/c4/e9/aac4e9dab9251087a4a079958aadf2ef.jpg"
          alt="Salsicha"
        />
        <img
          onClick={() => setMensagem("Você é um humano")}
          src="https://blog.pajaris.com.br/wp-content/uploads/2020/10/cachorro-quente-gourmet-receitas.jpg"
          alt="Salsicha"
        />
        <img
          onClick={() => setMensagem("Você é um robô")}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9DecJvRzGrTz1WwZT_uDjyAMgYj98pmKT7w&usqp=CAU"
          alt="Cachorro quente"
        />
      </div>
      <div className="resultado">{mensagem}</div>
    </div>
  );
}
