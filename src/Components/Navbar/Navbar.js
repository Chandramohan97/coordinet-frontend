import React from "react";
// import StyledButton from "./NavbarStyles";
import {
  NavContainer,
  NavLogo,
  ButtonDiv,
  Login,
  Signup,
} from "./NavbarStyles";

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <NavLogo href="#">Coordinet</NavLogo>
        <ButtonDiv>
          <Login>Login</Login>
          <Login>Sign up</Login>
        </ButtonDiv>
      </NavContainer>
    </>
  );
};

export default Navbar;
