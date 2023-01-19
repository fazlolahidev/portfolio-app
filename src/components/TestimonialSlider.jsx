import React, { useRef, useState } from "react";

//* Slick Slider *//
import Slider from "react-slick";

//* Conponent  *//
import SlideContent from "./SlideContent";

//* Data *//
import { sliderData } from "../constant/slider-data";

const TestimonialSlider = () => {
  // Create a ref for the Slider component and assign it to the sliderRef variable
  const sliderRef = useRef(null);

  // Set the active pag for active className
  const [active, setActive] = useState(0);

  const settings = {
    // Other settings go here...
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="active:cursor-grabbing mt-5">
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((item, index) => {
          return <SlideContent data={item} key={index} />;
        })}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
