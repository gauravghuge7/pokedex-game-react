
import { Link } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import CustomRoutes from './routes/CustomRoutes'

function App() {
  return (
    <div className="main-wrapper">
      <Link to="/" ><h1 id="heading-wrapper">pokedex</h1></Link>
      
      <CustomRoutes />
    </div>
  )
}

export default App
