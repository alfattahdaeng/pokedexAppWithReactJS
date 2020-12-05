import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import DetailScreen from './Pages/DetailScreen';
import CatchedPokemonScreen from './Pages/CatchedPokemonScreen';
import Header from './Components/Header';

const App = () => {
  return (
    <Router>
      <Header />

      <Route path='/' component={HomeScreen} exact />
      <Route path='/details/:pokeId' component={DetailScreen} />
      <Route path='/catchedPokemons' component={CatchedPokemonScreen} />
    </Router>
  );
};

export default App;
