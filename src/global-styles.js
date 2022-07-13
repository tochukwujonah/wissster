import styled, { createGlobalStyle } from "styled-components";
// import './fonts/Metropolis/';
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');


    
    * {
        margin: 0;
        font-size: 10px;
        box-sizing: border-box;
        font-family: 'Metropolis', DM Sans;
        scroll-behavior: smooth;
        /* color: ${colors.light_grey}; */

    }
    body{
        background-color: ${colors.primary}; 
        color: ${colors.white};
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {

    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }


    h1 {
    font-size: 5.8rem;
        font-weight: 600;
        font-family: 'Dela Gothic One', sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }
    }

    h2 {
        font-size: 4.353rem;
        font-weight: 400;
        font-family: 'Metropolis', sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }
    }

    h3 {
        font-size: 4.0rem;
        font-weight: 400;
        font-family: 'Dela Gothic One', sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }

    }

    h4 {
        font-size: 2.25rem;
        font-weight: 400;
        font-family: 'Metropolis', sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }
    }

    h5 {
        font-size:  2rem;
        font-style: normal;
        font-weight: 400;
        font-family: 'Metropolis', sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }
    }

    h6 {
        font-size: 1.5625rem;
        font-weight: 400;
        font-family: 'Metropolis', sans-serif;

    }

    p {
        font-size: 1.6rem;
        font-weight: 400;
        font-family: 'Metropolis', sans-serif;
        color: ${colors.light_grey};
        line-height: 2.4rem;
    }

    br{
        content: "";
        display: block;
        margin: 20px 0;
    }

`;
