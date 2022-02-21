import axios from "axios";
// import * as actionCreators from "./actionCreators";
import * as actionType from "./actionType";
import { fromJS } from "immutable";

//提取传参
const changeHomeData = (result) =>({
    type: actionType.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    authorInfoList: result.authorInfoList
})
//点击更多，传参
const addHomeList = (list) =>({
    type: actionType.ADD_HOME_LIST,
    articleList: fromJS(list)
})

export const getHomeInfo = () => {
    return (dispatch)=>{
        axios.get('/api/home.json').then(res=>{
            const result = res.data.data;
            dispatch(changeHomeData(result))
          })
    }
}
export const getMoreList = () => {
    return (dispatch)=>{
        axios.get('/api/homeList.json').then(res=>{
            const result = res.data.data;
            console.log(result);
            dispatch(addHomeList(result))
          })
    }
}
