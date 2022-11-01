import React from "react";
import "./Header.style";
import { FormContainer, HeaderContainer, MainHeader } from "./Header.style";

const Header = () => {
  return (
    <HeaderContainer>
      <MainHeader>RECIPE APP</MainHeader>
      <FormContainer></FormContainer>
    </HeaderContainer>
  );
};

export default Header;
