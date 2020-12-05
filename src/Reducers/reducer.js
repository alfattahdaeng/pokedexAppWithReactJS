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
            pokemon: action.payload,
          },
        ],
      };

    case 'RELEASE_POKEMON':
      return {};

    default:
      return state;
  }
};
