import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import logo from './logo.png';
import logo1 from './logo1.png';
import { BrowserRouter , Switch , Route , Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
        <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo1" alt="logo1" />
        
      </header>
      <BrowserRouter>    
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/searchbar" component={SearchBar}/>
      </Switch>
      
      <Link to="/">
    <button 
        className="ui primary button"
        type="submit">
           Voltar a tela inicial</button>
    </Link>
    </BrowserRouter>
      </div>
    
  );
}

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

export default App;
