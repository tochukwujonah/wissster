import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 100%;
  background-color: ${colors.secondary};
`;

export const InnerContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1300px;

  padding: 9.1rem 0;
  margin: 0 auto;
  @media (max-width: 1100px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  height: 550px;
  width: 40%;
  -webkit-border-before-color: red;
  padding: 23px;
  position: relative;

  & :nth-child(1) {
    position: absolute;
    top: 0;
    right: 0%;
  }

  & :last-child {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media (min-width: 679px) and (max-width: 1100px) {
    display: none;
  }
  @media (max-width: 678px) {
    width: 90%;
    height: fit-content;
    margin: 0 auto;
  }
`;

export const TeamImage = styled.img`
  height: 100%;
  width: 100%;
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
    font-size: clamp(2.5rem, 5vw, 4rem);
  }
  & p {
    color: ${colors.white};
    line-height: 2.4rem;
    padding-bottom: 1rem;
  }
  @media (max-width: 1100px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 4rem;
  }
`;
