import React from "react";
import Body from "./body";
import Navbar from "./navbar";
import { Container } from "./style";

export const Glavniy = () => {
  return (
    <Container>
      <Container.Nav>
        {" "}
        <Navbar />
        <Container.Border />
      </Container.Nav>
      <Body />
      ss
    </Container>
  );
};
export default Glavniy;
