import React from "react";
import styled from "styled-components";
import { 
  thebrand3, 
  theCreamBrand, 
  theOrangeBrand,
  productpackaging1,
  productpackaging2,
  productpackaging3,
  productpackaging4,
  brandslide1,
  brandslide2,
  brandslide3,
  brandslide4,
  promoslide1,
  promoslide2,
  promoslide3,
  promoslide4,
 } from "../../assets";
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
              Images={[brandslide1, brandslide2, brandslide3, brandslide4]}
            />
          </SliderWrap>
          <SliderWrap>
            <TestSlider Images={[promoslide1, promoslide2, promoslide3, promoslide4]} />
          </SliderWrap>
        </div>
        <div>
          <SliderWrap>
            <TestSlider Images={[productpackaging1, productpackaging2, productpackaging3, productpackaging4]} />
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
    @media (max-width: 1115px) {
      flex-direction: column;
      width: 90%;
      margin: 0 auto;
    }
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
