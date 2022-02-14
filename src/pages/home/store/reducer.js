import { fromJS } from "immutable";
import * as actionTypes from "./actionType";

import img1 from "/src/statics/img1.jpeg";
import img2 from "/src/statics/img2.jpeg";
import img3 from "/src/statics/img3.jpeg";
import img4 from "/src/statics/img4.png";
import img5 from "/src/statics/img5.jpeg";

import r1 from "/src/statics/r1.png";
import r2 from "/src/statics/r2.png";
import r3 from "/src/statics/r3.png";
import r4 from "/src/statics/r4.png";
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/26142764/d0df00bb-eb8e-454e-b291-a8590a1eb111.jpg",
    },
    {
      id: 2,
      title: "人文科学",
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    },
    {
      id: 3,
      title: "热门话题",
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    },
    {
      id: 4,
      title: "大众题目",
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/3730494/a5859e59-509d-4d2c-a594-d8d6e5c23d68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    },
    {
      id: 5,
      title: "绘画",
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    },
    {
      id: 6,
      title: "历史",
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
    },
  ],
  articleList: [
    {
      id: 1,
      title: "我的极简生活省出了一套房",
      desc: "我小时候家里穷，从那时起就知道省钱，每年过年长辈给的压岁钱我都会存起来，慢慢的节约省钱存钱成了我的生活习惯。我和老公每月有一万五的工资收入，一...",
      imgUrl: img1,
    },
    {
      id: 2,
      title: "第一次被约稿",
      desc: " 俗话说，穷在深山有远亲。 昨天，一位小姐妹向我约稿了，让我写她的老公，一位博士研究生的成长史。 一瞬间，心中的温暖，山高水长。 哎呀，我也谦虚了...",
      imgUrl: img2,
    },
    {
      id: 3,
      title: "凌晨五点的电话",
      desc: "凌晨5点，我接到了一个电话。对方说，他的老公和我鬼混一夜，怎么还不回去。我揉揉眼睛，心情郁闷的说：“你打错了吧？我在睡觉呢，没有跟谁鬼混！” “...",
      imgUrl: img3,
    },
    {
      id: 4,
      title: "结婚前的建议吧，不存在忠告。",
      desc: "1、尽量三十岁之前就把自己嫁了吧，不是说三十之后嫁不出去，而是选择性比较小。如果你还没到三十，你觉得自己男朋友穷，可以再慢慢观察他是否有潜力，是...",
      imgUrl: img4,
    },
    {
      id: 5,
      title: "估计自己也能长寿",
      desc: "我感觉自己将来肯定能长寿，虽然平时小毛病不断，但经过我仔细分析研究，活它个八十岁应该没多大问题。 原因有五点： 第一，天生爱操心的命，做什么事追...",
      imgUrl: img5,
    },
  ],
  recommendList: [
    // {
    //   id: 1,
    //   href: "https://www.jianshu.com/mobile/campaign/day_by_day/join?from=home",
    //   imgUrl: r1,
    // },
    // {
    //   id: 2,
    //   href: "https://www.jianshu.com/mobile/club",
    //   imgUrl: r2,
    // }
    // ,
    {
      id: 3,
      href: "https://www.jianshu.com/mobile/books?category_id=284",
      imgUrl: r3,
    },
    {
      id: 4,
      href: "https://www.jianshu.com/publications",
      imgUrl: r4,
    },
  ],
  authorList: [
    {
      id: 1,
      href: "https://www.jianshu.com/mobile/campaign/day_by_day/join?from=home",
      imgUrl: r1,
    },
    {
      id: 2,
      href: "https://www.jianshu.com/mobile/club",
      imgUrl: r2,
    },
    {
      id: 3,
      href: "https://www.jianshu.com/mobile/books?category_id=284",
      imgUrl: r3,
    },
    {
      id: 4,
      href: "https://www.jianshu.com/publications",
      imgUrl: r4,
    },
  ],
  authorInfoList: [
    {
      id: 1,
      href: "https://www.jianshu.com/u/ef4f2422125f?utm_source=desktop&utm_medium=index-users",
      imgUrl:"https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      desc: "写了2154.5k字 · 34.8k喜欢",
      name: "卢璐说",
    },
    {
      id: 2,
      href: "https://www.jianshu.com/u/51b4ef597b53?utm_source=desktop&utm_medium=index-users",
      imgUrl:"https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      desc: "写了1266.5k字 · 6k喜欢",
      name: "董克平日记",
    },
    {
      id: 3,
      href: "https://www.jianshu.com/u/bf26d103fb8d?utm_source=desktop&utm_medium=index-users",
      imgUrl:"https://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
      desc: "写了436.6k字 · 2k喜欢",
      name: "Hobbit霍比特人",
    },
    {
      id: 4,
      href: "https://www.jianshu.com/publicationshttps://www.jianshu.com/u/c5a2ce84f60b?utm_source=desktop&utm_medium=index-users",
      imgUrl: "https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      desc: "写了458.9k字 · 115.7k喜欢",
      name: "简书钻首席小管家",
    },
    {
      id: 5,
      href: "https://www.jianshu.com/u/ffc565d738a3?utm_source=desktop&utm_medium=index-users",
      imgUrl:"https://upload.jianshu.io/users/upload_avatars/3730494/a5859e59-509d-4d2c-a594-d8d6e5c23d68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
      desc: "写了722.5k字 · 18.4k喜欢",
      name: "格列柯南",
    },
  ],
});

export default (state = defaultState, action) => {
  //   if (action.val === 1) {
  //     return state.set("focused", true);
  //   }
  console.log('xxxx');
  console.log(action);
  switch (action.type) {
    case  actionTypes.CHANGE_HOME_DATA:
    return state.merge({
      topicList: fromJS(action.topicList),
      topicList: fromJS(action.topicList),
      authorInfoList: fromJS(action.authorInfoList),
      recommendList: fromJS(action.recommendList),
      // authorList: fromJS(action.authorList),
    });
    default:
      return state
  }

  if (action.type) {
    console.log(action);
        // return state.set("focused", true);
      }

  return state;
};
