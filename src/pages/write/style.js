import styled from "styled-components";

export const LoginWrapper = styled.div`
  min-width: 900px;
  height: 100vh;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background-color: #f1f1f1;
`;
export const LoginBox = styled.div`
  display: flex;
  width: 800px;
  // height: 600px;
  margin: 0 auto;
  padding-top: 20px;

  .left {
    width: 400px;
    margin-right: 20px;
  }
  .right {
    flex: 1;
    height: 410px;
    padding-top: 100px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`;
export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  padding: 0 10px;
  margin: 10px auto;
  color: #777;
`;
export const Button = styled.div`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 15px;
  padding: 0 10px;
  margin: 20px auto;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
`;
