import React, { PureComponent,Component } from "react";
import { connect } from "react-redux";
// import { useParams } from 'react-router-dom'
import { DetailWrapper, Header, Content } from "./style";
import { actionCreators } from "./store";
// function withRouter(Component) {
//   return (props) => (
//     <Component
//       {...props}
//       params={useParams()}
//     />
//   );
// }

// const params = useParams();
// console.log(params.id)
class Detail extends Component {
  render() {
   
    
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        ></Content>
      </DetailWrapper>
    );
  }
  componentDidMount() {
   console.log(this.props);
    this.props.getDetail(this.props.params.id);
  }
}
const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"]),
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  },
});
export default connect(mapState, mapDispatch)(Detail);
