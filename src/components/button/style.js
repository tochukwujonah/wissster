import styled from "styled-components";
import { colors } from "../../colors";

export const ButtonWrapper = styled.button`
  border-radius: 0px;
  padding: 20px 40px;
  font-family: "Metropolis", sans-serif;
  font-size: 76px !important;
  background-color: ${({ filled, bgColor }) =>
    !filled && !bgColor
      ? "transparent"
      : filled && bgColor
      ? bgColor
      : !filled && bgColor
      ? "transparent"
      : "white"};
  color: ${({ filled, bgColor }) =>
    !filled && !bgColor
      ? "white"
      : filled && !bgColor
      ? "white"
      : !filled && bgColor
      ? bgColor
      : filled && bgColor
      ? "white"
      : "red"};
  
  border: none;
  outline: none;
  width: fit-content;

  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  transition: all 0.2s ease-in-out;
  border: 2px solid
    ${({ filled, bgColor }) =>
      filled && bgColor ? bgColor : !filled && bgColor ? bgColor : "red"};
  gap: 8px;
  & > span {
    font-size: 16px;
    font-family: "Metropolis", sans-serif;
  }
  & > span.last-span {
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: unset;
    border: 2px solid ${({ filled, bgColor }) => (filled ? bgColor : "white")};
    color: ${({ filled, bgColor }) => (filled ? bgColor : "white")};
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 13px !important;
    & > span {
      font-size: 10px !important;
    }
  }
`;
