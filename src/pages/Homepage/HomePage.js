import React from "react";
import {
  NavContainer,
  NavLogo,
  ButtonDiv,
} from "../../Components/Nav/NavbarStyles";

import { Button } from "../../Components/button/ButtonStyles";

const HomePage = () => {
  return (
    <div className="Homepage">
      <NavContainer>
        <NavLogo>Coordinet</NavLogo>
        <ButtonDiv>
          <Button>Login</Button>
          <Button>Signup</Button>
        </ButtonDiv>
      </NavContainer>
    </div>
  );
};

export default HomePage;
