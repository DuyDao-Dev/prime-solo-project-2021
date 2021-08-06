import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* favoriteSaga() {
  yield takeEvery("FETCH_FAVORITE", fetchFavorite); 
  yield takeEvery("POST_FAVORITE", postFavorite); 
  yield takeEvery("DELETE_FAVORITE", deleteFavorite); 
}

function* fetchFavorite() {
  try {
    // console.log(`Sending search from fetchSearch saga`, action);
    const response = 
    yield axios.get(`/api/favorite/`);
    yield put({ type: "SET_FAVORITE", payload: response.data }); //points to favoriteReducer in favorite.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

function* postFavorite(action) {
  try {
    console.log(`POSTing search from fetchSearch saga`, action);
    const response = 
    yield axios.post('/api/favorite/', action.payload);
    yield put({ type: "FETCH_FAVORITE", payload: response.data }); //points to searchReducer in search.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

function* deleteFavorite(action) {
  try {
    console.log(`DELETE favorite from deleteFavorite saga`, action);
    const response = 
    yield axios.delete(`/api/favorite/${action.payload}`);
    yield put({ type: "FETCH_FAVORITE", payload: response.data }); //points to searchReducer in search.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }  
}

export default favoriteSaga;
