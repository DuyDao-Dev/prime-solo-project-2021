import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchSearch(action) {
  try {
    console.log(`Sending search from fetchSearch saga`, action);
    const response = yield axios.get(`/api/search/${action.payload}`);
    // yield axios.get(`/api/search?q=${action.payload}`);
    //Original code with ?q= removed since I already passed ${search} on router.
    //On giphy project it was ok to have the ?q= even though router had ${search}.
    yield put({ type: "SET_RESULTS", payload: response.data }); //points to searchResults in search.reducer
  } catch (error) {
    console.log("Error GETting search results", error);
  }
}

function* searchSaga() {
  yield takeLatest("FETCH_SEARCH", fetchSearch); //Remember there will be a dispatch to this.
}

export default searchSaga;