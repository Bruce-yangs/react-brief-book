import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionType";
import * as actionCreators from "./store/actionCreators";
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

class Header extends Component {
  
  getListArea() {
    const { focused, list,page,mouseIn,totalPages,onMouseEnter,onMouseLeave,onClickHandle } = this.props;
    const newList = list.toJS()
    const pageList = []
    for (let i = (page-1)*10; i < page*10; i++ ) {
      pageList.push(
        <SearcInfoItem key={newList[i]}>{newList[i]}</SearcInfoItem>
      )
    }
   

    if (focused || mouseIn) {
      return (
        <SearcInfo onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <SearcInfoTitle>
            热门搜索
            <SearcInfoSwitch onClick={()=>onClickHandle(page,totalPages)}>换一批</SearcInfoSwitch>
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
    const { focused,onFocusAndBlurInput } = this.props;

    return (
      <HeaderWrapper>
        <Logo />
        {/* <img src={Logo} alt="" /> */}
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
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
              onFocus={() => onFocusAndBlurInput(1)}
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
          <Button className="writting iconfont icon-thin-_write_penc">
            {" "}
            写文章
          </Button>
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
    totalPages: state.getIn(["header", "totalPages"]) 
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFocusAndBlurInput(val) {
      const active = {
        type: actionTypes.SEARCH_FOCUS,
        val,
      };
      dispatch(active);
      dispatch(actionCreators.getList());
    },
    onMouseEnter() {
      console.log(1);
      dispatch(actionCreators.mouseEnter());

    },
    onMouseLeave() {
      console.log(2);
      dispatch(actionCreators.mouseLeave());

    },
    onClickHandle(page,totalPages) {
      console.log(3);
      dispatch(actionCreators.changePage());

    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
