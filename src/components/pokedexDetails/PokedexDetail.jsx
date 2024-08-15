import  Axios  from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './pokedexDetail.css';

function PokedexDetail() {

    const { id } = useParams();
    console.log(id);

    const [pokemon, setPokemon] = useState({});

    async function downloadPokemons() {
     
        const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        console.log(response.data);

        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            type: response.data.types.map((t) => t.type.name)
 
        })


    }

    useEffect(() => {
        downloadPokemons();
    },[])


    return(
        <div className='pokemon-detail-wrapper'>
            <h2> name: {pokemon.name}  </h2>
            <img className='pokemon-image' src={pokemon.image} />

            <div className="pokemon-weight">  weight: {pokemon.weight}  </div>
            <div> height: {pokemon.height }  </div>
            <div className="pokemon-types">
                {pokemon.types && pokemon.types.map((t) => <div key={t}> {t}</div>)}

            </div>
        </div>
    );
}



export default PokedexDetail;       