import data from './data/rickandmorty/rickandmorty.js';
import { searchCharacters } from './data.js';

const container = document.querySelector(".flex-container");
const searchInput =document.getElementById("searchInput");

function showDetails(index) { // Función para mostrar los detalles del personaje por índice
  const characterDetailsDiv = container.querySelectorAll(".character-details")[index]; //Obtiene el elemento HTML que contiene los detalles del personaje correspondiente al índice(index). Selecciona todos los elementos que tienen la clase "character-details"
  characterDetailsDiv.classList.toggle("hidden"); //El método toogle se aplica a classlist del elemento characterDetailsDiv. classList es una propiedad que representa la lista, si está visible pasa a oculto y si se encuentra oculto pasa a visible.
}

function assignButtonClickEvents() { //Función para asignar eventos click a los botones "Ver más"
  const showDetailsBtns = container.querySelectorAll(".details-btn");  //Selecciona y almacena todos los details-btn dentro de container(flex-container). Después agregaremos la función p/agregar el evento click para mostrar los personajes.
  //querySelectorAll= función p/seleccionar todos los elementos que coincidan con ese selector ("details.btn")
  //const showDetailsBtns  a esta variable se le asigna el resultado de querySelectorAll, por lo tanto hará una lista (o NodeList) de todos los elementos que tienen la clase "details-btn" dentro de container. 
  //nodeList es una colección en vivo, lo que significa que los cambios en el DOM se reflejan en la colección.
  
  //Agrega un evento click a c/btn con la clase "details-btn". Cuando un boton es clickeado,se ejecuta la función showDetailt con el indice del botón clickeado, lo que muestra/oculta los detalles del personaje correspondiente al botón.
  //Así c/btn tiene su evento click asociado y al hacer click en un btn específico mostrará los detalles del personaje correcto. 
  showDetailsBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {  //para c/btn en la lista, se agregará un evento click (addEvent...). Entonces cuando el btn sea clickeado se ejecutará la función que se especifica en el bloque de código.
      showDetails(index);  //dentro del evento click del btn se invoca la función showDetails(index), pasando el índice del btn como argumento. Esto se hace para que la función showDetails sepa a qué personaje correspondiente se está haciendo click.
    });
  });
}

function showCharacters(characters) {
  container.innerHTML = "";       //Se muestra el contenedor vacio para mostrarnos la búsqueda
  characters.forEach((character, index) => {    //aquí está recorreiendo al igual que al principioo
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
  assignButtonClickEvents(); // Asignar eventos click a los nuevos botones agregados.
}
showCharacters (data.results)
assignButtonClickEvents(); // Ejecutar la función 1 vez al inicio para asignar eventos a los botones
  
searchInput.addEventListener('input', () => {   //aquí escuchamos lo que se escribe en el input
  const filteredCharacters = searchCharacters (searchInput.value, data)
  showCharacters(filteredCharacters);  //mostramos los personajes de ese resultado
});
 