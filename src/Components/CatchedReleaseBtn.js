import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { catchPokemon, releasePokemon } from '../Actions/action';

const CatchedReleaseBtn = ({ pokeId, pokemonDetail }) => {
  const [catched, setCatched] = useState(false);
  const dispatch = useDispatch();
  const catchedPokemons = useSelector((state) => state.catchedPokemon);

  useEffect(() => {
    for (let i = 0; i < catchedPokemons.length; i++) {
      if (catchedPokemons[i].pokemonId === parseInt(pokeId)) {
        setCatched(true);
      }
    }
    // eslint-disable-next-line
  }, [catchedPokemons]);

  const catchReleasePokemonHandler = (pokemonDetail) => {
    if (catched === true) {
      dispatch(releasePokemon(pokemonDetail));

      setCatched(false);
    } else if (catched === false) {
      dispatch(catchPokemon(pokemonDetail));
      setCatched(true);
    }
  };

  return (
    <div>
      {catched ? (
        <Button
          className='mt-5 ml-2 '
          onClick={() => catchReleasePokemonHandler(pokemonDetail)}
        >
          Release pokemon
        </Button>
      ) : (
        <Button
          className='mt-5 ml-2'
          onClick={() => catchReleasePokemonHandler(pokemonDetail)}
        >
          Catch pokemon
        </Button>
      )}
    </div>
  );
};

export default CatchedReleaseBtn;