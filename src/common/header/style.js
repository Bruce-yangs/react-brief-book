import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 58px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin:-8px auto 0;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    float: right;
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .slide-enter {
    width: 160px;
    transition: all 0.2s ease-out;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    width: 240px;
    transition: all 0.2s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
  .icon-fangdajing {
    position: absolute;
    right: 5px;
    display: block;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    &.active {
      background: #ccc;
      color: #fff;
      cursor: pointer;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  width: 160px;
  height: 38px;
  padding: 0 40px 0 20px;
  margin: 9px 0 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  transition: all 0.3s;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 200px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin: 9px 20px 0 0;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  cursor: pointer;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background-color: #ec6149;
  }
`;
export const SearcInfo = styled.div`
  position: absolute;
  left: 0;
  top: 58px;
  padding: 0 20px 10px 20px;
  width: 240px;
  background-color:#ffffff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
export const SearcInfoTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearcInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
  .spin{
    display:block;
    float:left;
    margin-right: 2px;
    transition: all .3s ease-in;
    transform-origin: center center;

  }

`;

export const SearcInfoItem = styled.a`
  display: block;
  float: left;
  padding: 0 5px;
  font-size: 12px;
  line-height: 22px;
  color: #969696;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin: 5px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`;
