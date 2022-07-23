import styled, { keyframes } from "styled-components";
import { colors } from "../../colors";
import { heroBg } from "../../assets";
//create keyframes for bounce animation

const Bounce = keyframes`
 0% {
  transform: translateY(0px);
 }
 50% {
  transform: translateY(5px);
 }
  75% {
  transform: translateY(-7px);
 }
  100% {
  transform: translateY(5px);
 }
`;
export const Container = styled.section`
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  background-color: ${colors.secondary};
  position: relative;
  isolation: isolate;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 480px;
    height: 500px;
    background-color: ${colors.secondary};
    z-index: -1;
    opacity: 0.5;
    background-image: url(${heroBg});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-end;
  max-width: 1150px;
  height: calc(100vh - 84px);
  /* max-height: 50rem; */
  margin: 0 auto;
`;
export const IntroWrap = styled.aside`
  max-width: 500px;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const ButtonWrap = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin: 2rem 0;
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.yellow};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  & > svg {
    transition: all 0.3s ease-in-out;
    animation: ${Bounce} 1s ease-in-out infinite;
  }
`;
