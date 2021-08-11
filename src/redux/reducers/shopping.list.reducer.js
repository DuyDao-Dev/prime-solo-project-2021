const shoppingListReducer = (state = [], action) => {
  if (action.type === "SET_INGREDIENT") {
    console.log(`In shoppingListReducer`, action.payload);
    return action.payload;
  }
  if (action.type === "CLEAR_INGREDIENT_LIST") {
    console.log(`In shoppingListReducer`, action.payload);
    return [];
  }
  return state;
};

export default shoppingListReducer;
