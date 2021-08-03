

const searchReducer = (state = [], action) => {
  if (action.type === "SET_RESULTS") {
    console.log(`In searchReducer`, action.payload);
    console.log(`In searchReducer`, action);
    console.log(`In searchReducer`, state);
    return action.payload;
    // return [...state, action.payload]; //Tried this because ingredients all came back as empty objects.
  }
  return state;
};

export default searchReducer;