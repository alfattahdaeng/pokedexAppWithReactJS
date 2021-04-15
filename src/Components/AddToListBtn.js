import React, { useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { catchPokemon, releasePokemon } from '../Actions/action';
import '../Styles/app.css';

const AddToListBtn = ({ pokeId ,pokemonDetail}) => {
  const [like, setLike] = useState(true);
  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  const catchedPokemons = useSelector((state) => state.catchedPokemon);

  useLayoutEffect(() => {
    for (let i = 0; i < catchedPokemons.length; i++) {
      if (catchedPokemons[i].pokemonId === pokeId) {
        setColor('red');
        setLike(!like);
      }
    }
    // eslint-disable-next-line
  }, []);

  const catchReleasePokemonHandler = (pokemonDetail) => {
    if (like  === true) {
      setColor('red');
      window.alert('Added to Your Favorite');
      dispatch(catchPokemon(pokemonDetail));
    } else if (like === false) {
      setColor('white');
      window.alert('Remove from Your Favorite');
      dispatch(releasePokemon(pokemonDetail));
    }
    setLike(!like);
  };

  return (
    <div>
       <i
        className={`far fa-heart like-icon ${color}`}
        onClick={() => catchReleasePokemonHandler(pokemonDetail)}
      />
    </div>
  );
};

export default AddToListBtn;
