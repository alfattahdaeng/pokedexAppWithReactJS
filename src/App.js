import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen';
import DetailScreen from './Pages/DetailScreen';
import MyPokemonScreen from './Pages/MyPokemonScreen';

const App = () => {
  return (
    <Router>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/pokemon/details/:pokeId' component={DetailScreen} />
      <Route path='/favorites' component={MyPokemonScreen} />
    </Router>
  );
};

export default App;
