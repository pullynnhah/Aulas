let listPokemons = [];

function carregarPokemons(resposta) {
  listPokemons = resposta.data;
  renderizarPokemons(listPokemons);
}

function tratarErro(erro) {
  console.log(erro.response);
}

const promessa = axios.get("https://driven-pokemons.herokuapp.com/pokemons");

promessa.then(carregarPokemons);
promessa.catch(tratarErro);

function PokemonDiv(pokemon) {
  return `
    <div class="pokemon">  
      <img class="profile" src="${pokemon.img}">
      <span class="${pokemon.type}">${pokemon.name}</span>
      <div class="health">
        <img src="https://w7.pngwing.com/pngs/537/105/png-transparent-8-bit-color-heart-tar-miscellaneous-heart-poster.png">
        <span>${pokemon.health}</span>
        </div>
    </div>
  `;
}

function renderizarPokemons(pokemons) {
  let app = document.querySelector(".app");
  app.innerHTML = "";

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    app.innerHTML += PokemonDiv(pokemon);
  }
}

function filtrarPokemonsFogo() {
  const firePokemons = listPokemons.filter(isFogo);
  renderizarPokemons(firePokemons);
}

function aumentarHealthPokemons() {
  listPokemons.forEach(aumentaHP);
  renderizarPokemons(listPokemons);
}

function aumentaHP(pokemon) {
  pokemon.health += 20;
}

function isFogo(pokemon) {
  return pokemon.type === "fire";
}
