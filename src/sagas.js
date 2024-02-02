import { call, put, takeEvery, all } from "redux-saga/effects";
import { GET_POKEMONS_FETCH, GET_POKEMONS_SUCCESS } from "./actions";
import axios from "axios";

function dataFetch() {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.data.results);
}

function* pokemonsFetch() {
  const items = yield call(dataFetch);

  const pokemonDetails = yield all(
    items.map((item) => call(axios.get, item.url))
  );
  console.log(pokemonDetails);
  return pokemonDetails.map((res) => res.data);
}

function* workGetUsersFetch() {
  const pokemons = yield call(pokemonsFetch);
  yield put({ type: GET_POKEMONS_SUCCESS, pokemons });
}

function* mySaga() {
  yield takeEvery(GET_POKEMONS_FETCH, workGetUsersFetch);
}

export default mySaga;
