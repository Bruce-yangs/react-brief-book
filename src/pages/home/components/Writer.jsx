import React, { Component } from "react";
import { connect } from "react-redux";
import { WriterWrapper, WriterHeader, WriterItem } from "../style";

class Writer extends React.Component {
  render() {
    const {list} = this.props
    return (
      <WriterWrapper>
        <WriterHeader>
          <div className="title">推荐作者</div>
        </WriterHeader>
        {
          list.map((item, index) => (
            <WriterItem key={item.get("id")}>
            <a href={item.get("href")} target="_blank">
            <img
              className="img"
              src={item.get('imgUrl')}
              alt=""
            />
            </a>
            <div className="info">
              <div className="title">{item.get('name')}</div>
              <p className='desc'>{item.get('desc')}</p>
            </div>
            <div className='attention'>+关注</div>    
          </WriterItem>
          ))}
          <a  target="_blank" href="https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users" className='all'>查看全部</a>
      </WriterWrapper>
    );
  }
}
// const mapState = (state) => ({
//   list: state.getIn(['home','authorInfoList']),
// })
const mapState = (state) => {
  return {
    list: state.getIn(['home','authorInfoList']),
  }
};
export default connect(mapState,null)(Writer);
