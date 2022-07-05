import React from "react";
import styled from "styled-components";
import { AboutUs } from "../../components/aboutUs";
import { ContactUs } from "../../components/contactUs";
import { OurBlog } from "../../components/ourBlog";

const Home = () => {
  return (
    <Container>
      <AboutUs />
      <ContactUs />
      <OurBlog />
      
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
