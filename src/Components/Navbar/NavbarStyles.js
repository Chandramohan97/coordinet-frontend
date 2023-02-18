import styled from "styled-components"; //styled components allows to write css in js file.
import React from "react";

// const HomePageStyled = styled.div`
//   background-color: "#F7F8FC";
// `;

export const NavContainer = styled.div`
  background-color: #f7f8fc;
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled.a`
  font-size: x-large;
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin: 30px 40px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding-left: 30px; */
`;
export const Login = styled.button`
  color: white;
  height: 40px;
  width: 100px;
  background-color: #31bfc8;
  text-align: center;
  font-size: 12px;
  margin: 30px 10px;
  border-radius: 5px;
`;

// export default StyledButton;
