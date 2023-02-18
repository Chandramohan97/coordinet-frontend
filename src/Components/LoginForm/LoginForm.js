import React from "react";
import {
  NavContainer,
  NavLogo,
  ButtonDiv,
  Login,
} from "../Navbar/NavbarStyles"; // reusing NavContainer and Login styled elements.
import { FormDiv, InputForm, H1, Button } from "./LoginFormStyles";

const LoginForm = () => {
  return (
    <>
      <NavContainer>
        <NavLogo href="#">Coordinet</NavLogo>
        <ButtonDiv>
          <Login>Sign up</Login>
        </ButtonDiv>
      </NavContainer>
      <H1>Let's Go!</H1>
      <FormDiv>
        <InputForm placeholder="Enter email address"></InputForm>
        <InputForm placeholder="Enter password"></InputForm>
        <Button> Log in </Button>
        <Button style={{ margin: "10px" }}> Sign in with Google</Button>
      </FormDiv>
    </>
  );
};

export default LoginForm;
