import React, { Component } from "react";
import { connect } from "react-redux";
import { RecommendItem, RecommendDownload } from "../style";
import qrcode from "/src/statics/qrcode.png";
import qrcode2 from "/src/statics/qrcode2.png";

class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <>
        {list.map((item) => {
          return (
            <RecommendItem
              key={item.get("id")}
              href={item.get("href")}
              target="_blank"
            >
              <img className="img" src={item.get("imgUrl")} alt="" />
            </RecommendItem>
          );
        })}
        <RecommendDownload href='https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click'>
          <img
            className="qrcode"
            src={qrcode}
            alt="Download index side qrcode"
          />
           <img
            className="qrcode2"
            src={qrcode2}
            alt="Download index side qrcode"
          />
          <div className="info">
            <div className="title">
              下载简书手机App<i className="iconfont ic-link"></i>
            </div>
            <div className="description">随时随地发现和创作内容</div>
          </div>
        </RecommendDownload>
      </>
    );
  }
}
const mapState = (state) => ({
  list: state.getIn(["home", "recommendList"]),
});
export default connect(mapState, null)(Recommend);
