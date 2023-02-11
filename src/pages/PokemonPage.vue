<template>
    <h1 v-if="!pokemon" >await please ...... </h1>
    <div class="" v-else>
        <h1>what is this pokemon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonsArr" @selection="checkAnswer"/>
        <template v-if="showAnswer">
            <h2>{{ message }}</h2>
            <button @click="newGame">New Game</button>
        </template>
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
            showPokemon: false,
            showAnswer: false,
            message: ''
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
        },
        checkAnswer( selectedId ){
            this.showAnswer = true;
            this.showPokemon = true;
            // this.showPokemon = selectedId === this.pokemon.id ? true : false
            if (selectedId === this.pokemon.id ) {
                this.message = `Correct, ${this.pokemon.name}`
            } else {
                this.message = `Oops, is ${this.pokemon.name}`
            }
        },
        async newGame(){
            this.showAnswer = false
            this.showPokemon = false
            this.pokemon = null
            this.pokemonsArr = []
            this.mixPokemonsArr()
        }
    },
    
}
</script>

<style>

</style>