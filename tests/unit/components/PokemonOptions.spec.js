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
        const [li1, li2, li3, li4] = wrapper.findAll('li');

        li1.trigger('click');
        li2.trigger('click');
        li3.trigger('click');
        li4.trigger('click');
        
        expect( wrapper.emitted('selection') ).toHaveLength(4);

        expect( wrapper.emitted('selection')[0] ).toEqual([1]);
        expect( wrapper.emitted('selection')[1] ).toEqual([3]);
        expect( wrapper.emitted('selection')[2] ).toEqual([4]);
        expect( wrapper.emitted('selection')[3] ).toEqual([2]);


    });

});
