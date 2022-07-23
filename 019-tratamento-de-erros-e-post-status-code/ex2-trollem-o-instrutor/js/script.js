function inserirReceita() {
  const titulo = document.querySelector(".titulo-receita").value;
  const ingredientes = document.querySelector(".ingredientes-receita").value;
  const preparo = document.querySelector(".preparo-receita").value;

  const promessa = axios.post(
    "https://mock-api.driven.com.br/api/v2/tastecamp/receitas",
    {
      titulo: titulo,
      ingredientes: ingredientes,
      preparo: preparo
    }
  );

  promessa.then(receitaCadastradaComSucesso);
  promessa.catch(receitaNaoCadastrada);
}

function receitaCadastradaComSucesso() {
  divErro.innerHTML = "";
  alert("Receita cadastrada com sucesso!");
}

function receitaNaoCadastrada(error) {
  const code = error.response.status;
  divErro.innerHTML = `<img src="img/${code}.jpg" />`
}
const divErro = document.querySelector(".imagem-erro"); 

