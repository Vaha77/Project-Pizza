import styled from "styled-components";

export const Container = styled.div`
  margin: 49px 38px 40px 77px;
  display: flex;
  @media (max-width: 768px) {
    margin: 8px;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  width: 316px;
  height: 48px;
`;
Logo.Title = styled.div`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #181818;
  @media (max-width: 768px) {
    font-size: 5px;
  }
`;
Logo.Wrapper = styled.div`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 19px;
  color: #7b7b7b;
  @media (max-width: 768px) {
    font-weight: 100;

    font-size: 1px;
  }
`;
Logo.Img = styled.img`
  display: flex;
  width: 38px;
  height: 38px;
`;

export const Btn = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  background: #fe5f1e;
  border-radius: 30px;
`;
Btn.Left = styled.div`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
Btn.Right = styled.div`
  gap: 8px;
  display: flex;
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  cursor: pointer;
`;
Btn.Img = styled.img`
  display: flex; ;
`;
Btn.Border = styled.div`
  margin: 0 13px 0 13px;
  width: 2px;
  height: 25px;
  background: rgba(255, 255, 255, 0.25);
`;
