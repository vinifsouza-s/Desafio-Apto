import { Link } from "react-router-dom"

const Home = () => (
    <div>
      <h1>Pesquisa de Diretorios</h1>
      <Link to="/searchbar">
      <button
        className="ui primary button"
        type="submit"
          >Clique aqui para iniciar a pesquisa</button>
      </Link>
    </div>
  )
  
  export default Home;