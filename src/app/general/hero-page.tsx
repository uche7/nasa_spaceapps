"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "@/assets/images/general/landing-page/hero_icon.png";
import RegisterGIF from "@/assets/images/general/landing-page/register.gif";
import CountDownPage from "./count-down-page";


const targetDate = "2024-10-04T18:00:00";
const HeroPage = () => {
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
          <CountDownPage targetDate={targetDate} />
          <div className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[65.08px] leading-[73.26px]">
            <p><span className="text-white">Welcome To</span> HackAth<span className="text-white">l</span>on<span className="text-white">e</span> '24</p>
          </div>
          <div className="mx-[10rem] text-[24px] leading-[36.57px]">
            <p className="mt-[13.3px] font-hackathoneSFProDisplay font-normal  text-white">
              The <span className="font-extrabold text-hackathone-font-rocket-red ">NASA Space Apps Athlone</span> is here. <br /> Join the marathon of problem-solving from<span className="font-extrabold text-hackathone-font-rocket-red "> October 4 to 6, 2024</span>
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
                    "https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/athlone/",
                    "_blank"
                  )
                }
                title="Register Here"
                className="bg-hackathone-font-rocket-red mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-full h-[44.31px] border-2 border-transparent transition-colors duration-300 ease-in-out"
              >
                <p className="mr-[7px] font-bold text-[16px] leading-[18.28px] font-sefarvestCabinetGrotesk text-black transition-all duration-500 ease-in-out hover:text-hackathone-font-rocket-red">
                  Register Here
                </p>
              </motion.button>

              {/* GIF Popup (controlled by isHovered state) **Remove after event concludes*/}
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
              )}
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
                  `${window.location.origin}/moreinfo`,
                  "_blank"
                )
              }
              title="Click Here To See More Info"
              className="bg-transparent mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[18.7%]  h-[44.31px] border-2 border-bg-hackathone-font-rocket-red transition-colors duration-300 ease-in-out"
            >
              <p className="mr-[7px] font-bold text-[16px] leading-[18.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red transition-all duration-500 ease-in-out">
                More Info
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
          <CountDownPage targetDate={targetDate} />
          <div className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[3.5rem] leading-[4rem]">
            <p><span className="text-white">Welcome To</span> HackAth<span className="text-white">l</span>on<span className="text-white">e</span> '24</p>
          </div>
          <div className="px-[10%] text-[20px] leading-[28.57px]">
            <p className="mt-[13.3px] font-hackathoneSFProDisplay font-normal  text-white">
              The <span className="font-extrabold text-hackathone-font-rocket-red ">NASA Space Apps Athlone</span> is here.<br /> Join the marathon of problem-solving from<span className="font-extrabold text-hackathone-font-rocket-red "> October 4 to 6, 2024</span>
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
                  "https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/athlone/",
                  "_blank"
                )
              }
              title=" Register Here"
              className="bg-hackathone-font-rocket-red mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[30%] h-[44.31px] border-2 border-transparent transition-colors duration-300 ease-in-out"
            >
              <p className="mr-[7px] font-bold text-[16.13px] leading-[16.28px] font-sefarvestCabinetGrotesk text-black transition-all duration-500 ease-in-out hover:text-hackathone-font-rocket-red">
                Register Here
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
                window.open(`${window.location.origin}/moreinfo`, "_blank")
              }
              title="Click Here To See More Info"
              className="bg-transparent mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[30%] h-[44.31px] border-2 border-bg-hackathone-font-rocket-red transition-colors duration-300 ease-in-out"
            >
              <p className="mr-[7px] font-bold text-[16.13px] leading-[16.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red transition-all duration-500 ease-in-out">
                More Info
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
          <div className="mt-[1.5rem]">
            <CountDownPage targetDate={targetDate} />
          </div>
          <div className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[3rem] leading-[51.26px]">
            <p><span className="text-white">Welcome To</span> HackAth<span className="text-white">l</span>on<span className="text-white">e</span> '24</p>
          </div>
          <div className="text-[1rem] leading-[24.57px]">
            <p className="mt-[13.3px] font-hackathoneSFProDisplay font-[500] text-white">
              The <span className="font-extrabold text-hackathone-font-rocket-red ">NASA Space Apps Athlone</span><br /> is here. Join the marathon of problem-solving from<span className="font-extrabold text-hackathone-font-rocket-red "> October 4 to 6, 2024</span>
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
                  "https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/athlone/",
                  "_blank"
                )
              }
              title=" Register Here"
              className="bg-hackathone-font-rocket-red mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[0.5rem] w-[60%] h-[44.31px] border-2 border-transparent transition-colors duration-300 ease-in-out"
            >
              <p className="mr-[7px] font-bold text-[16px] leading-[16.28px] font-sefarvestCabinetGrotesk text-black">
                Register Here
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
                window.open(`${window.location.origin}/moreinfo`, "_blank")
              }
              title="Click Here To See More Info"
              className="bg-transparent mt-[1rem] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[60%] h-[44.31px] border-2 border-bg-hackathone-font-rocket-red transition-colors duration-300 ease-in-out"
            >
              <p className="mr-[7px] font-bold text-[16px] leading-[16.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red transition-all duration-150 ease-out">
                More Info
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
