import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link,useNavigate } from "react-router-dom";

import * as actionTypes from "./store/actionType";
import * as actionCreators from "./store/actionCreators";
import  {actionCreators as loginActionCreators} from "../../pages/login/store";
// import { CSSTransition } from "react-transition-group";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearcInfo,
  SearcInfoTitle,
  SearcInfoSwitch,
  SearcInfoItem,
} from "./style";

class Header extends PureComponent {
  
  getListArea() {
    const { focused, list,page,mouseIn,totalPage,onMouseEnter,onMouseLeave,onClickHandle } = this.props;
    const newList = list.toJS()
    const pageList = []
    if(newList.length){
      for (let i = (page-1)*10; i < page*10; i++ ) {
        if(newList[i]) {
          pageList.push(
            <SearcInfoItem key={newList[i]}>{newList[i]}</SearcInfoItem>
          );
        }
        
      }
    }
    if (focused || mouseIn) {
      return (
        <SearcInfo onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <SearcInfoTitle>
            热门搜索

            <SearcInfoSwitch onClick={()=>onClickHandle(page,totalPage,this.spinIcon)}>
            <i className="iconfont icon-shuaxin spin" ref={(icon)=>{this.spinIcon = icon}}></i> 
              换一批</SearcInfoSwitch>
          </SearcInfoTitle>
          <div>
            {pageList}
            {/* {list.map((item, index) => {
              return <SearcInfoItem key={item}>{item}</SearcInfoItem>;
            })} */}
           </div>
        </SearcInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const { focused,onFocusAndBlurInput,list,isLogin,logout } = this.props;

    return (
      <HeaderWrapper>

        <Link to="/">
          <Logo />
        </Link>
        
        {/* <img src={Logo} alt="" /> */}
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            isLogin?<NavItem className="right" onClick={logout}>退出</NavItem> : <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
          {/* <NavItem className="right">登录</NavItem> */}
          <NavItem className="right iconfont icon-Aa">
            {/* <i className="iconfont icon-Aa"></i> */}
          </NavItem>
          <SearchWrapper>
            {/* <CSSTransition
          in={this.state.focused}
          timeout={200}
          className="slide"
          > */}
            <NavSearch
              onFocus={() => onFocusAndBlurInput(1,list)}
              onBlur={() => onFocusAndBlurInput(2)}
              className={focused ? "focused" : ""}
            ></NavSearch>
            {/* </CSSTransition> */}

            <i
              className={`iconfont icon-fangdajing ${
                focused ? "active" : ""
              }`}
            ></i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
        <Link to="/write">
          <Button className="writting iconfont icon-thin-_write_penc">
            {" "}
            写文章
          </Button>
        </Link>

          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPage: state.getIn(["header", "totalPage"]),
    isLogin: state.getIn(["login", "isLogin"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFocusAndBlurInput(val,list) {
      const active = {
        type: actionTypes.SEARCH_FOCUS,
        val,
      };
      dispatch(active);
      (val === 1 && list.size===0) && dispatch(actionCreators.getList());
    },
    onMouseEnter() {
      dispatch(actionCreators.mouseEnter());

    },
    onMouseLeave() {
      dispatch(actionCreators.mouseLeave());

    },
    onClickHandle(page,totalPage,spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
      if(originAngle) {
        originAngle = parseInt(originAngle,10);
      } else {
        originAngle = 0;
      }
    spin.style.transform = `rotate(${originAngle+360}deg)`
      if(page<totalPage) {
        dispatch(actionCreators.changePage(page+1));
      } else{
        dispatch(actionCreators.changePage(1));
      }

    },
    logout(){
      dispatch(loginActionCreators.logout())
    } 
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
