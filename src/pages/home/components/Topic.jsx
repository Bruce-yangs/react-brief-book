import React, { Component } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends Component {
  render() {
    const { list } = this.props;
    // const newList = list.toJS()
    return (
      <TopicWrapper>
        {list.map((item, index) => (
          <TopicItem key={item.get("id")}>
            <img className="topic-pic" src={item.get("imgUrl")} alt="" />
            <span className="desc">{item.get("title")}</span>
          </TopicItem>
        ))}
      </TopicWrapper>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(["home", "topicList"]),
  };
};

export default connect(mapState, null)(Topic);
