import { searchCharacters } from '../src/data.js';


describe('searchCharacters', () => {
  it ('is a function',()=> {
    expect (typeof searchCharacters).toBe('function');
  })
  it('returns characters matching the search input', () => {
    expect(character.name.toLowerCase()).toBe('character');
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(searchInput(null)).toThrow();; //pendiente
     });
  
  });


 describe('anotherExample', () => {
   it('is a function', () => {
      expect(typeof anotherExample).toBe('function');
   });
   it('returns `anotherExample`', () => {    
    expect(anotherExample()).toBe('OMG');   }); });