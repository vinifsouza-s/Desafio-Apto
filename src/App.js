import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import logo from './Assets/logo.png';
import logo1 from './Assets/logo1.png';
import { BrowserRouter , Switch , Route , Link} from "react-router-dom"
import Home from './Components/HomePage/Home';
import React from 'react';


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


export default App;
