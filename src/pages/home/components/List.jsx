import React, { Component } from "react";
import { ListItem, ListInfo } from "../style";

class List extends Component {
  render() {
    return (
      <ListItem>
        <img
          className="pic"
          src="https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
          alt=""
        />
        <ListInfo>
          <h3 className="title">我的极简生活省出了一套房</h3>
          <p className="desc">
            我小时候家里穷，从那时起就知道省钱，每年过年长辈给的压岁钱我都会存起来，慢慢的节约省钱存钱成了我的生活习惯。
            我和老公每月有一万五的工资收入，一...
          </p>
        </ListInfo>
      </ListItem>
    );
  }
}

export default List;
