import React from "react";
import Slider from "react-slick";
import { Stories } from "./general.dto";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10">
      <h1 className="font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red font-extrabold text-center lg:text-4xl sm:text-3xl text-2xl">
        Hackathon Unplugged: Team Stories
      </h1>
      <p className="font-hackathoneSFProDisplay text-center lg:text-xl sm:text-lg text-base mt-2">
        Let's hear what the Teams have to say
      </p>
      <div className="relative lg:mx-[8.34%] overflow-hidden p-4 rounded-lg shadow-md mt-6">
        <Slider {...settings}>
          {Stories.map((item, index) => (
            <div key={index} className="text-center px-4">
              <p className="font-hackathoneCabinetGrotesk sm:text-lg text-sm mx-auto max-w-prose">
                {item.text}
              </p>
              <p className="font-bold text-[22px] leading-[1.5rem] text-hackathone-font-rocket-red mt-5" style={{ textShadow: '0 4px 6px rgba(234, 254, 7, 0.7)' }}>
                {item.author}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamStories;
