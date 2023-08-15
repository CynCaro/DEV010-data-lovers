import { searchCharacters, sortByStatus, sortBySpecies } from '../src/data.js';
import datamock from './mockData.js'

describe('searchCharacters', () => {
  it('is a function', () => {
    expect(typeof searchCharacters).toBe('function');
  })

  it('Should have 1 character if input is Rick', () => {
    const dataFiltered = searchCharacters('Rick', datamock)
    expect(dataFiltered).toHaveLength(1);
  })

  it('Should have 1 character if input is Summer', () => {
    const dataFiltered = searchCharacters('Summer', datamock)
    expect(dataFiltered).toHaveLength(1);
  })

  it('returns an empty container when search input is not found any names', () => {
    const nonExistName = 'zzz';
    const dataFiltered = searchCharacters(nonExistName, datamock)
    expect(dataFiltered).toEqual([])
  })

  it('correctly filters characters regardless of case sensitivity', () => {
    const dataFiltered = searchCharacters('RICK', datamock);

    // Verifica si los personajes filtrados tienen nombres que contienen "RICK" en cualquier caso
    expect(dataFiltered.length).toBeGreaterThan(0);
    dataFiltered.forEach(character => {
      expect(character.name.toLowerCase()).toContain('rick');
    })
  });
  
  it('handles non-string input', () => {
    const nonStringInput = 123; // Por ejemplo, un número
    const dataFiltered = searchCharacters(nonStringInput, datamock);

    expect(dataFiltered).toEqual([]);
  });
});

describe('sortByStatus', () => {
  const testData = [
    { "name": "Character A", "status": "Dead" },
    { "name": "Character B", "status": "Alive" },
    { "name": "Character C", "status": "Unknown" },
    // ...otros personajes
  ];

  it('is a function', () => {
    expect(typeof sortByStatus).toBe('function');
  });

  it('correctly sorts characters by status', () => {
    const selectedStatus = 'Alive';
    const result = sortByStatus(testData, selectedStatus);

    // Verifica que todos los personajes en el resultado tengan el estado "Alive"
    expect(result.every(character => character.status === selectedStatus)).toBe(true);

    // Verifica que los personajes estén ordenados alfabéticamente por nombre
    for (let i = 1; i < result.length; i++) {
      expect(result[i].name).toBeGreaterThanOrEqual(result[i - 1].name);
    }
  });

  it('returns a copy of the original data when selectedStatus is "all"', () => {
    const selectedStatus = 'all';
    const result = sortByStatus(testData, selectedStatus);
   
    expect(result).toEqual(testData); // Verifica que el bloque "if" se ejecutó y se copiaron los datos originales.
  });

  it('handles empty data array', () => { // Cuando selectedStatus no coincide con ningún estado existente: Verificamos que la función devuelva un array vacío en este caso.
    const emptyData = [];
    const selectedStatus = 'Alive';
    const result = sortByStatus(emptyData, selectedStatus);

    expect(result).toEqual([]);
  });

  it('returns an empty array when data is null', () => {
    const data = null;
    const selectedStatus = 'Alive';
    const result = sortByStatus(data, selectedStatus);

    // Verifica que el resultado sea un array vacío cuando los datos son nulos
    expect(result).toEqual([]);
  });

  it('returns an empty array when data is undefined', () => {
    const data = undefined;
    const selectedStatus = 'Alive';
    const result = sortByStatus(data, selectedStatus);

    expect(result).toEqual([]);
  });

  it('returns an empty array when data is an empty array', () => {
    const data = [];
    const selectedStatus = 'Alive';
    const result = sortByStatus(data, selectedStatus);

    expect(result).toEqual([]);
  });

  // Pruebas adicionales para otros estados y situaciones
});

describe('sortBySpecies', () => {
  const createCharacter = (name, species) => ({ name, species });

  it('is a function', () => {
    expect(typeof sortBySpecies).toBe('function');
  });

  it('correctly sorts characters by species', () => {
    const data = [
      createCharacter("Character A", "Human"),
      createCharacter("Character B", "Alien"),
      createCharacter("Character C", "Robot"),
      // ...otros personajes
    ];
    const selectedSpecies = 'Alien';
    const result = sortBySpecies(data, selectedSpecies);

    // Verifica si los personajes están ordenados correctamente por species y tienen la especie correcta
    for (let i = 1; i < result.length; i++) {
      expect(result[i].species).toBe(selectedSpecies);
      expect(result[i - 1].species).toBe(selectedSpecies);
      expect(result[i].name).toBeGreaterThanOrEqual(result[i - 1].name);
    }
  });

  it('returns a copy of the original data when selectedSpecies is "all"', () => {
    const data = [
      createCharacter("Character A", "Human"),
      createCharacter("Character B", "Alien"),
      // ...otros personajes
    ];
    const selectedSpecies = 'all';
    const result = sortBySpecies(data, selectedSpecies);

    expect(result).toEqual(data);
  });

  it('handles empty data array', () => {
    const data = [];
    const selectedSpecies = 'Alien';
    const result = sortBySpecies(data, selectedSpecies);

    expect(result).toEqual([]);
  });

  it('returns an empty array when data is undefined', () => {
    const data = undefined;
    const selectedSpecies = 'Human';
    const result = sortBySpecies(data, selectedSpecies);

    expect(result).toEqual([]);
  });

  it('returns an empty array when data is an empty array', () => {
    const data = [];
    const selectedSpecies = 'Human';
    const result = sortByStatus(data, selectedSpecies);

    expect(result).toEqual([]);
  });
});