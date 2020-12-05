import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScreenLayout from '../Components/ScreenLayout';

const CatchedPokemonScreen = () => {
  const dispatch = useDispatch();
  const catchedPokemon = useSelector((state) => state.catchedPokemon);

  return (
    <ScreenLayout>
      {catchedPokemon.length === 0 ? (
        <h1>Pokemon yok</h1>
      ) : (
        <h1>Pokemon var</h1>
      )}
    </ScreenLayout>
  );
};

export default CatchedPokemonScreen;
