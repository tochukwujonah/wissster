import React from "react";
import styled from "styled-components";
import { thebrand3, theCreamBrand, theOrangeBrand } from "../../assets";
import { colors } from "../../colors";
import { Button, Hero, TestSlider } from "../../components";

const Home = () => {
  return (
    <Container>
      <Hero />

      <SlidersWrap>
        <div>
          <SliderWrap>
            <TestSlider
              Images={[theCreamBrand, theOrangeBrand, theOrangeBrand]}
            />
          </SliderWrap>
          <SliderWrap>
            <TestSlider Images={[theOrangeBrand, theCreamBrand]} />
          </SliderWrap>
        </div>
        <div>
          <SliderWrap>
            <TestSlider Images={[thebrand3, thebrand3, theCreamBrand]} />
          </SliderWrap>
        </div>
      </SlidersWrap>
      <SlidersWrap>
        <div
          style={{
            margin: "0 auto",
            marginBottom: "3rem",
            width: "fit-content",
          }}
        >
          <Button
            text={"See more projects"}
            bgColor={colors.yellow}
            filled
            noIcon
          />
        </div>
      </SlidersWrap>
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
const SlidersWrap = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 1115px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    &:last-of-type {
      & > div {
        margin-top: 1.3rem;
        max-width: 100%;
        width: 100%;
      }
    }
  }
`;
const SliderWrap = styled.div`
  height: 677px;
  width: 100%;
  max-width: 550px;
`;
