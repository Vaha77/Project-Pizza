import React from "react";
import { pizza } from "../../utils/Data";
import { Box, Card, Cards, Container } from "./style";

export const Hammasi = () => {
  return (
    <Container>
      <Container.Title>Все пиццы</Container.Title>
      <Card>
        {pizza.map((item) => {
          return (
            <Cards key={item.id}>
              <Cards.Img src={item.img} alt={item.name} />
              <Cards.Title>{item.title}</Cards.Title>
              <Box>
                <Box.Wrap>
                  <Box.Title>{item.desc}</Box.Title>
                  <Box.Title>{item.desc2}</Box.Title>
                </Box.Wrap>
              </Box>
            </Cards>
          );
        })}
      </Card>
    </Container>
  );
};
export default Hammasi;
