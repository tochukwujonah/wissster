import React, { Component } from "react";
import Slider from "react-slick";

import { 
    theOrangeBrand,
    theCreamBrand, 
} from '../../assets';


class TestSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
          <div
            style={{
              backgroundColor: "#ddd",
              borderRadius: "10px",
              padding: "10px"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "30px",
              color: "blue",
              border: "1px blue solid"
            }}
          >
            {i + 1}
          </div>
        )
      };
      return (
        <div>
          
          <Slider {...settings}>
            <div>
              <img src={theCreamBrand} alt="" />
            </div>
            <div>
                <img src={theOrangeBrand} alt="" />
            </div>
            <div>
                <img src={theCreamBrand} alt="" />
            </div>
            <div>
                <img src={theOrangeBrand} alt="" />
            </div>
            
          </Slider>
        </div>
      );
    }
  }








// const TestSlider = () => {
//   return (
//     <div>TestSlider</div>
//   )
// }

export {TestSlider}