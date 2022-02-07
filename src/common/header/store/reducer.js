import { fromJS } from "immutable";
import * as actionTypes from "./actionType";

const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPages: 1,
  mouseIn: false,
});

export default (state = defaultState, action) => {
  if (action.val === 1) {
    return state.set("focused", true);
  } 
   if (action.val === 2) {
    return state.set("focused", false);
  } 
  if (action.type === actionTypes.CHANGE_LIST) {
    return state.set("list", action.data).set('')
  }
  if (action.type === actionTypes.MOUSE_ENTER) {
    return state.set("mouseIn", true)
  }
  if (action.type === actionTypes.MOUSE_LEAVE) {
    return state.set("mouseIn", false)
  }
  if (action.type === actionTypes.CHANGE_PAGE) {
    return state.set("page", false)
  }
  
  return state;
 
};
