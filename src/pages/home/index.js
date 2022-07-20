import React from "react";
import styled from "styled-components";
import { Hero, TestSlider } from "../../components";

const Home = () => {
  return (
    <Container>
      <Hero />
      <TestSlider />
      {/* <AboutUs />
      <ContactUs />
      <OurBlog /> */}
    </Container>
  );
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
