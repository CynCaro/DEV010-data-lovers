export function searchCharacters (name, data){
  const searchFilter = name.trim().toLowerCase();  //Obtenemos el valor del input y con trimm eliminamos los espacios en blanco y lo pasamos a mayusculas para hacer la búisquyeda efectiva
  const filteredCharacters = data.results.filter((character) => {  //con filter buscamos en data.results y lo comparamos con seach f
    return character.name.toLowerCase().includes(searchFilter);  //la comparación se pása a minúsculas
  });
  return filteredCharacters  
}


