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

    test( 'should show PokemonPicture and PokemonOptions', () => {
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

        const pokemonPicture = wrapper.find('pokemon-picture-stub'); 
        const pokemonOptions = wrapper.find('pokemon-options-stub'); 
        expect( pokemonPicture.exists() ).toBeTruthy();
        expect( pokemonOptions.exists() ).toBeTruthy();
        expect( pokemonPicture.attributes('pokemonid') ).toBe('1');
        expect( pokemonOptions.attributes('pokemons') ).toBeTruthy();
    });


    test( 'test in checkAnswer', async () => {
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

        await wrapper.vm.checkAnswer(1);
        expect( wrapper.find('h2').exists() ).toBeTruthy();
        expect( wrapper.vm.showPokemon ).toBeTruthy();
        expect( wrapper.find('h2').text() ).toBe(`Correct, ${pokemons[0].name}`);

        await wrapper.vm.checkAnswer(10);
        expect( wrapper.vm.message ).toBe(`Oops, is ${pokemons[0].name}`);
    });
});