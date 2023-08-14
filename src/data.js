export function searchCharacters (name, data){
  const searchFilter = name.trim().toLowerCase();  //Obtenemos el valor del input y con trimm eliminamos los espacios en blanco y lo pasamos a mayusculas para hacer la búisquyeda efectiva
  const filteredCharacters = data.results.filter((character) => {  //con filter buscamos en data.results y lo comparamos con seach f
    return character.name.toLowerCase().includes(searchFilter);  //la comparación se pása a minúsculas
  });
  return filteredCharacters  
}
export function sortByStatus (data,selectedStatus) {
  if(selectedStatus==='all'){ 
    return data.slice(); // slice= retorna un nuevo arreglo 
  }
  const filteredData = data.filter(character=>character.status === selectedStatus);  //primero se debe filtrar para ordenar
  return filteredData.sort((a,b)=> {   //sort se le debe dar a la matriz,en este caso
    if (a.status< b.status) {
      return -1;
    }
    if (a.status> b.status){
      return 1;
    }
    return 0;
  });
} 
export function sortBySpecies (data,selectedSpecies) {
  if(selectedSpecies==='all'){ 
    return data.slice(); // slice= retorna un nuevo arreglo 
  }
  const filteredData = data.filter(character=>character.species === selectedSpecies);  //primero se debe filtrar para ordenar
  return filteredData.sort((a,b)=> {   //sort se le debe dar a la matriz,en este caso
    if (a.species< b.species) {
      return -1;
    }
    if (a.species> b.species){
      return 1;
    }
    return 0;
  });
} 