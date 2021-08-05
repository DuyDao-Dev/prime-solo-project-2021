import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* shoppingListSaga() {
  yield takeEvery("FETCH_INGREDIENTS", fetchIngredients);
  yield takeEvery("PUT_INGREDIENTS", putIngredients);
  yield takeEvery("DELETE_INGREDIENTS", deleteIngredients);
}

function* fetchIngredients() {
  try {
    // console.log(`Sending search from fetchSearch saga`, action);
    const response = yield axios.get(`/api/shopping/`);
    yield put({ type: "SET_FAVORITE", payload: response.data }); //points to favoriteReducer in favorite.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

function* putIngredients(action) {
  try {
    console.log(`Sending search from fetchSearch saga`, action);
    const response = 
    yield axios.put("/api/shopping/", action.payload);
    yield put({ type: "FETCH_FAVORITE", payload: response.data }); //points to searchReducer in search.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

function* deleteIngredients(action) {
  try {
    console.log(`Sending search from fetchSearch saga`, action);
    const response = yield axios.delete(`/api/shopping/${action.payload}`);
    yield put({ type: "FETCH_FAVORITE", payload: response.data }); //points to searchReducer in search.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

export default shoppingListSaga;
