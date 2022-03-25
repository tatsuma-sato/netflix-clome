import styled from "styled-components/macro";
import { MdLanguage } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  padding: 70px 0;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 45px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  text-decoration: none;
  font-size: ${({ fontSize }) => fontSize};
  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Select = styled.select`
  background-color: #000000;
  border: 1px solid #757575;
  position: absolute;
  z-index: 1;
  color: #757575;
  height: 100%;
  width: 100%;
  text-align: right;
  padding-right: 10px;
  font-size: 16px;
`;

export const Box = styled.div`
  position: relative;
  width: 140px;
  height: 55px;
  margin: 20px 0;
`;

export const Icon = styled(MdLanguage)`
  position: absolute;
  top: 17px;
  left: 20px;
  font-size: 20px;
  color: #757575;
  z-index: 100;
`;
