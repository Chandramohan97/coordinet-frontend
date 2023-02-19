import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Text } from "../../Components/form/LoginFormStyles";
import {
  NavContainer,
  NavLogo,
  ButtonDiv,
} from "../../Components/Nav/NavbarStyles";
import { Button } from "../../Components/button/ButtonStyles";
import { Login } from "../LoginPage/LoginPageStyles";

const SignUp = () => {
  return (
    <div className="SignUp">
      <NavContainer>
        <NavLogo>Coordinet</NavLogo>
        <ButtonDiv>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </ButtonDiv>
      </NavContainer>
      <Text>Let's Go !</Text>
      <Form>
        <Input placeholder="Enter Name"></Input>
        <Input placeholder="Enter Mobile Number"></Input>
        <Input placeholder="Enter Email address"></Input>
        <Input placeholder="Enter password"></Input>
        <Login>Sign up</Login>
        <Login>Signup with Google</Login>
      </Form>
    </div>
  );
};

export default SignUp;
