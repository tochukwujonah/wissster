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

import {
  penTool,
  penAdd
} from '../../assets/index'

const WhatWeDo = () => {
  return (
    <Container>
      <InnerContainer>
        <h3>What we do</h3>
        <ServiceWrap>
          <Service pentool />
          <ServiceTwo penadd />
        </ServiceWrap>
      </InnerContainer>
    </Container>
  );
};

export { WhatWeDo };

const Service = ({penadd, pentool}) => {
  return (
    <ServiceCard>
      <IconWrapper>
        {penadd
        ?
          <Icon src={penAdd} alt='pen add tool' />
        :penTool
          ? <Icon src={penTool} alt='pen tool' />
          :null
          
        }
        
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


const ServiceTwo = ({penadd, pentool}) => {
  return (
    <ServiceCard>
      <IconWrapper>
        {penadd
        ?
          <Icon src={penAdd} alt='pen add tool' />
        :penTool
          ? <Icon src={penTool} alt='pen tool' />
          :null
          
        }
        
      </IconWrapper>
      <ServiceTitle>
        <h3>Promotional Designs</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, eget
          non a, metus eu aenean.{" "}
        </p>
      </ServiceTitle>
    </ServiceCard>
  );
};
