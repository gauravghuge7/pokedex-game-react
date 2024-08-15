import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon';
import { usePokemonList } from '../../Hooks/use/usePokemonList';


function PokemonList() {


    const {pokemonListState, setPokemonListState} = usePokemonList('https://pokeapi.co/api/v2/pokemon');
     

    return(  
        <div className='pokedex-list-wrapper'>
          
            <div className='pokemon-wrapper'>
                {
                    (pokemonListState.isloading) ? 'loading wait .......' :
                    pokemonListState.pokemonList.map((p) =>  <Pokemon name={p.name} image={p.image} keys={p.id} id={p.id} /> )

                }
            </div>

            <div className='controls'>
                <button disabled={pokemonListState.prevUrl == null} onClick={() => {
                    const urlToSet = pokemonListState.PrevUrl;

                    setPokemonListState({
                    ...pokemonListState,
                    pokedexUrl: urlToSet,

                    })}}>previous</button>
                <button disabled={pokemonListState.nextUrl == null} onClick={() => {

                    const urlToSet = pokemonListState.nextUrl
                 setPokemonListState({
                    ...pokemonListState,
                    pokedexUrl: urlToSet,
                    
                    })}}>next</button>
            </div>

        </div>
    );
}

export default PokemonList;