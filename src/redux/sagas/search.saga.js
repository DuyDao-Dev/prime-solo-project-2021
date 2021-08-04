import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


function* searchSaga() {
  yield takeLatest("FETCH_SEARCH", fetchSearch); //Remember there will be a dispatch to this.
}


function* fetchSearch(action) {
  try {
    console.log(`Sending search from fetchSearch saga`, action);
    const response = yield axios.get(`/api/search/${action.payload}`);
    yield put({ type: "SET_RESULTS", payload: response.data }); //points to searchReducer in search.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

export default searchSaga;