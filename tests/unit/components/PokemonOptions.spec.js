import { shallowMount } from '@vue/test-utils'
import  PokemonOptions  from '@/components/PokemonOptions'


import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {
    let wrapper
    beforeEach( () => {
        wrapper = shallowMount( PokemonOptions, {
            props: {
                pokemons
            }
        })
    } );
    test( 'do match snapshot ', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })
    test('Show 4 options correctly', () => {
        const liPokemons = wrapper.findAll('li');
        expect( liPokemons ).toHaveLength(4);
        const namesLi = liPokemons.map((li) => li.text());
        const pokemonsNames = pokemons.map(({ name }) => name);
        expect(namesLi).toEqual(pokemonsNames);
        
    });
    test('should emit "selection" whit parameter on do click', () => {

    });

});
