import axios from "axios";
// import * as actionCreators from "./actionCreators";
import * as actionType from "./actionType";
import { fromJS } from "immutable";

//提取传参
const changeDetailData = (result) => ({
  type: actionType.CHANGE_DETAIL_DATA,
  title: result.title,
  content: result.content,
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get("/api/detail.json?id=" + id).then((res) => {
      const result = res.data.data;
      console.log(result);
      dispatch(changeDetailData(result));
    });
  };
};

export const toggleTopShow = (isShow) => ({
  type: actionType.TOGGLE_SCROLL_TOP,
  isShow,
});
