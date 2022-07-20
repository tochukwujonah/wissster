import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { fineGirlOne, fineGirlTwo, fineBoyOne, fineBoyTwo } from "../../assets";

import { Button } from "../button";

const Testimonials = () => {
  return (
    <Container>
      <TextContainer>
        <h3>What our clients are saying</h3>
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          pellentesque nunc dolor et condimentum. Dignissim et diam etiam
          scelerisque. Vestibulum, semper tellus amet eros, id rhoncus
          pellentesque consectetur.”
        </p>
        <h6>
          Prince Chijioke - <span>Design Lead Wissster</span>
        </h6>

        <ClientImages>
          <img src={fineGirlOne} alt="" />
          <img src={fineGirlTwo} alt="" />
          <img src={fineBoyOne} alt="" />
          <img src={fineBoyTwo} alt="" />
        </ClientImages>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 1080;
  max-width: 100%;
  padding: 70px 0;
  background-color: ${colors.secondary};
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  & > p {
    padding: 42px 0 38px 0;
    text-align: center;
    color: ${colors.white};
    width: 35%;
  }

  & > h6 {
    padding-bottom: 48px;
  }
`;

const ClientImages = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 15%;
`;

export { Testimonials };
