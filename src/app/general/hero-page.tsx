"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "@/assets/images/general/landing-page/spaceapps_Logo.png";

const HeroPage = () => {
  /** Desktop View */
  const desktopView = () => {
    return (
      <div className="TabletScreen:hidden MobileScreen:hidden flex items-center justify-between px-[6.94%] mt-[59.62px] mb-[81.79px] ">
        <div className="w-[35.46%]">
          <div className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[65.08px] leading-[73.26px]">
            <p className="text-white">Welcome To</p>
            <p>HackAth<span className="text-white">l</span>on<span className="text-white">e</span></p>
          </div>
          <div>
            <p className="mt-[13.3px] font-hackathoneSFProDisplay font-normal text-[18px] leading-[22.63px] text-slate-300">
              Join NASA space apps athlone from<span className="font-bold font-hackathoneCabinetGrotesk "> October 4 to 6</span>,  <span className="font-bold text-[18px] text-hackathone-font-rocket-red"> this year's theme is "The Sun Touches Everything". </span>
            </p>
          </div>
          <div className="flex flex-row gap-[16px]">
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
                backgroundColor: "rgba(255, 0, 0, 0.8)",
                borderColor: "white",
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
              className="bg-hackathone-font-rocket-red mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40.36%] h-[44.31px] border-2 border-transparent transition-colors duration-300 ease-in-out"
            >{/* Orignal bg :  bg-hackathone-background-dark-blue */}
              <p className="mr-[7px] font-bold text-[16px] leading-[18.28px] font-sefarvestCabinetGrotesk text-black transition-all duration-500 ease-in-out hover:text-hackathone-font-rocket-red">
                Register Here
              </p> {/*Original: text-[13.13px] leading-[16.28px]  text-hackathone-font-rocket-red */}
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
                backgroundColor: "rgba(255, 0, 0, 0.8)",
                borderColor: "white",
              }}
              whileTap={{
                scale: 0.9,
                borderWidth: "4px",
                borderColor: "white",
              }}
              onClick={() =>
                window.open(
                  "https://66b8783ce930a118fc45939c--voluble-conkies-fba672.netlify.app/",
                  "_blank"
                )
              }
              title="Hackathone 2023"
              className="bg-hackathone-font-rocket-red mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40.36%] h-[44.31px] border-2 border-transparent transition-colors duration-300 ease-in-out"
            >
              <p className="mr-[7px] font-bold text-[16px] leading-[18.28px] font-sefarvestCabinetGrotesk text-black transition-all duration-500 ease-in-out hover:text-hackathone-font-rocket-red">
                Hackathlone 2023
              </p>
            </motion.button>
          </div>
        </div>
        <div className="w-[50.49%]">
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            <Image unoptimized width={500} src={HeroImage} alt="Hero Image" />
          </motion.button>
        </div>
      </div>
    );
  };

  /** Tablet View */
  const tabletView = () => {
    return (
      <div className="DesktopScreen:hidden MobileScreen:hidden flex items-center justify-between mt-[36px] px-[6.94%]">
        <div className="flex justify-center w-full">
          <div>
            <div className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[56.08px] leading-[73.26px] flex flex-col items-center justify-center">
              <p>Welcome To</p>
              <p>HackAthlone</p>
            </div>
            <div className="flex items-center justify-center">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <Image
                  unoptimized
                  src={HeroImage}
                  width={500}
                  alt="Hero Image"
                />
              </motion.button>
            </div>
            <div className="">
              <div>
                <p className="mt-[28.3px] font-hackathoneSFProDisplay font-normal text-[18px] leading-[22.63px] text-slate-300">
                  Join Unique World Robotics for the <span className="font-bold text-[18px] text-hackathone-font-rocket-red">2024 NASA Space Apps Challenge </span>
                  on <span className="font-bold text-[18px] text-hackathone-font-rocket-red">October 4 to 6</span> as we celebrate this year&apos;s
                  theme of <span className="font-bold text-[18px] text-hackathone-font-rocket-red">
                    "The Sun Touches Everything"
                  </span>{" "} with NASA Heliophysics.
                </p>
              </div>
              <div className="flex flex-row gap-[16px]">
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
                  className="bg-hackathone-font-rocket-red mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40.36%] h-[44.31px] border-2 border-transparent transition-colors duration-300 ease-in-out"
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
                    window.open("https://www.hackathlone.com/", "_blank")
                  }
                  title="Hackathone 2023"
                  className="bg-hackathone-font-rocket-red mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40.36%] h-[44.31px] border-2 border-transparent transition-colors duration-300 ease-in-out"
                >
                  <p className="mr-[7px] font-bold text-[16.13px] leading-[16.28px] font-sefarvestCabinetGrotesk text-black transition-all duration-500 ease-in-out hover:text-hackathone-font-rocket-red">
                    Hackathone 2023
                  </p>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /** Mobile View */
  const mobileView = () => {
    return (
      <div className="DesktopScreen:hidden TabletScreen:hidden flex items-center justify-between ">
        <div className="flex justify-center w-full">
          <div>
            <div className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[45.8px] leading-[56.79px] mt-[24px] px-[5.58%]">
              <p>Welcome To</p>
              <p>HackAthlone</p>
              <div>
                <p className="mt-[28.3px] font-hackathoneSFProDisplay font-normal text-[16px] leading-[20.63px] text-slate-300">
                  Join Unique World Robotics for the <span className="font-bold text-[16px] text-hackathone-font-rocket-red">2024 NASA Space Apps Challenge </span>
                  on <span className="font-bold text-[16px] text-hackathone-font-rocket-red">October 4 to 6</span> as we celebrate this year&apos;s
                  theme of <span className="font-bold text-[16px] text-hackathone-font-rocket-red">
                    "The Sun Touches Everything"
                  </span>{" "} with NASA Heliophysics.
                </p>
              </div>
              <div className="flex flex-row gap-[16px]">
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
                  className="bg-hackathone-font-rocket-red mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40.36%] h-[44.31px] border-2 border-transparent transition-colors duration-300 ease-in-out"
                >
                  <p className="mr-[7px] font-bold text-[14px] leading-[16.28px] font-sefarvestCabinetGrotesk text-black transition-all duration-500 ease-in-out hover:text-hackathone-font-rocket-red">
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
                    window.open("https://www.hackathlone.com/", "_blank")
                  }
                  title="Hackathone 2023"
                  className="bg-hackathone-font-rocket-red mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40.36%] h-[44.31px] border-2 border-transparent transition-colors duration-300 ease-in-out"
                >
                  <p className="mr-[7px] font-bold text-[14px] leading-[16.28px] font-sefarvestCabinetGrotesk text-black transition-all duration-500 ease-in-out hover:text-hackathone-font-rocket-red">
                    Hackathone 2023
                  </p>
                </motion.button>
              </div>
            </div>
            <div className="flex items-center justify-center mt-[48.92px] mb-[90.79px]">
              <Image unoptimized src={HeroImage} alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>
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
