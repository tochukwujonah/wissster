import React from 'react'
import styled from "styled-components";

import {
    Container,
    ImageContainer,
    TeamImage,
    TextContainer,
} from './style'

import { teamMeet } from '../../assets';

const AboutUs = () => {
  return (
    <Container>
        <ImageContainer>
            <TeamImage src={teamMeet} />
        </ImageContainer>
        <TextContainer>
            <h2>About Us</h2>
            
        </TextContainer>
    </Container>
  )
}

export {AboutUs}