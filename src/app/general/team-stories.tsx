import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Stories } from "./general.dto";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { easing } from "@mui/material";

const TeamStories = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    adaptiveHeight: true,
    customPaging: (i: any) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: "transparent", // Transparent background
          border: "1px solid #FFF", // White border
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
    ),
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          height: "20px",
          top: "5vh",
          bottom: "0px",
          transform: "translateX(-50%)",
          marginLeft: "78.5vw",
          padding: "0px",
          listStyle: "none",
        }}
      >
        <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex" }}>
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 mx-[8.43%]">
      <h1 className="font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red font-extrabold lg:text-[42px] sm:text-3xl text-[42px]">
        Hackathon Unplugged: Team Stories
      </h1>
      <p className="font-hackathoneSFProDisplay lg:text-xl sm:text-lg text-base mt-4">
        Let's hear what the Teams have to say
      </p>
      <div className="relative overflow-hidden rounded-lg shadow-md mt-8">
        <Slider {...settings}>
          {Stories.map((item, index) => (
            <div key={index} className="items-stretch !flex !flex-row h-auto">
              <div className="lg:w-1/2  w-full items-center justify-center">
                <Image
                  className="cursor-pointer rounded-2xl max-w-[100%] max-h-[560px]"
                  src={item.img}
                  width={500}
                  height={450}
                  alt={"Team Image"}
                />
              </div>
              <div className="lg:w-1/2 w-full text-left mt-4 text-left ml-[2.5rem] lg:ml-[2.5rem] md:ml-[2.5rem]">
                <p className="font-hackathoneCabinetGrotesk sm:text-lg text-sm max-w-prose pt-[3.5rem]">
                  {item.text}
                </p>
                <p className="font-bold text-[22px] leading-[1.5rem] text-hackathone-font-rocket-red pt-[3rem]">
                  {item.author}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamStories;
