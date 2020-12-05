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
        catchedPokemon: state.catchedPokemon.filter(
          (releasePokemon) => releasePokemon.pokemon.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
