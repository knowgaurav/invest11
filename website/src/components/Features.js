import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import featureimage1 from "../assets/featureimage1.jpg";
import featureimage2 from "../assets/featureimage2.jpg";
import featureimage3 from "../assets/featureimage3.jpg";
import featureimage4 from "../assets/featureimage4.jpg";

const featureImages = [
  featureimage1,
  featureimage2,
  featureimage3,
  featureimage4,
];

const features = [
  "InvestingIQ scales down company profile to a personal level",
  "Each company is represented by a character with similar finances",
  "InvestingIQ flattens the learning curve to understand company portfolios by converting complex financial jargon into simple everyday words.",
  "InvestingIQ simplifies decision making while buying shares for people with a non-finance background.",
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: "linear",
};

const Features = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Slider {...settings}>
        {features.map((item, index) => {
          return (
            <div key={index}>
              <div className="grid grid-cols-2 gap-16">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://www.june.so/sidebar-icon.svg"
                      alt="icon"
                    />
                    <div className="font-semibold text-lg">
                      UNDERSTAND IN DETAIL
                    </div>
                  </div>
                  <div className="font-semibold text-3xl text-blue-500">
                    {item}
                  </div>
                </div>
                <img
                  src={featureImages[index]}
                  alt="features"
                  className="rounded-xl"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Features;
