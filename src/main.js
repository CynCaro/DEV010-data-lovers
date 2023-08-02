import data from './data/rickandmorty/rickandmorty.js';

const container = document.querySelector(".flex-container");

data.results.forEach((character, index) => {   //estamos recorriendo todos los personajes desde results del data 
  const characterData = `
    <div class="flex-item">
      <img src="${character.image}">
      <h1>${character.name}</h1>
      <button class="details-btn">Ver más</button> 
      <div class="character-details hidden">
      <h3>${character.status}</h3>
      <h3>${character.species}</h3>
      <h3>${character.origin.name}</h3>
      <h3>${character.location.name}</h3>
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