import { searchCharacters, sortByStatus, sortBySpecies } from '../src/data.js';
import datamock from './mockData.js'

describe('searchCharacters', () => {
  it ('is a function',()=> {
    expect (typeof searchCharacters).toBe('function');
  })

  it('Should have 1 character if input is Rick', ()=>{
    const dataFiltered=searchCharacters('Rick', datamock)
    expect(dataFiltered).toHaveLength(1);
  })

  it ('Should have 1 character if input is Summer', ()=>{
    const dataFiltered=searchCharacters('Summer', datamock)
    expect(dataFiltered).toHaveLength(1);
  })
  
  it('returns an empty container when search input is not found any names', ()=>{
    const nonExistName = 'zzz';
    const dataFiltered=searchCharacters(nonExistName, datamock)
    expect(dataFiltered).toEqual([])
  })
});

describe('sortByStatus', () => { 
  it('is a function', () => {
    expect(typeof sortByStatus).toBe('function');
  });

  it('returns a copy of the original data when selectedStatus is "all"', () => { //revisa que no se hagan cambios en la data
    const data = 'Alive'; 
    const selectedStatus = 'all';
    const result = sortByStatus(data, selectedStatus);
    expect(result).toEqual(data); // confirma que los arrays son iguales
  });

  it('returns an empty array when data is empty', () => {
    const data = [];
    const selectedStatus = 'active';
    const result = sortByStatus(data, selectedStatus);
    expect(result).toEqual([]); // revisa si el resultado es un array vacío
  });
});


describe('sortBySpecies', () => { 
  it('is a function', () => {
    expect(typeof sortBySpecies).toBe('function');
  });
});

  

