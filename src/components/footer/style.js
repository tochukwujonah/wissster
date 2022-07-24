import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../colors";

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  /* max-width: 1150px; */
  padding: 5rem 0;
  margin: 0 auto;
  background-color: ${colors.secondary};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;

  & > :nth-child(1) {
    /* padding-right: 10px; */
    border-right: 2px solid;
  }

  & > :nth-child(2) {
    border-right: 2px solid;
  }

  & > :nth-child(3) {
    border-right: 2px solid;
  }
`;

export const FooterLink = styled.a.attrs({ target: "_blank" })`
  display: flex;
  text-decoration: none;
  padding-right: 10px;
  padding-left: 10px;
  /* padding: 0 0 30px 0; */
  color: ${colors.white};
  width: max-content;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: "Metropolis", sans-serif;
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 600;

  &:hover {
    color: ${colors.link_hover};
    transition: all 0.3s ease-in-out;
  }
  &.active {
    color: ${colors.primary};
    transition: all 0.3s ease-in-out;
  }
`;

export const FooterCredit = styled.p`
  padding-top: 30px;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.white};
`;
