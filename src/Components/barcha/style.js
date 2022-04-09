import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box; ;
`;
Container.Title = styled.div`
  margin-top: 22px;
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.01em;
  color: #000000;
`;
export const Card = styled.div`
  gap: 40px;
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 35px;
  border: 1px solid red;
  width: 100%;
  @media (min-width: 768px) {
    display: inline-flex;
    flex-wrap: wrap;
  }
`;
export const Cards = styled.div`
  border: 1px solid red;
  width: 380px;
  height: 459px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
Cards.Img = styled.img`
  width: 269px;
  height: 260px;
`;

Cards.Title = styled.div`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.01em;

  color: #000000;
`;
export const Box = styled.div`
  margin-top: 22px;
  width: 380px;
  height: 85px;
  background: #f3f3f3;
  border-radius: 10px;
`;
Box.Wrap = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 20px;
`;
Box.Title = styled.div`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.015em;
  display: flex;
  color: #2c2c2c;
  cursor: pointer;
  /* background: #ffffff; */
  padding: 8px 10px 8px 10px;
  &:hover {
  }
  &:active {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
  }
`;
