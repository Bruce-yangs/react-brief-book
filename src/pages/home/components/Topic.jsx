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
        {/* <TopicItem>
        <img className="topic-pic" src="https://upload.jianshu.io/users/upload_avatars/26142764/d0df00bb-eb8e-454e-b291-a8590a1eb111.jpg" alt="" />
        <span className="desc">社会热点</span>
      </TopicItem>
      <TopicItem>
        <img className="topic-pic" src="https://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
        
        <span className="desc">人文科学</span>

      </TopicItem>
      <TopicItem>
        <img className="topic-pic" src="https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
        <span className="desc">热门话题</span>
      </TopicItem>
      <TopicItem>
        <img className="topic-pic" src="https://upload.jianshu.io/users/upload_avatars/3730494/a5859e59-509d-4d2c-a594-d8d6e5c23d68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
        
        <span className="desc">大众题目</span>

      </TopicItem>
      <TopicItem>
        <img className="topic-pic" src="https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
        社会热点
      </TopicItem>
      <TopicItem>
        <img className="topic-pic" src="https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt="" />
        社会热点
      </TopicItem>
      <TopicItem>
        <img className="topic-pic" src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt="" />
        社会热点
      </TopicItem> */}
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
