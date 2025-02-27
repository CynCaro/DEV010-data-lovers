export function searchCharacters(name, data) {
  if (typeof name !== 'string') {
    return []; // Si el nombre no es una cadena, retornar un arreglo vacío
  }
  const searchFilter = name.trim().toLowerCase();  //Obtenemos el valor del input y con trimm eliminamos los espacios en blanco y lo pasamos a mayusculas para hacer la búisquyeda efectiva
  const filteredCharacters = data.results.filter((character) => {  //con filter buscamos en data.results y lo comparamos con seach f
    return character.name.toLowerCase().includes(searchFilter);  //la comparación se pása a minúsculas
  });
  return filteredCharacters
}
export function sortByStatus(data, selectedStatus) {
  if (!data || data.length === 0) { //Comprueba si 'data' es nulo o está vacío
    return []; //Devuelve un array vacío si data es nulo o vacío
  }
  if (selectedStatus === 'all') {
    return data.slice(); //slice= retorna un nuevo arreglo 
  }
  const filteredData = data.filter(character => character.status === selectedStatus);  //primero se debe filtrar para ordenar
  return filteredData.sort((a, b) => {   //sort se le debe dar a la matriz,en este caso
    if (a.status < b.status) {
      return -1;
    }
    if (a.status > b.status) {
      return 1;
    }
  });
}
export function sortBySpecies(data, selectedSpecies) {
  if (!data || data.length === 0) {
    return []; // Devuelve un array vacío si data es nulo o vacío
  }
  if (selectedSpecies === 'all') {
    return data.slice(); // slice = retorna un nuevo arreglo 
  }
  const filteredData = data.filter(character => character.species === selectedSpecies);  //primero se debe filtrar para ordenar
  return filteredData.sort((a, b) => {   //sort se le debe dar a la matriz,en este caso
    if (a.species < b.species) {
      return -1;
    }
    if (a.species > b.species) {
      return 1;
    }
  });
} 

export function showRandomCharacter (data){
  if (!data || data.length === 0) { //Si el conjunto de datos está vacío o no se proporcionó, devuelve 0
    return [0]; 
  }
  const randomIndex = Math.floor(Math.random()* data.length);
  const randomChar = data[randomIndex];
  return randomChar;
}