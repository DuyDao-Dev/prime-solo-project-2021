import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import search from './search.reducer';
import favorite from './favorite.reducer';
import shopping from './shopping.list.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  search, // searches through the API
  favorite, // has GET, POST, DELETE for all favorite recipes in SAGA
  shopping, // needs GET, PUT, DELETE in SAGA
});

export default rootReducer;
