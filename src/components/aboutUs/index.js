import React from 'react'
import styled from "styled-components";
import { colors } from "../../colors";
import { Button } from '../button';

import {
    Container,
    InnerContainer,
    ImageContainer,
    TeamImage,
    TextContainer,
} from './style'

import { 
    teamMeet,
    rightCurve,
    leftCurve, 
} from '../../assets';

const AboutUs = () => {
  return (
    <Container>
        <InnerContainer>
        <ImageContainer>
            <img src={rightCurve} alt="" />
            <TeamImage src={teamMeet} />
            <img src={leftCurve} alt="" />
        </ImageContainer>
        <TextContainer>
            <div>

            
            <h3>We at Wissster</h3>
            <p>
            Wissster collaborates with clients to create memorable identities, promotionals, packaging, and environments. Whether it is a large international campaign or a small independent initiative.<br/>
            <br/>
            Building a strong understanding from the start is the key to a successful project. We listen well and take the time to fully understand our clients' personalities and goals. This contributes to the development of long-term relationships in which we continue to deliver across multiple platforms. <br />
            <br/>
            We believe in a design-led approach to uncovering bold ideas and authentic concepts through research and strategy. We enjoy what we do, and our clients do as well.
            </p>

            </div>
            
            <Button filled bgColor='#9F42FE' noIcon text={'Collaborate with us'} />
            
        </TextContainer>
        </InnerContainer>
    </Container>
  )
}

export {AboutUs}