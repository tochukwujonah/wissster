import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 32px;
    border: 1px solid red;
`;

export const ImageContainer = styled.div`
    width: 50%;
    /* height: 361px; */
`;

export const Image = styled.img`
    object-fit: contain;

`

export const DetailsContainer = styled.div`
    background-color: ${colors.grey};
    width: 50%;
    height: 361px;
    padding: 30px 26px;

`;

export const DetailsInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;

    & h4 {
        font-family: 'Dela Gothic One', cursive;
        color: ${colors.light_grey};
        padding: 12px 0 14px 0;
        font-size: 24px;
        line-height: 34.75px;
    };

    & h6{
        color: ${colors.light_grey};
        background-color: #E6DFFB;
        width: fit-content;
        padding: 7px 14px;
        border-radius: 20px;
        cursor: pointer;
    }

    & p{
        font-size: 16px;
        font-family: 'Metropolis', sans-serif;
        line-height: 32px;
        color: ${colors.light_grey};
        
    }

    & a{
        color: ${colors.primary};
        font-size: 16px;
        text-decoration: none;
        padding-top: 25px;
        width: fit-content;

        &:hover{
            color: ${colors.light_grey};
            transition: all 0.7s ease-in-out;
        }
    }

`