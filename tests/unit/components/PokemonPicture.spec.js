import { shallowMount } from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture';
describe('PokemonPicture component', () => {
    test( 'should match snapshot', () => {
       const wrapper = shallowMount( PokemonPicture, {
        props: {
            pokemonId: 1,
            showPokemon: true
        }
       } );
       expect( wrapper.html() ).toMatchSnapshot()
    });

    test( 'show hide image and pokemon 100', () => {
       
    });

    test( 'show pokemon if  show-pokemon is true', () => {
       
    });
});