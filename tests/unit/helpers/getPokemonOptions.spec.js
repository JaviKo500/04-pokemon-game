import getPokemonsOptions,{ getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions';
describe('getPokemonOptions helpers', () => {
    test( 'return number array', () => {
        const pokemons = getPokemons();
        expect( pokemons.length ).toBe(650);
        expect( pokemons[0] ).toBe(1);
        expect( pokemons[500] ).toBe(501);
        expect( pokemons[649] ).toBe(650);
        // console.log(pokemons );
    });
    
    test('return array with 4 elements', async () => {
        const pokemonsNames = await getPokemonNames([1,2,3,4]);

        const pokemons = [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ];
        expect( pokemonsNames ).toStrictEqual( pokemons );
    });

    test('return array mixed', async () => {
        const pokemonsOptions = await getPokemonsOptions(  );

        expect( pokemonsOptions.length ).toBe(4);
        expect( pokemonsOptions ).toEqual([
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String),
                id: expect.any(Number) 
            }
        ])

        console.log(pokemonsOptions);
    });
});