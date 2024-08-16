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
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                transform: "translateX(-50%)",
                marginLeft: "78vw",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 768,
        settings: {
          speed: 1500,
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                bottom: "4vh  ",
                marginLeft: "28vw",
                padding: "0px",
                listStyle: "none",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 480,
        settings: {
          speed: 1500,
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                bottom: "4vh  ",
                marginLeft: "22vw",
                padding: "0px",
                listStyle: "none",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 300,
        settings: {
          dots: false
        }
      }
    ],
    customPaging: (i: any) => (
      <div
        style={{
          width: "10px",
          height: "10px",
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
          top: "0",
          bottom: "0px",
          transform: "translateX(-50%)",
          marginLeft: "78vw",
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
    <div className="px-4 sm:px-6 lg:px-10 MobileScreen:mx-[1.2rem] mx-[8.06%] my-[6rem]">
      <h1 className="font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red font-extrabold lg:text-[42px] sm:text-3xl text-[42px] MobileScreen:text-[30.99px]">
        Hackathon Unplugged: Team Stories
      </h1>
      <p className="font-hackathoneSFProDisplay lg:text-xl sm:text-lg text-base mt-4">
        Let's hear what the Teams have to say
      </p>
      <div className="relative overflow-hidden rounded-lg shadow-md mt-8">
        <Slider {...settings}>
          {Stories.map((item, index) => (
            <div key={index} className="items-stretch !flex md:!flex-row !flex-col h-auto items-center justify-center">
              <div className="md:w-1/2 w-full justify-content">
                <Image
                  className="cursor-pointer rounded-2xl max-w-[100%] max-h-[560px]"
                  src={item.img}
                  width={500}
                  height={450}
                  alt={"Team Image"}
                  objectFit="cover"
                />
              </div>
              <div className="md:w-1/2 w-full md:mt-4 md:text-left md:ml-[2.5rem] xl:ml-[2rem] 2xl:ml-[1rem] ml-[1rem] w-auto pt-[2rem] MobileScreen:pr-[1rem] md:pt-[0px] pr-[1rem] text-center ">
                <p className="font-hackathoneCabinetGrotesk text-lg max-w-prose md:pt-[2.5rem] sm:pt-[2rem]">
                  {item.text}
                </p>
                <p className="font-bold text-[22px] leading-[1.5rem] text-hackathone-font-rocket-red pt-[3rem] text-center md:text-left">
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
