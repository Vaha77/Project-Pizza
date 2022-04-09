import { Link } from "react-router-dom";
import styled from "styled-components";
export const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 38px 40px 77px;
  @media (max-width: 768px) {
    margin: 0px 0px 40px 0px;
  }
`;

Conatiner.Head = styled.div`
  /* width: 100%; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  /* height: 46px; */
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: inline-flex;
    flex-wrap: wrap;
    height: 80px;
  }
`;
export const Links = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  background: #f9f9f9;
  border-radius: 30px;
  margin-right: 10px;
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.015em;
  color: #2c2c2c;
  padding: 8px 16px 8px 16px;
`;
