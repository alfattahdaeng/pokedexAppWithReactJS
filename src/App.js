import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import DetailScreen from './Pages/DetailScreen';
import CatchedPokemonScreen from './Pages/CatchedPokemonScreen';
import Header from './Components/Header';
import FavoritePokemonScreen from './Pages/FavoritePokemonScreen';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Header />

      <Route path='/' component={HomeScreen} exact />
      <Route path='/details/:pokeId' component={DetailScreen} />
      <Route path='/catchedPokemons' component={CatchedPokemonScreen} />
      <Route path='/favoritePokemons' component={FavoritePokemonScreen} />
      <Footer className='pt-5' />
    </Router>
  );
};

export default App;
