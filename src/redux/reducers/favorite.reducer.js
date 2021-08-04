const favoriteReducer = (state = [], action) => {
  if (action.type === "SET_FAVORITE") {
    console.log(`In favoriteReducer`, action.payload);
    return action.payload;
  }
  return state;
};

export default favoriteReducer;
