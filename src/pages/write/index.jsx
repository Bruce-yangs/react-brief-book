import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Navigate,Route } from "react-router-dom";
import { LoginWrapper,LoginBox,Input,Button } from "./style";
import { actionCreators } from "./store";

class Write extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if(isLogin) {
      return <div>
       写文章
    </div>
    }else {
      return <Navigate replace to="/login" />
    }
    ;
  }
}
const mapState = (state) =>({
  isLogin: state.getIn(['login','isLogin'])
})

// const mapDispatch = (dispatch) => ({
//   login(account,password){
//     dispatch(actionCreators.login(account.value,password.value))
//     console.log(account.value,password.value);
//   }
// });
export default connect(mapState, null)(Write);
