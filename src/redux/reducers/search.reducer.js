

const searchResults = (state = [], action) => {
  if (action.type === "SET_RESULTS") {
    console.log(`In searchResults Reducer`, action.payload);
    console.log(`In searchResults Reducer`, action);
    console.log(`In searchResults Reducer`, state);
    return action.payload;
    // return [...state, action.payload];
  }
  return state;
};

export default searchResults;