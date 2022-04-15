import React, { useState } from "react";
import { pizza } from "../../utils/Data";
import { Box, Card, Cards, Container } from "./style";

export const Hammasi = (vaha) => {
  const [count, setCount] = useState(0);
  const hendelClick = () => {
    setCount(count + 1);
  };

  return (
    <Container>
      <Container.Title>пиццы</Container.Title>
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
                  <button onClick={() => hendelClick()}>dabavit</button>
                  <h1>{count}</h1>
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
