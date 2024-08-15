import { useEffect, useState } from "react";
import axios from 'axios';
function usePokemonList(url) {

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isloading: true,
        pokedexUrl: url,
        prevUrl: '',
        nextUrl: ''
    });

      
    async function downloadPokemons() {

        // setIsLoading(true);
        setPokemonListState( (state) => ({ ...state, isloading: true}));  // change advance use state

        const response = await axios.get(pokemonListState.pokedexUrl); // change advance use state 
        
        const pokemonResult = response.data.results;  /// we get the array of pokemons 
        console.log(response.data);

        setPokemonListState((state) => ({
            ...state,
            nextUrl: response.data.next, 
            PrevUrl: response.data.previous
        }));
        

        // to create a array of promices 

        const pokemonResultPromise = await pokemonResult.map((pokemon) => axios.get(pokemon.url));

        //  passing the promices to axios.all to use them
        const pokemonData = await axios.all(pokemonResultPromise); /// array of 20 pokemon detail
        console.log(pokemonData);

        // pokelist data that recieve in variable

        const pokelistResult = pokemonData.map( (pokeData)=> {
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: (pokemon.sprites.other)? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                
                types: pokemon.types
            }
        });

        console.log(pokelistResult);
        setPokemonListState((state) => ({
            ...state,
            pokemonList: pokelistResult,
            isloading: false
        }));
        
    }

    useEffect(() => {
        downloadPokemons();
    },[pokemonListState.pokedexUrl])

    return {pokemonListState, setPokemonListState}
}

export {usePokemonList}