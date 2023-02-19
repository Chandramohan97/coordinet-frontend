import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Text } from "../../Components/form/LoginFormStyles";
import {
  NavContainer,
  NavLogo,
  ButtonDiv,
} from "../../Components/Nav/NavbarStyles";
import { Button } from "../../Components/button/ButtonStyles";
import { Login } from "./LoginPageStyles";
const LoginPage = () => {
  return (
    <div className="Loginpage">
      <NavContainer>
        <NavLogo>Coordinet</NavLogo>
        <ButtonDiv>
          <Link to="/signup">
            <Button>Signup</Button>
          </Link>
        </ButtonDiv>
      </NavContainer>
      <Text>Let's Go !</Text>
      <Form>
        <Input placeholder="Enter your email"></Input>
        <Input placeholder="Enter your password"></Input>
        <Login>Login</Login>
        <Login>Login with Google</Login>
      </Form>
    </div>
  );
};

export default LoginPage;
