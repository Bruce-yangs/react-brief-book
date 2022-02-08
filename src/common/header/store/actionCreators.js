import * as actionTypes from "./actionType";
import axios from "axios";
import { fromJS } from "immutable";

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
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
export const changePage = (data) => ({
  type: actionTypes.CHANGE_PAGE,
  data: fromJS(data),
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
