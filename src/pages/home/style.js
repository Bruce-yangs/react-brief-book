import styled from "styled-components";
export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img{
    width: 625px;
    height:270px;
  }
`;
export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`;
export const TopicItem = styled.div`
  float: left;
  height:32px;
  line-height:32px;
  padding-right:10px;
  background:#f7f7f7;
  font-size:14px;
  border: 1px solid #dcdcdc;
  border-radius:4px;
  cursor: pointer;
  transition: .2s;
  margin: 0 0 10px 18px;
  .topic-pic{
      width:32px;
      margin-right:10px;
  }
  &:hover{
      transform: scale(1.1)
  }
`;
