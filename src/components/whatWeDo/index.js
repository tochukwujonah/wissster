import React from "react";
import {
  Container,
  InnerContainer,
  ServiceCard,
  IconWrapper,
  Icon,
  ServiceTitle,
  ServiceWrap,
} from "./styled";
const WhatWeDo = () => {
  return (
    <Container>
      <InnerContainer>
        <h3>What we do</h3>
        <ServiceWrap>
          <Service />
          <Service />
        </ServiceWrap>
      </InnerContainer>
    </Container>
  );
};

export { WhatWeDo };

const Service = () => {
  return (
    <ServiceCard>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <ServiceTitle>
        <h3>Brand Identity Designs</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, eget
          non a, metus eu aenean.{" "}
        </p>
      </ServiceTitle>
    </ServiceCard>
  );
};
