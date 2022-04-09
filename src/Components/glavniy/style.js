import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid red;
  /* margin: 20px; */
  /* padding: 49px 48px 96px 67px; */
  background: #ffffff;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
`;

Container.Border = styled.div`
  border: 1px solid #f7f7f7;
`;
Container.Nav = styled.div`
  @media (max-width: 768px) {
  }
`;
