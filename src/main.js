import data from './data/rickandmorty/rickandmorty.js';

const container = document.querySelector(".flex-container");

data.results.forEach((character) => {   //estamos recorriendo todos los personajes desde results del data
  const characterData = `
    <div class="flex-item">
      <img src="${character.image}">
      <h1>${character.name}</h1>
      <h3>${character.status}</h3>
      <h3>${character.species}</h3>
      <h3>${character.origin.name}</h3>
      <h3>${character.location.name}</h3>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", characterData); //con insertAdjacentHTML() agregamos al final del contenedor un elemento 

});


console.log(example, data);