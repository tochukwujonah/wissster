import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { swirl, customerService } from "../../assets";

import { Button } from "../button";

const LetsConnect = () => {
  return (
    <Container>
      <LetsWork>
        <h5>We're available</h5>
        <h3>Lets get to work</h3>
        <Button filled bgColor={colors.yellow} noIcon text={"Contact us"} />
      </LetsWork>

      <img src={customerService} alt="" />
    </Container>
  );
};

const Container = styled.section`
  width: 1080px;
  max-width: 100%;
  padding: 45px 50px;
  background-image: url(${swirl});
  background: linear-gradient(120.14deg, #6201c6 0%, #180641 100%);
  display: flex;
  justify-content: space-between;
  margin: 55px auto;
  position: relative;
  isolation: isolate;

  & > img {
    position: absolute;
    right: 10%;
    top: 0;
    z-index: -1;
    height: 100%;
  }
`;

const LetsWork = styled.div`
  & > h3 {
    margin-bottom: 30px;
    font-size: clamp(2.5rem, 2.5vw, 4rem);
  }

  & > h5 {
    margin-bottom: 24px;
    font-size: clamp(1.7rem, 1.5vw, 2rem);
  }
`;

export { LetsConnect };
