import { fromJS } from "immutable";
import * as actionTypes from "./actionType";

import img1 from "/src/statics/img1.jpeg";

const defaultState = fromJS({
  isLogin: false
});


export default (state = defaultState, action) => {
  switch (action.type) {
    case  actionTypes.CHANGE_LOGIN_DATA:
    return state.merge({
      isLogin: fromJS(action.value),
    });
    case  actionTypes.CHANGE_LOGOUT_DATA:
    return state.merge({
      isLogin: fromJS(action.value),
    });
    default:
      return state
  }

  
};




