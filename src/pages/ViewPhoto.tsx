import Slider from "react-slick";
import { Settings } from "react-slick";
import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};
const ViewPhoto: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,

    cssEase: "ease-in-out",
    accessibility: true, // Enables arrow key navigation
    focusOnSelect: true, // Focuses the selected slide
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider
      {...settings}
      className="flex border-2 rounded my-28 w-7/12 mx-auto max-w-md:w-10/12 max-w-sm:w-full"
    >
      <img
        src="https://t4.ftcdn.net/jpg/04/14/13/63/360_F_414136392_1HxAobZWtcgc5yuhUL05JNUwIQc9Ab41.jpg"
        className=""
        alt="image1"
      />
      <img
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        alt="image2"
      />
    </Slider>
  );
};

export default ViewPhoto;
