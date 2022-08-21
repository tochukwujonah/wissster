import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import { theOrangeBrand, theCreamBrand, thebrand3 } from "../../assets";
import { colors } from "../../colors";

const TestSlider = ({ Images = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: (
      <ArrowN className="ArrowN">
        <BsFillArrowRightCircleFill size={35} />
      </ArrowN>
    ),
    prevArrow: (
      <ArrowP className="ArrowP">
        <BsFillArrowLeftCircleFill size={35} />
      </ArrowP>
    ),
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <Wrap>
      <Slider {...settings}>
        {Images.map((brand, index) => (
          <ImageWrap key={index}>
            <img src={brand} alt="brand" />
          </ImageWrap>
        ))}
      </Slider>
    </Wrap>
  );
};

export { TestSlider };

const Wrap = styled.div`
  width: 100%;
  max-height: 100%;
  & .slick-dots {
    /* border: 1px solid red; */
    width: 90%;
    margin: 0 auto;
    padding: 0 !important;
    bottom: 100px !important;
    left: 5%;
    li {
      width: 44px;
      height: 11px;
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.4);

      &.slick-active {
        background-color: #fff;
      }
      button {
        opacity: 0;
        outline: 0;
        width: 100%;
        height: 100%;
        border: 0;
        background: transparent;
      }
    }
    @media (max-width: 768px) {
      bottom: 20px !important;
    }
  }
  & .slick-slider {
    & .slick-prev,
    & .slick-next {
      transition: all 0.3s ease-in-out;
      opacity: 0;
      outline: 0;
      width: 40px;
      height: 40px;
      color: #fff;

      &:before,
      &:before {
        display: none;
      }
    }
    &:hover {
      & .slick-prev,
      & .slick-next {
        transition: all 0.3s ease-in-out;
        opacity: 1;
        outline: 1;
      }
    }

    & .slick-slide {
      & > div {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  & > img {
    width: 100%;
    height: 100% !important;
    max-height: 677px !important;
    object-fit: cover;
  }
`;

const ArrowN = styled.div`
  /* display: none !important; */
  right: 50px;
  z-index: 9;
  width: 40px;
  height: 40px;
`;
const ArrowP = styled.div`
  /* display: none !important; */
  left: 50px;
  z-index: 9;
  width: 40px;
  height: 40px;
`;
