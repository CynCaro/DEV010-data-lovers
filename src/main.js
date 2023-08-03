import data from './data/rickandmorty/rickandmorty.js';


const container = document.querySelector(".flex-container");
const searchInput =document.getElementById("searchInput");


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

// Index: variable que identifica de forma secuencia un grupo de filas en función de la var original a partir de la cual se creó una nueva fila
//El código en una función no se ejecuta cuando se define la función, se ejecuta cuando se invoca.
//Algunas personas utiizan el término "llamar a la funcióm" en lugar de "invocar".
//También es común decir "inciar o ejecutar una función"

function showDetails(index) {
    const characterDetailsDiv = container.querySelectorAll(".character-details")[index]; //Esta línea de código
    //se encarga de obtener el elemento HTML que contiene los detalles del personaje correspondiente al índice(index).
    //Para seleccionar todos los elementos que tnenen la clase "character-details"
    //Luego accede al elemento específico del arreglo de elementos utilizando el indice index, que representa la posición del personaje de la lista.
    characterDetailsDiv.classList.toggle("hidden"); //En eta línea de código
    //se aplica un método toogle a la propiedad classlist del elemento characterDetailsDiv. classList es una propiedad que representa la lista de 
    //las clases del Element html, es decir, si está visible pasa a oculto y si se encuentra oculto pasa a visible.
    //Si el elemento está "hidden", toogle("hidden") la quitará, lo que significa que se volverán visibles.
    //Si el elemento no tiene "hidden", toogle la agregará lo que hará que pasen a ocultos.
  }
  const showDetailsBtns = container.querySelectorAll(".details-btn");  //Selecciona y almacena en la variable
  //showDetailsBtns todos los details-btn dentro de container(flex-container). Después se agregaremos la función p/agregar el evento click para mostrar los personajes.
  //container = flex-container
  //querySelectorAll= función p/seleccionar todos los elementos que coincidan con ese selector ("details.btn")
  //const showDetailsBtns  a esta variable se le asigna el resultado de querySelectorAll, por lo tanto hará una lista (o NodeList) de todos los
  //elementos que tienen la clase "details-btn" dentro de container. 
  //nodeList es una colección en vivo, lo que significa que los cambios en el DOM se reflejan en la colección.

  //Agrega un evento click a c/btn con la clase "details-btn". Cuando un boton es clickeado,
  //se ejecuta la función showDetailt con el indice del botón clickeado, lo que muestra/oculta los detalles del personaje correspondiente al botón.
  //Así c/btn tiene su evento click asociado y al hacer click en un btn específico mostrará los detalles del personaje correcto. 
  showDetailsBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {  //para c/btn en la lista, se agregará un evento click (addEvent...). Entonces cuando el btn sea clickeado 
      //se ejecutará la función que se especifica en el bloque de código.
      showDetails(index);  //dentro del vento click del btn se invoca la función showDetails(index), pasando el índice del btn como argumento. 
     //esto se hace para que la función showDetails sepa a qué personaje correspondiente se está haciendo click.
    });
  });



// ***************BARRA SEARCH PARA BUSCAR POR NOMBRE**********
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
  }
  
  searchInput.addEventListener('input', () => {   //aquí escuchamos lo que se escribe en el input
    const searchFilter = searchInput.value.trim().toLowerCase();  //Obtenemos el valor del input y con trimm eliminamos los espacios en blanco y lo pasamos a mayusculas para hacer la búisquyeda efectiva
    const filteredCharacters = data.results.filter((character) => {  //con filter buscamos en data.results y lo comparamos con seach f
      return character.name.toLowerCase().includes(searchFilter);  //la comparación se pása a minúsculas
    });
  
    showCharacters(filteredCharacters);  //mostramos los personajes de ese resultado
  });
 


//************prueba1 */ fail

// function searchCharacters(characters, searchF){
//     return characters.filter((character)=> {
//       return character.name.toLowerCase().includes(searchF);
//     });
//   }

