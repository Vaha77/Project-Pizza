import React from "react";
import { Btn, Container, Logo } from "./style";
import logo from "../../../assets/imgs/logo.png";
import Kazinka from "../../../assets/icons/karzinka.svg";
export const Navbar = (vaha) => {
  return (
    <Container>
      <Logo>
        <Logo.Img src={logo} alt="logo" />
        <Logo.Title>
          REACT PIZZA
          <Logo.Wrapper>самая вкусная пицца во вселенной</Logo.Wrapper>
        </Logo.Title>
      </Logo>
      <Btn>
        <Btn.Left>
          520 <span>₽</span>
        </Btn.Left>
        <Btn.Border />
        <Btn.Right>
          <Btn.Img src={Kazinka} alt="karzinka" />
          <span>{vaha.count}</span>
        </Btn.Right>
      </Btn>
    </Container>
  );
};
export default Navbar;
