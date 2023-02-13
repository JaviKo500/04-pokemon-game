<template>
    <h1 v-if="!pokemon" >await please ...... </h1>
    <div class="" v-else>
        <h1>what is this pokemon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonsArr"/>
    </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonsOptions from '@/helpers/getPokemonOptions'
export default {
    components: {
        PokemonPicture,
        PokemonOptions,
    },
    data() {
        return {
            pokemonsArr: [],
            pokemon: null,
            showPokemon: false
        }
    },
    mounted(){
        this.mixPokemonsArr();
    },
    methods: {
        async mixPokemonsArr(){
            this.pokemonsArr = await getPokemonsOptions();
            const rnsInt = Math.floor( Math.random() * 4 );
            this.pokemon = this.pokemonsArr[rnsInt];
        }
    },
    
}
</script>
<!-- test data -->
<style>

</style>