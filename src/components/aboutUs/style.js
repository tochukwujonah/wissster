import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.section`
    width: 100%;
    max-width: 100%;
    background-color: ${colors.simple_grey};
    border: 2px solid red;
    
`

export const InnerContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 9.1rem 0;
    margin: 0 auto;

`

export const ImageContainer = styled.div`
    height: 550px;
    width: 47%;
    border: 1px solid red;
    border-left: none;
    border-right: none;
    /* border-top: none; */
    -webkit-border-before-color: red;
    padding: 23px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    /* border-bottom-right-radius: 0px; */
`

export const TeamImage = styled.img`
    margin: 0 auto;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48%;

& h3{
    font-family: 'Dela Gothic One', cursive;
    padding-bottom: 16px;
} 

`

