import axios from "axios";
import { put, call, takeEvery } from "redux-saga/effects";


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
    const response = 
    yield axios.post('/api/shopping/ingredients', {ingredients: action.payload});
    yield put({ type: "FETCH_INGREDIENT", payload: response.data }); //points to searchReducer in search.reducer
    console.log(`What is shopping saga POST action.payload?`, action.payload);
} catch (error) {
    console.log("Error GETting search results", error);
  }
}

function* putIngredient(action) {
    console.log(`What is action in PUT shoppinglist`, action);
  try {
    console.log(`PUTting ingredient from putIngredient saga`, action);
    yield call (axios.put, `/api/shopping/${action.payload}`, action.payload);
    console.log("What is the action.payload in shopping.saga", action.payload);
    yield put({ type: "FETCH_INGREDIENT" }); //points to searchReducer in search.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

function* deleteIngredient() {
  try {
    const response = 
    yield axios.delete(`/api/shopping/ingredients`);
    yield put({ type: "FETCH_INGREDIENT", payload: response.data }); //points to searchReducer in search.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

export default shoppingListSaga;
