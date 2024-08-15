import { Routes, Route } from 'react-router-dom'
import Pokedex from '../components/Pokedex/Pokedex';
import PokedexDetail from '../components/pokedexDetails/PokedexDetail';


function CustomRoutes() {

    return(
        <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<PokedexDetail />} />
        </Routes>

    );
    
}

export default CustomRoutes;