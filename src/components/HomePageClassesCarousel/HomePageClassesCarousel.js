import React from "react";
import Slider from "react-slick";
import { dataHomePageClassesCarousel } from "./dataHomePageClassesCarousel";
import "./HomePageClassesCarousel.css";

export const HomePageClassesCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        className: "myCustomCarousel slider variable-width",
        responsive: [
          {
            breakpoint: 700,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,

            dots: false,
            infinite: true,
            arrows: false,
            className: "myCustomCarousel",
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            infinite: true,
            arrows: false,
            className: "myCustomCarousel",
            }
          }
        ]
    };
    
    return(
        <Slider {...settings}>
        {dataHomePageClassesCarousel.map((slide) => {
          return (
            <div className="slider" key={slide.id}>
                <img className="classPhoto" src={slide.image} alt="class" />
              <p className="slideText">{ slide.name }</p>
            </div>
          );
        })}
      </Slider>
    )
}