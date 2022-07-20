import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import {
  Container,
  InnerContainer,
  IntroWrap,
  TextWrap,
  ButtonWrap,
} from "./styled";
import { BsArrowDown } from "react-icons/bs";

const Hero = () => {
  return (
    <Container>
      <InnerContainer>
        <IntroWrap>
          <TextWrap>
            <h3>We’re Wissster✨</h3>
            <p>
              a team of multidisciplinary digital design experts focused on
              branding and promotional ads (creative dependent).
            </p>
          </TextWrap>

          <ButtonWrap>
            <BsArrowDown size={45} />
          </ButtonWrap>
        </IntroWrap>
      </InnerContainer>
    </Container>
  );
};

export { Hero };
