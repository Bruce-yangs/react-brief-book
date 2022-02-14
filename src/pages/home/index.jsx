import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import banner from "../../statics/banner.png";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import {actionCreators} from "./store";
class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src={banner} alt="" />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    );
  }
  componentDidMount(){
   this.props.changeHmeData()
  }
}
const mapDispatch = (dispatch)=> ({
  changeHmeData(){
    const action = actionCreators.getHomeInfo()
    dispatch(action)
    console.log(action);
  }
})

export default connect(null,mapDispatch)(Home);
