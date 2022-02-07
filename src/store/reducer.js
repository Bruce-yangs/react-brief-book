import { combineReducers } from "redux-immutable";
import {reducer as headerReducer} from "../common/header/store";

//拆分Reducer
export default combineReducers({
    header:headerReducer
})