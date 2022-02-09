import { fromJS } from "immutable";
// import * as actionTypes from "./actionType";

const defaultState = fromJS({
  topicList: [{
    id:1,
    title:'社会热点',
    imgUrl:'https://upload.jianshu.io/users/upload_avatars/26142764/d0df00bb-eb8e-454e-b291-a8590a1eb111.jpg',
  },
  {
    id:2,
    title:'人文科学',
    imgUrl:'https://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
  },
  {
    id:3,
    title:'热门话题',
    imgUrl:'https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
  },
  {
    id:4,
    title:'大众题目',
    imgUrl:'https://upload.jianshu.io/users/upload_avatars/3730494/a5859e59-509d-4d2c-a594-d8d6e5c23d68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
  },
  {
    id:5,
    title:'绘画',
    imgUrl:'https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
  },
  {
    id:6,
    title:'历史',
    imgUrl:'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180',
  }
],
});

export default (state = defaultState, action) => {
//   if (action.val === 1) {
//     return state.set("focused", true);
//   }

  return state;
};
