import { GET_POKEMONS_SUCCESS, SET_ID } from "./actions";

const myReducer = (state = { pokemons: [], id: null }, action) => {
  switch (action.type) {
    case GET_POKEMONS_SUCCESS:
      return { ...state, pokemons: action.pokemons };
    case SET_ID:
      return { ...state, id: action.id };
    default:
      return state;
  }
};

export default myReducer;
