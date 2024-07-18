import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Slider1Block = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  background-position: center;
  background-size: cover;
  .slide {
    position: relative;
    display: flex;
    height: 500px;
    
  }
  .slick-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    div {
      display: inline-block;
      margin: 0 5px;
      button {
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
        text-indent: -9999px;
        overflow: hidden;
      }
      &.slick-active {
        button {
          background: black;
        }
      }
      &.slick-next { right:-30px } 
    }
  }
`;
const Slider1 = () => {
  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return <IoIosArrowDropleftCircle className={className} onClick={onClick} />;
  };
  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <IoIosArrowDroprightCircle className={className} onClick={onClick} />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider1Block>
      <div>
        <Slider {...settings}>
          <div className="slide slide1">
            <img src="./assets/img/image1.jpg"width={600} height={500}/>
          </div>
          <div className="slide slide2">
            <img src="./assets/img/image2.jpg"width={600} height={500}/>
          </div>
        </Slider>
      </div>
    </Slider1Block>
  );
};

export default Slider1;
