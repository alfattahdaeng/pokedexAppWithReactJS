import React, { useState, useEffect } from 'react';
import Translator from './Translator';
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
          size='lg'
          block
          variant='danger'
          className='mt-5 ml-2 '
          onClick={() => catchReleasePokemonHandler(pokemonDetail)}
        >
          <Translator turkish={"Pokemon'u yakala"} english={'Release Pokemon'} />
        </Button>
      ) : (
        <Button
          size='lg'
          block
          className='mt-5 ml-2'
          onClick={() => catchReleasePokemonHandler(pokemonDetail)}
        >
          <Translator turkish={"Pokemon'u yakala"} english={'Catch pokemon'} />
        </Button>
      )}
    </div>
  );
};

export default CatchedReleaseBtn;
