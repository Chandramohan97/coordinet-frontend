import React from "react";
import {
  NavContainer,
  NavLogo,
  ButtonDiv,
} from "../../Components/Nav/NavbarStyles";
import { Button } from "../../Components/button/ButtonStyles";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="Homepage">
      <NavContainer>
        <NavLogo>Coordinet</NavLogo>
        <ButtonDiv>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Button>Signup</Button>
        </ButtonDiv>
      </NavContainer>
    </div>
  );
};

export default HomePage;
