import styled from "styled-components";
export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 5px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  margin-right: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  margin: 0 0 10px 18px;
  .topic-pic {
    width: 32px;
    margin-right: 10px;
  }
  &:hover {
    transform: scale(1.1);
  }
  .desc {
    position: relative;
    top: -10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  font-size: 14px;
  border-bottom: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
  &:hover {
    transform: scale(1.03);
  }
`;

export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendItem = styled.a`
  .img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`;

export const RecommendDownload = styled.a`
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 83%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  .qrcode2 {
    position: absolute;
    left: 80px;
    top: -192px;
    width: 180px;
    display: none;
  }
  &:hover {
    .qrcode2 {
      display: block;
    }
  }

  .qrcode {
    width: 60px;
    height: 60px;
    opacity: 0.85;
  }
  .info {
    position: relative;
    top: -12px;
    display: inline-block;
    margin-left: 7px;
  }
  .title {
    font-size: 15px;
    color: #333;
  }
  .description {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`;

export const WriterWrapper = styled.div`
  height: 320px;
  .all {
    display: block;
    text-decoration-line: none;
    text-align: center;
    padding: 7px 7px 7px 12px;
    width: 90%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
  }
`;
export const WriterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 14px;
    color: #969696;
  }
`;
export const WriterItem = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  .img {
    flex: 0 0 48px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .info {
    .title {
      padding-top: 5px;
      font-size: 14px;
    }
    .desc {
      margin-top: 2px;
      font-size: 12px;
      color: #969696;
    }
  }
  .attention {
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 20px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-radius: 50%;
  font-size: 13px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: all 0.3s;
  &:hover{
    transform: scale(1.1)
  }
`;
