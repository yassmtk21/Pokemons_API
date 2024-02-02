export const GET_POKEMONS_FETCH = "GET_POKEMONS_FETCH";
export const GET_POKEMONS_SUCCESS = "GET_POKEMONS_SUCCESS";
export const SET_ID = "SET_ID";

export const getPokemonsFetch = () => ({
  type: GET_POKEMONS_FETCH,
});

export const setId = (id) => ({
  type: SET_ID,
  id,
});
