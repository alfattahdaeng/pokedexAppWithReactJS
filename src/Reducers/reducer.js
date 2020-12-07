const INITIAL_STATE = {
  catchedPokemon: [],
  favPokemon: [],
};
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CATCH_POKEMON':
      return {
        ...state,
        catchedPokemon: [
          ...state.catchedPokemon,
          {
            pokemonId: action.payload.id,
            pokemon: action.payload,
          },
        ],
      };

    case 'RELEASE_POKEMON':
      return {
        ...state,
        catchedPokemon: state.catchedPokemon.filter(
          (releasePokemon) => releasePokemon.pokemon.id !== action.payload.id
        ),
      };

    case 'FAV_POKEMON':
      return {
        ...state,
        favPokemon: [...state.favPokemon, { favPokemonId: action.payload }],
      };

    case 'REMOVE_FAV_POKEMON':
      return {
        ...state,
        favPokemon: state.favPokemon.filter(
          (removePokemon) => removePokemon.favPokemonId !== action.payload
        ),
      };

    default:
      return state;
  }
};
