import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { LoginWrapper,LoginBox,Input,Button } from "./style";

class Login extends PureComponent {
  render() {
    return <LoginWrapper>
        <LoginBox>
            <h3 style={{textAlign: 'center'}}>登录</h3>
            <Input placeholder="账号"></Input>
            <Input placeholder="密码"></Input>
            <Button>登录</Button>
        </LoginBox>
    </LoginWrapper>;
  }
}

const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({});
export default connect(mapState, mapDispatch)(Login);
