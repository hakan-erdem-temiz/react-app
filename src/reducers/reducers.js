/* 
While actions only trigger changes in the app, the reducers specify those changes.
 We are using switch statement to search for a ADD_TODO action. 
 The reducer is a function that takes two parameters (state and action) to calculate
  and return an updated state.
The first function will be used to create a new item, while the second one will push 
that item to the list. Towards the end, we are using combineReducers helper function
 where we can add any new reducers we might use in the future.
*/
import { combineReducers } from "redux";
import { addListingFilter } from "../actions/actions";
import {
  ADD_TODO,
  ADD_LISTING_FILTER,
  ListingFilter,
  APPROVAL_STATUS
} from "../actions/actions";

function todo(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        status: action.status,
        text: action.text
      };
    case APPROVAL_STATUS:
      return state.map(state => state);
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case ADD_LISTING_FILTER:
      return [...state, todo(undefined, action)];
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
});
export default todoApp;
