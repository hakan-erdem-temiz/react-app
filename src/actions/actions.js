/* Actions are JavaScript objects that use type property to inform about the data 
that should be sent to the store. 
We are defining ADD_TODO action that will be used for adding new item to our list.
 The addTodo function is an action creator that returns our action and sets an id 
 for every created item.*/

export const ADD_TODO = "ADD_TODO";
export const APPROVAL_STATUS = "APPROVAL_STATUS";
export const ADD_LISTING_FILTER = "ADD_LISTING_FILTER";

let nextTodoId = 0;

export function addTodo(text, isApproved) {
  return {
    type: ADD_TODO,
    status: isApproved,
    id: nextTodoId++,
    text
  };
}

let approvalStatus = false;

export function changeApprovalStatus(status) {
  return {
    type: APPROVAL_STATUS,
    isApproved: approvalStatus,
    status
  };
}

export function addListingFilter(filter) {
  return {
    type: ADD_LISTING_FILTER,
    filter
  };
}
