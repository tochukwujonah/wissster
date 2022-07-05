import styled from "styled-components";
import {colors} from "../../colors"

export const Container = styled.section`
    width: 100%;
    height: max-content;
    background: linear-gradient(262.96deg, #5219D6 14.46%, #8C2FEB 85%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 58px 0;
    color: ${colors.white};
    border: 1px solid red;

    & h3{
        font-family: 'Dela Gothic One', cursive;
        font-size: 3.6rem;
        font-weight: 400;
    };

    & p{
        color: ${colors.white};
        font-family: 'Metropolis', sans-serif;
        font-weight: 400;
        padding-top: 16px;
        padding-bottom: 32px;
    }
`

export const Button = styled.button`
    padding: 20px 40px;
    color: ${colors.light_grey};
    font-family: "Metropolis", sans-serif;
    font-size: 16px !important;
    border: none;
    outline: none;
    width: fit-content;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
    background-color: unset;
    color: ${colors.white};
    border: 2px solid ${colors.white};
    transition: all 0.2s ease-in-out;
    }
`