import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 70px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  top: 0;
  z-index: 1001;
  padding: 16px 0;
  background: #fff;
  align-items: center;
  border-right: 1px solid #f2f2f2;
  text-align: center;

  img {
    width: auto;
    height: 30px;
    margin: 0;
    padding-top: 10px;
  }

  .addicon, .updateicon, .chaticon {
    width: auto;
    height: 30px;
    margin-top: 35px;
    cursor: pointer;
  }
`;