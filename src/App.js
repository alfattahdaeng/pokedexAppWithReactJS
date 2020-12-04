import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import DetailScreen from './Pages/DetailScreen';

const App = () => {
  return (
    <Router>
    
      
        <Route path='/' component={HomeScreen} exact />
        <Route path='/details/:pokeId' component={DetailScreen} />
     
    </Router>
  );
};

export default App;
