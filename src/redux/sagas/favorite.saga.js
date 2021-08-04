import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import postFavorite from "./add.favorite.saga";

function* favoriteSaga() {
  yield takeLatest("FETCH_FAVORITE", fetchFavorite); 
  yield takeLatest("POST_FAVORITE", postFavorite); 
}

function* fetchFavorite(action) {
  try {
    console.log(`Sending search from fetchSearch saga`, action);
    const response = yield axios.get(`/api/favorite/${action.payload}`);
    yield put({ type: "SET_FAVORITE", payload: response.data }); //points to searchReducer in favorite.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

function* postFavorite(action) {
  try {
    console.log(`Sending search from fetchSearch saga`, action);
    const response = yield axios.post(`/api/favorite/${action.payload}`);
    yield put({ type: "FETCH_FAVORITE", payload: response.data }); //points to searchReducer in search.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

export default favoriteSaga;
