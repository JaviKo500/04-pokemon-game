import pokemonApi from '@/api/pokemonApi';
describe('pokemonApi', () => {
    test( 'axios configured with axios url', () => {
       expect( pokemonApi.defaults.baseURL ).toBe('https://pokeapi.co/api/v2/pokemon');
    });
});