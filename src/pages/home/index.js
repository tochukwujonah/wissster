import React from "react";
import styled from "styled-components";
import { AboutUs } from "../../components/aboutUs";
import { ContactUs } from "../../components/contactUs";

const Home = () => {
  return (
    <Container>
      <AboutUs />
      <ContactUs />
    </Container>
  )
  
  
};

export { Home };

const Container = styled.main`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;
