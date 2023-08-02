import data from './data/rickandmorty/rickandmorty.js';

const container = document.querySelector(".flex-container");

data.results.forEach((character, index) => {   //estamos recorriendo todos los personajes desde results del data 
  const characterData = `
    <div class="flex-item">
      <img src="${character.image}">
      <h1>${character.name}</h1>
      <button class="details-btn">Ver más</button> 
      <div class="character-details hidden">
      <p>Status: ${character.status}</p>
      <p>Especie: ${character.species}</p>
      <p>Origin Name: ${character.origin.name}</p>
      <p>Location Name: ${character.location.name}</p>
      </div>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", characterData);
});

function showDetails(index) {
    const characterDetailsDiv = container.querySelectorAll(".character-details")[index];
    characterDetailsDiv.classList.toggle("hidden");
  }
  
  const showDetailsBtns = container.querySelectorAll(".details-btn");
  
  showDetailsBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      showDetails(index);
    });
  });