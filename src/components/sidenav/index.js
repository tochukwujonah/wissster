import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { colors } from "../../colors";
import { IoMdClose } from "react-icons/io";
import {
  AiFillBehanceCircle,
  AiFillDribbbleCircle,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideNav = ({ isModalOpen, onClose }) => {
  return ReactDOM.createPortal(
    <>
      <Container isOpen={isModalOpen}>
        <Header>
          <Close onClick={() => onClose()}>
            <span></span>
            <span></span>
          </Close>
        </Header>
        <Body>
          <NavItem>
            <NavLink to="/">
              <h3>Home</h3>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">
              <h3>About Us</h3>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">
              <h3>Our Works</h3>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/#">
              <h3>Our Blog</h3>
            </NavLink>
          </NavItem>
        </Body>
        <Footer>
          <SocialIcon>
            <IconLink href="#">
              <AiFillBehanceCircle size={25} />
            </IconLink>
          </SocialIcon>
          <SocialIcon>
            <IconLink href="#">
              <AiOutlineTwitter size={25} />
            </IconLink>
          </SocialIcon>
          <SocialIcon>
            <IconLink href="#">
              <FaLinkedinIn size={25} />
            </IconLink>
          </SocialIcon>
          <SocialIcon>
            <IconLink href="#">
              <AiFillDribbbleCircle size={25} />
            </IconLink>
          </SocialIcon>
        </Footer>
      </Container>
    </>,
    document.getElementById("portal")
  );
};

export { SideNav };

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  min-height: 100vh;
  width: 65%;
  z-index: 999;
  max-width: 40vw;
  min-width: ${(props) => (props.isOpen ? "280px" : "0")};
  background-color: ${colors.yellow};
  width: ${(props) => (props.isOpen ? "65%" : "0")};
  height: ${(props) => props.isOpen && "fit-content"};
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${(props) => (props.isOpen ? "1.5rem 1rem" : "0")};
  transform: ${({ isOpen }) =>
    isOpen
      ? `translateX(0)

    `
      : "translateX(100%)"};
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2),
    -1px -0.5rem 1rem rgba(255, 255, 255, 0.1);
  z-index: 39;
`;

const Header = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const Close = styled.div`
  //create a close icon
  position: relative;
  display: flex;
  height: 50px;
  width: 60px;
  margin-right: 60px;
  transition: all 0.3s ease-in-out;
  & > span {
    width: 50px;
    height: 6px;
    border-radius: 3px;
    background-color: ${colors.white};
    position: absolute;
    left: 0;
    top: 50%;
    transition: all 0.3s ease-in-out;
    box-shadow: all 0.3s ease-in-out;

    &:first-of-type {
      transform: rotate(45deg) translateY(-5px);
    }
    &:last-of-type {
      background-color: ${colors.primary};
      transform: rotate(-45deg) translateY(-2px);
    }
  }
  &:hover {
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    & > span {
      &:first-of-type {
        transform: rotate(0deg) translateY(10px) translateX(20px);
        width: 30px;
      }
      &:last-of-type {
        transform: rotate(0deg) translateY(0px);
      }
    }
  }
  @media (max-width: 998px) {
    margin-right: 20px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 2rem;
  padding: 1rem;
  align-items: flex-start;
  justify-content: flex-start;
  width: 70%;
  margin: 25% auto;
`;

const NavItem = styled.div`
  display: flex;
  width: 100%;
  transition: all 0.3s ease-in-out;
`;
const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  width: 100%;
  text-decoration: none;
  padding: 0 1rem;
  color: ${colors.primary};
  transition: all 0.3s ease-in-out;
  & > h3 {
    font-size: 3rem;
    font-weight: 500;
  }
  &:hover {
    transition: all 0.3s ease-in-out;

    cursor: pointer;
    color: ${colors.white};
    background-color: ${colors.primary};
  }
`;

const Footer = styled.div`
  display: flex;
  gap: 1rem;
  width: 65%;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  align-self: flex-end;
  margin: 0 auto;
  padding: 1rem;
`;
const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${colors.white};
`;
const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${colors.primary};
  color: ${colors.white};
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background-color: ${colors.white};
    color: ${colors.primary};
  }
`;
