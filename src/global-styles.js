import styled, { createGlobalStyle } from "styled-components";
// import './fonts/Metropolis/';
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap'); */


    @font-face {
    font-family: "Metropolis";
    src: local("Metropolis"),
    url("./fonts/Metropolis/Metropolis-Black.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-BlackItalic.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-Bold.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-BoldItalic.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-ExtraBold.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-ExtraBoldItalic.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-ExtraLight.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-ExtraLightItalic.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-Light.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-LightItalic.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-Medium.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-MediumItalic.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-Regular.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-RegularItalic.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-SemiBold.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-SemiBoldItalic.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-Thin.otf") format("opentype"),
    url("./fonts/Metropolis/Metropolis-ThinItalic.otf") format("opentype");
    font-style: normal;
    }

    * {
        margin: 0;
        font-size: 10px;
        box-sizing: border-box;
        font-family: 'Metropolis', DM Sans;
        scroll-behavior: smooth;
        color: ${colors.light_grey};

    }
    body{
        background-color: ${colors.white};
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {

    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }


    h1 {
    font-size: 3.63rem;
        font-weight: 600;
        font-family: 'Metropolis', sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }
    }

    h2 {
        font-size: 2.89rem;
        font-weight: 400;
        font-family: 'Metropolis', sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }
    }

    h3 {
        font-size: 2.25rem;
        font-weight: 400;
        font-family: 'Metropolis', sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }

    }

    h4 {
        font-size: 1.95rem;
        font-weight: 400;
        font-family: 'Metropolis', sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }
    }

    h5 {
        font-size:  1.5625rem;
        font-style: normal;
        font-weight: 400;
        font-family: 'Metropolis', sans-serif;
        @media screen and (max-width: 600px) {
          font-size: 1.6rem;
        }
    }

    h6 {
        font-size: 1.25rem;
        font-weight: 400;
        font-family: 'Metropolis', sans-serif;

    }

    p {
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Metropolis', sans-serif;
        color: ${colors.light_grey};
        line-height: 2;
    }

`;
