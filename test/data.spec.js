import { searchCharacters } from '../src/data.js';
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
  

