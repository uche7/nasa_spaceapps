"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "@/assets/images/general/landing-page/hero_icon.png";
import RegisterGIF from "@/assets/images/general/landing-page/register.gif";
import CountDownPage from "./count-down-page";
import { winners } from "@/app/general/general.dto"


const targetDate = "2024-10-04T18:00:00";
const HeroPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    console.log('Hover state:', isHovered);
  }, [isHovered]);
  /** Desktop View */
  const desktopView = () => {

    return (
      <div className="TabletScreen:hidden MobileScreen:hidden flex flex-col justify-center items-center text-center mx-[8.06%] mt-[4rem]">
        <div className="w-full mb-[10%]">
          <motion.button
            className="mb-[2rem]"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            <Image width={250} src={HeroImage} alt="Hero Image" />
          </motion.button>
          <div className="flex justify-center items-center relative my-12">
            {winners.map((item, index) => (
              <div
                key={index}
                className={`text-center group relative transition-transform duration-300 ${hoveredIndex === index || (hoveredIndex === null && item.place === "1st")
                  ? "z-10"
                  : "z-0"
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform:
                    index === 0
                      ? "translateX(25%)"
                      : index === 2
                        ? "translateX(-25%)"
                        : index === 1
                          ? "translateY(-15%)"
                          : "translateX(0)",
                }}
              >
                {/* Hovered place text */}
                <div
                  className={`text-[5rem] font-bold text-hackathone-font-rocket-red opacity-0 group-hover:opacity-100 ${item.place === "1st"
                    ? "absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    : item.place === "3rd"
                      ? "absolute top-0 right-0"
                      : "absolute top-0 left-0"
                    }`}
                >
                  {item.place}
                </div>

                {/* Image container */}
                <div className="w-80 h-80 rounded-full overflow-hidden flex justify-center items-center bg-gray-200 group-hover:bg-gray-300 transition-transform duration-300">
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Team name */}
                <div className="mt-2 text-lg font-semibold">{item.name}</div>
              </div>
            ))}
          </div>
          <div className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[65.08px] leading-[73.26px]">
            <p>Winners of HackAth<span className="text-white">l</span>on<span className="text-white">e</span>’24</p>
          </div>
          <div className="mx-[10rem] text-[24px] leading-[36.57px]">
            <p className="mt-[13.3px] font-hackathoneSFProDisplay font-normal  text-white">
              NASA Space Apps Athlone was a huge success! <span className="font-extrabold text-hackathone-font-rocket-red ">210+ participations</span> with <br /> <span className="font-extrabold text-hackathone-font-rocket-red ">22 global submissions </span>and <span className="font-extrabold text-hackathone-font-rocket-red "> 3 global nominations.</span>
            </p>
          </div>
          <div className="flex flex-row justify-center gap-[32px]">
            <div className="relative w-[18.7%] inline-block">
              {/* Button */}
              <motion.button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 0, 0, 0.8)",
                  borderColor: "white",
                  rotate: -3,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 200,
                    repeat: Infinity,
                    repeatType: "reverse",
                    backgroundColor: {
                      duration: 0.1, // Faster background color transition
                    },
                  },
                }}
                whileTap={{
                  scale: 0.9,
                  borderWidth: "4px",
                  borderColor: "white",
                }}
                onClick={() =>
                  window.open(
                    "https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/athlone/?tab=teams",
                    "_blank"
                  )
                }
                title="View Teams & Projects"
                className="bg-hackathone-font-rocket-red mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-full h-[44.31px] border-2 border-transparent transition-colors duration-300 ease-in-out"
              >
                <p className="mr-[7px] font-bold text-[16px] leading-[18.28px] font-sefarvestCabinetGrotesk text-black transition-all duration-500 ease-in-out hover:text-hackathone-font-rocket-red">
                  View Teams & Projects
                </p>
              </motion.button>

              {/* GIF Popup (controlled by isHovered state) **Remove after event concludes
              {isHovered && (
                <>
                  <Image
                    src={RegisterGIF}
                    width={500}
                    alt="GIF"
                    className="hidden 2xl:block absolute min-w-[450px] top-[30%] -left-[200%] -translate-y-1/2 transition-all duration-300 border-2 rounded-xl"
                  />

                  <Image
                    src={RegisterGIF}
                    width={300}
                    alt="GIF"
                    className="hidden xl:block 2xl:hidden absolute min-w-[345px] top-[30%] -left-[200%] -translate-y-1/2 transition-all duration-300 border-2 rounded-xl"
                  />
                </>
              )} */}
            </div>

            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
                backgroundColor: "rgba(255, 0, 0, 0.8)",
                borderColor: "bg-hackathone-font-rocket-red",
              }}
              whileTap={{
                scale: 0.9,
                borderWidth: "4px",
                borderColor: "white",
              }}
              onClick={() =>
                window.open(
                  `https://66b8783ce930a118fc45939c--voluble-conkies-fba672.netlify.app/`,
                  "_blank"
                )
              }
              title="Checkout our 2023 Event"
              className="bg-transparent mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[18.7%]  h-[44.31px] border-2 border-bg-hackathone-font-rocket-red transition-colors duration-300 ease-in-out"
            >
              <p className="mr-[7px] font-bold text-[16px] leading-[18.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red transition-all duration-500 ease-in-out">
                Hackathlone 2023
              </p>
            </motion.button>
          </div>
        </div>
      </div >
    );
  };

  /** Tablet View */
  const tabletView = () => {
    return (
      <div className="DesktopScreen:hidden MobileScreen:hidden flex flex-col items-center justify-center text-center mt-[2.5rem] px-[6.94%]">
        <div className="w-full mb-[10%]">
          <motion.button
            className="mb-[2rem]"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            <Image unoptimized width={250} src={HeroImage} alt="Hero Image" />
          </motion.button>
          <div className="flex justify-center items-center relative my-8">
            {winners.map((item, index) => (
              <div
                key={index}
                className={`text-center group relative transition-transform duration-300 ${hoveredIndex === index || (hoveredIndex === null && item.place === "1st")
                  ? "z-10"
                  : "z-0"
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform:
                    index === 0
                      ? "translateX(25%)"
                      : index === 2
                        ? "translateX(-25%)"
                        : index === 1
                          ? "translateY(-15%)"
                          : "translateX(0)",
                }}
              >
                {/* Hovered place text */}
                <div
                  className={`text-[3.5rem] font-bold text-hackathone-font-rocket-red ${item.place === "1st"
                    ? "absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    : item.place === "3rd"
                      ? "absolute top-0 right-0"
                      : "absolute top-0 left-0"
                    }`}
                >
                  {item.place}
                </div>

                {/* Image container */}
                <div className="w-56 h-56 rounded-full overflow-hidden flex justify-center items-center bg-gray-200 group-hover:bg-gray-300 transition-transform duration-300">
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Team name */}
                <div className="mt-2 text-lg font-semibold">{item.name}</div>
              </div>
            ))}
          </div>
          <div className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[3.5rem] leading-[4rem]">
            <p>Winners of HackAth<span className="text-white">l</span>on<span className="text-white">e</span>’24</p>
          </div>
          <div className="px-[10%] text-[20px] leading-[28.57px]">
            <p className="mt-[13.3px] font-hackathoneSFProDisplay font-normal  text-white">
              NASA Space Apps Athlone was a huge success! <span className="font-extrabold text-hackathone-font-rocket-red ">210+ participations</span> with <span className="font-extrabold text-hackathone-font-rocket-red ">22 global submissions </span>and <span className="font-extrabold text-hackathone-font-rocket-red "> 3 global nominations.</span>
            </p>
          </div>
          <div className="flex flex-row justify-center gap-[16px]">
            <motion.button
              whileHover={{
                scale: 1.07,
                transition: { duration: 0.3 },
                backgroundColor: "rgba(255, 0, 0, 0.8)",
                borderColor: "white",
              }}
              whileTap={{
                scale: 0.9,
                borderWidth: "3px",
                borderColor: "white",
              }}
              onClick={() =>
                window.open(
                  "https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/athlone/?tab=teams",
                  "_blank"
                )
              }
              title="View Teams & Projects"
              className="bg-hackathone-font-rocket-red mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[30%] h-[44.31px] border-2 border-transparent transition-colors duration-300 ease-in-out"
            >
              <p className="mr-[7px] font-bold text-[16.13px] leading-[16.28px] font-sefarvestCabinetGrotesk text-black transition-all duration-500 ease-in-out hover:text-hackathone-font-rocket-red">
                View Teams & Projects
              </p>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.07,
                transition: { duration: 0.3 },
                backgroundColor: "rgba(255, 0, 0, 0.8)",
                borderColor: "white",
              }}
              whileTap={{
                scale: 0.9,
                borderWidth: "3px",
                borderColor: "white",
              }}
              onClick={() =>
                window.open(
                  `https://66b8783ce930a118fc45939c--voluble-conkies-fba672.netlify.app/`,
                  "_blank"
                )
              }
              title="Click Here To See More Info"
              className="bg-transparent mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[30%] h-[44.31px] border-2 border-bg-hackathone-font-rocket-red transition-colors duration-300 ease-in-out"
            >
              <p className="mr-[7px] font-bold text-[16.13px] leading-[16.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red transition-all duration-500 ease-in-out">
                Hackathlone 2023
              </p>
            </motion.button>
          </div>
        </div>
      </div>
    );
  };

  /** Mobile View */
  const mobileView = () => {
    return (
      <div className="DesktopScreen:hidden TabletScreen:hidden flex flex-col items-center justify-between mx-[1.2rem] mt-[4rem]">
        <div className="flex flex-col justify-center items-center text-center w-full px-[2rem]">
          <Image unoptimized src={HeroImage} alt="Hero Image" width={180} />
          <div className="flex justify-center items-center relative my-12">
            {winners.map((item, index) => (
              <div
                key={index}
                className={`text-center group relative transition-transform duration-300 ${hoveredIndex === index || (hoveredIndex === null && item.place === "1st")
                  ? "z-10"
                  : "z-0"
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform:
                    index === 0
                      ? "translateX(25%)"
                      : index === 2
                        ? "translateX(-25%)"
                        : index === 1
                          ? "translateY(-15%)"
                          : "translateX(0)",
                }}
              >
                {/* Hovered place text */}
                <div
                  className={`text-[2rem] font-bold text-hackathone-font-rocket-red ${item.place === "1st"
                    ? "absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    : item.place === "3rd"
                      ? "absolute top-0 right-0"
                      : "absolute top-0 left-0"
                    }`}
                >
                  {item.place}
                </div>

                {/* Image container */}
                <div className="w-36 h-36 rounded-full overflow-hidden flex justify-center items-center bg-gray-200 group-hover:bg-gray-300 transition-transform duration-300">
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Team name */}
                <div className="mt-2 text-sm font-semibold">{item.name}</div>
              </div>
            ))}
          </div>
          <div className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[3rem] leading-[51.26px]">
            <p>Winners of HackAth<span className="text-white">l</span>on<span className="text-white">e</span>’24</p>
          </div>
          <div className="text-[1rem] leading-[24.57px]">
            <p className="mt-[13.3px] font-hackathoneSFProDisplay font-[500] text-white">
              NASA Space Apps Athlone was a huge success! <span className="font-extrabold text-hackathone-font-rocket-red ">210+ participations</span> with <span className="font-extrabold text-hackathone-font-rocket-red ">22 global submissions </span>and <span className="font-extrabold text-hackathone-font-rocket-red "> 3 global nominations.</span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <motion.button
              whileHover={{
                scale: 1.07,
                transition: { duration: 0.3 },
                backgroundColor: "rgba(255, 0, 0, 0.8)",
                borderColor: "white",
              }}
              whileTap={{
                scale: 0.9,
                borderWidth: "3px",
                borderColor: "white",
              }}
              onClick={() =>
                window.open(
                  "https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/athlone/?tab=teams",
                  "_blank"
                )
              }
              title="View Teams & Projects"
              className="bg-hackathone-font-rocket-red mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[0.5rem] w-[60%] h-[44.31px] border-2 border-transparent transition-colors duration-300 ease-in-out"
            >
              <p className="mr-[7px] font-bold text-[16px] leading-[16.28px] font-sefarvestCabinetGrotesk text-black">
                View Teams & Projects
              </p>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.07,
                transition: { duration: 0.3 },
                backgroundColor: "rgba(255, 0, 0, 0.8)",
                borderColor: "white",
              }}
              whileTap={{
                scale: 0.9,
                borderWidth: "3px",
                borderColor: "white",
              }}
              onClick={() =>
                window.open(
                  `https://66b8783ce930a118fc45939c--voluble-conkies-fba672.netlify.app/`,
                  "_blank"
                )
              }
              title="Click Here To See More Info"
              className="bg-transparent mt-[1rem] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[60%] h-[44.31px] border-2 border-bg-hackathone-font-rocket-red transition-colors duration-300 ease-in-out"
            >
              <p className="mr-[7px] font-bold text-[16px] leading-[16.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red transition-all duration-150 ease-out">
                Hackathlone 2023
              </p>
            </motion.button>
          </div>
        </div>

      </div >
    );
  };

  return (
    <section>
      {desktopView()}
      {tabletView()}
      {mobileView()}
    </section>
  );
};

export default HeroPage;
