const searchReducer = (state = [], action) => {
  if (action.type === "SET_RESULTS") {
    console.log(`In searchReducer`, action.payload);
    return action.payload;
    //fixed an earlier issue with returned empty objects. Had to drill deeper
    //from search router response.data.hits.
  }
  return state;
};

export default searchReducer;