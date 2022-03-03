import axios from "axios";
// import * as actionCreators from "./actionCreators";
import * as actionType from "./actionType";
import { fromJS } from "immutable";

//提取传参
const changeLoginData = () => ({
  type: actionType.CHANGE_LOGIN_DATA,
  value: true
});

export const logout = () =>({
  type: actionType.CHANGE_LOGOUT_DATA,
  value: false
})
  export const login = (account,password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then((res) => {
      const result = res.data.data;
      console.log(result);
      if(result) {
        dispatch(changeLoginData());
      } else{
        alert('登陆失败')
      }
    });
  };
};

export const toggleTopShow = (isShow) => ({
  type: actionType.TOGGLE_SCROLL_TOP,
  isShow,
});
