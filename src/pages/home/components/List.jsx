import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo,LoadMore } from "../style";
import * as actionCreators from "../store/actionCreators"
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const {list,getMoreList} = this.props;
    return (
      <div>
        {
        list.map((item, index) => {
       return    <Link key={index} to={'/detail/'+item.get('id')}>
         <ListItem key={index}>
        <img
          className="pic"
          src={item.get('imgUrl')}
          alt=""
        />
        <ListInfo>
          <h3 className="title">{item.get('title')}</h3>
          <p className="desc">
          {item.get('desc')}
          </p>
        </ListInfo>
      </ListItem>
       </Link>
        })
      }
      <LoadMore onClick={getMoreList}>阅读更多</LoadMore>
      </div>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home","articleList"])
})
const mapDispatch = (dispatch) => ({
  getMoreList(){
    dispatch(actionCreators.getMoreList())
  }
})
export default connect(mapState,mapDispatch)(List);

