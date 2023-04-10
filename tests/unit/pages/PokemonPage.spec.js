import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from "../mocks/pokemons.mock";

describe('PokemonPage component', () => {
    let wrapper
    let mixPokemonsArr;
    beforeEach(()=>{
        // mixPokemonsArr = jest.spyOn(PokemonPage.methods, 'mixPokemonsArr');
        wrapper = shallowMount( PokemonPage );
    });

    test( 'do match with snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot(); 
    }); 

    test( 'should call mixPokemonsArr to mount', () => {
        const mixPokemonsArr = jest.spyOn(PokemonPage.methods, 'mixPokemonsArr');
        shallowMount(PokemonPage);
        expect( mixPokemonsArr ).toHaveBeenCalled( );
    });

    test( 'do match snapshot load pokemons', () => {
        // const wrapper = mount( PokemonPage, {
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonsArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        } );

        expect( wrapper.html() ).toMatchSnapshot();

    });

});