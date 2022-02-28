import { fromJS } from "immutable";
import * as actionTypes from "./actionType";

import img1 from "/src/statics/img1.jpeg";

const defaultState = fromJS({
  title: "",
  content:'<p>我小时候家里穷，从那时起就知道省钱，每年过年长辈给的压岁钱我都会存起来，慢慢的节约省钱存钱成了我的生活习惯。</p><p>我和老公每月有一万五的工资收入，一家三口只吃饭的话，一千元就足够了，因为我们一直在家做饭吃，从不点外卖，我平时买菜水果什么的，从不买反季节的，因为那东西太贵，又不健康，都是买那些应季的便宜的，什么便宜就多买什么就多吃什么，等贵的时候就不买也不吃了。</p><p>我的洗衣机用的还是结婚时买的半自动的，我不想换那种全自动的，不仅省下了买洗衣机的钱。另外也省了大量的水钱，我会把第一遍第二遍洗衣服的水留起来用来洗拖把冲厕所，第三遍的洗衣服都比较干净了，我会把这些水留在洗衣机里，用来作为下次洗衣服的第一遍水。</p><p>洗澡用的是太阳能，没用电热水器，既便每天洗澡也不用花一分电钱。电冰箱是小的，只要够用就好，大了既费电又占地方。虽然每个卧室里都装了空调，但我们一般只开一台，开空调时，把厨房门卫生间门一关，其他的房门打开，这样乘凉面积缩小了，每个房间里都有雨露均沾的凉气。</p><p>我家没车，出门骑电动车，偶尔坐公交，我们上班的地方都不远，买车没必要，对我来说那纯属浪费钱，车属于消费品，平时又不得开，买了也得在那里供着，这样车钱油钱停车费钱又省了一大笔。</p><p>别人说我太抠，但我认为这是一种美德，该花的就花，要把钱用在刀刃上。</p><p>最近孩子买房，100万的房子，我拿出80万给孩子付了首付，省下的20万让他自己还。不知不觉就这样存下了一套房的钱。</p><p>我认为存钱才是硬道理，我才不相信什么能挣能化的鬼话呢。</p>'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case  actionTypes.CHANGE_HOME_DATA:
    
      return state.set('articleList',state.get('articleList').concat(action.articleList));
    // return state.merge({
    //   topicList: fromJS(action.topicList),
    //   // authorInfoList: fromJS(action.authorInfoList),
    //   // recommendList: fromJS(action.recommendList),
    //   // authorList: fromJS(action.authorList),
    //   articleList: fromJS(action.articleList),
    // });
    default:
      return state
  }

  
};




