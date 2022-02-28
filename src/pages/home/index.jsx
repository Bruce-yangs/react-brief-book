import React, { PureComponent } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { HomeWrapper, HomeLeft, HomeRight,BackTop } from "./style";
import banner from "../../statics/banner.png";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import {actionCreators} from "./store";
class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0,0)
  }
  render() {
    const { showScrollTop } = this.props;
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
        {showScrollTop?<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
        
      </HomeWrapper>
    );
  }
  componentDidMount(){
   this.props.changeHomeData()
   this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}
const mapState = (state) => ({
  showScrollTop: state.getIn(['home','showScrollTop'])
})

const mapDispatch = (dispatch)=> ({
  changeHomeData(){
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeScrollTopShow(e){
    if(e.srcElement.documentElement.scrollTop>400) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState,mapDispatch)(Home);
