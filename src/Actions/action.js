//CONSTANTS
export const CATCH_POKEMON = 'CATCH_POKEMON';
export const RELEASE_POKEMON = 'RELEASE_POKEMON';

//ACTIONS
export const catchPokemon = (pokemon) => {
  return { type: CATCH_POKEMON, payload: pokemon };
};

export const releasePokemon = (pokemon) => {
  return { type: RELEASE_POKEMON, payload: pokemon };
};
