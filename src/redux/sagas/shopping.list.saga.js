import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* shoppingListSaga() {
  yield takeEvery("FETCH_INGREDIENT", fetchIngredient);
  yield takeEvery("POST_INGREDIENT", postIngredient);
  yield takeEvery("PUT_INGREDIENT", putIngredient);
  yield takeEvery("DELETE_INGREDIENT", deleteIngredient);
}

function* fetchIngredient() {
  try {
    // console.log(`Sending search from fetchSearch saga`, action);
    const response = 
    yield axios.get(`/api/shopping/`);
    yield put({ type: "SET_INGREDIENT", payload: response.data }); //points to favoriteReducer in favorite.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

function* postIngredient(action) {
  try {
    console.log(`POSTing ingredient from postIngredient saga`, action);
    const response = 
    yield axios.post('/api/shopping/', action.payload);
    yield put({ type: "FETCH_INGREDIENT", payload: response.data }); //points to searchReducer in search.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

function* putIngredient(action) {
  try {
    console.log(`PUTting ingredient from putIngredient saga`, action);
    const response = 
    yield axios.put('/api/shopping/', action.payload);
    yield put({ type: "FETCH_INGREDIENT", payload: response.data }); //points to searchReducer in search.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

function* deleteIngredient(action) {
  try {
    console.log(`DELETE ingredient from deleteIngredient saga`, action);
    const response = 
    yield axios.delete(`/api/shopping/${action.payload}`);
    yield put({ type: "FETCH_INGREDIENT", payload: response.data }); //points to searchReducer in search.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

export default shoppingListSaga;
