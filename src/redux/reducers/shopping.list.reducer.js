const shoppingListReducer = (state = [''], action) => {
  if (action.type === "SET_INGREDIENT") {
    console.log(`In shoppingListReducer`, action.payload);
    return action.payload;
  }
  return state;
};

export default shoppingListReducer;
