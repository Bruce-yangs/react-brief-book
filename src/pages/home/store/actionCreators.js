import axios from "axios";
// import * as actionCreators from "./actionCreators";
import * as actionType from "./actionType";

//提取传参
const changeHomeData = (result) =>({
    type: actionType.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    authorInfoList: result.authorInfoList
})

export const getHomeInfo = () => {
    return (dispatch)=>{
        axios.get('/api/home.json').then(res=>{
            const result = res.data.data;
            dispatch(changeHomeData(result))
          })
    }
}
