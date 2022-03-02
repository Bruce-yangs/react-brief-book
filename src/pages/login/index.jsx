import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Navigate,Route } from "react-router-dom";
import { LoginWrapper,LoginBox,Input,Button } from "./style";
import { actionCreators } from "./store";

class Login extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if(!isLogin) {
      return <LoginWrapper>
        <LoginBox>
            <h3 style={{textAlign: 'center'}}>登录</h3>
            <Input placeholder="账号" ref={(input)=>{this.account = input}}></Input>
            <Input placeholder="密码" type='password' ref={(input)=>{this.password = input}}></Input>
            <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
        </LoginBox>
    </LoginWrapper>
    }else {
      return <Navigate replace to="/" />
    }
    ;
  }
}
const mapState = (state) =>({
  isLogin: state.getIn(['login','isLogin'])
})

const mapDispatch = (dispatch) => ({
  login(account,password){
    dispatch(actionCreators.login(account.value,password.value))
    console.log(account.value,password.value);
  }
});
export default connect(mapState, mapDispatch)(Login);
