function buscarDados() {
  const promise = axios.get("https://rickandmortyapi.com/api/character/118");
  promise.then(getPersonagem);
}

function getPersonagem(response) {
  personagem = response.data;
  renderizarPersonagem(personagem);
}


function renderizarPersonagem(personagem) {
  const elementoImagem = document.querySelector(".imagem-do-personagem");
  const elementoNome = document.querySelector(".nome");
  const elementoEspecie = document.querySelector(".especie");

  elementoImagem.src = personagem.image;
  elementoNome.textContent = personagem.name;
  elementoEspecie.textContent = personagem.species;
}

let personagem = null;
