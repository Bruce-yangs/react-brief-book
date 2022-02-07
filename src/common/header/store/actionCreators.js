import * as actionTypes from "./actionType";
import axios from "axios";
import { fromJS } from "immutable";

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
});
export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS,
});
export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER,
});
export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE,
});
export const changePage = () => ({
  type: actionTypes.CHANGE_PAGE,
});

export const getList = () => {
  return (dispatch) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        const { data } = res.data;
        dispatch(changeList(data));
        console.log(res.data.success);
      })
      .catch(() => {
        console.log("error");
      });
  };
};
