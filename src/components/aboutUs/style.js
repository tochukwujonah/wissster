import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 100%;
  background-color: ${colors.secondary};
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1300px;

  /* align-items: center; */
  padding: 9.1rem 0;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  height: 550px;
  width: 47%;
  -webkit-border-before-color: red;
  padding: 23px;
  position: relative;

  & :nth-child(1) {
    position: absolute;
    top: 0;
    right: 22%;
  }

  & :last-child {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const TeamImage = styled.img`
  margin: 0 auto;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 48%;

  & div {
    padding-bottom: 3rem;
  }

  & h3 {
    font-family: "Dela Gothic One", cursive;
    padding-bottom: 16px;
    color: ${colors.white};
  }
  & p {
    color: ${colors.white};
    line-height: 2.4rem;
    padding-bottom: 1rem;
  }
`;
