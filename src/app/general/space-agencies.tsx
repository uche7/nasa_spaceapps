import React from "react";
import Image from "next/image";
import Rocket from "@/assets/images/general/landing-page/rocket.svg";
import { AgenciesSlider } from "./agencies-slider";

const SpaceAgencies = () => {
  /** Desktop View */
  const desktopView = () => {
    return (
      <div className=" TabletScreen:hidden MobileScreen:hidden flex flex-row gap-[36px] mx-[8.34%]">
        <div className="lg:w-1/2 w-full text-center">
          <AgenciesSlider />
        </div>
        <div className="lg:w-1/2 w-full mb-[20%] mt-[3%] ml-[2rem]">
          <h1 className="font-[700] text-[42px] text-hackathone-font-rocket-red my-2 pb-[0.5rem]">
            SPACE AGENCIES
          </h1>
          <div className="mr-[3rem]">
            <p className="font-hackathoneCabinetGrotesk text-[18px] leading-[1.8rem] text-left">
              In 2024, NASA collaborated with even more space agency partners to bring the largest annual global hackathon to communities around the world! These space agency partners, along with NASA’s engineers at the Earth Science Division, came up with innovative problem statements (literally out of this world).
            </p><br />
            <p className="font-hackathoneCabinetGrotesk text-[18px] leading-[1.8rem] text-left pt-[0.5rem]">
              They provide access to this data and other resources around Earth Observations for solving the challenges.
            </p>
          </div>
        </div>
      </div>
    );
  };

  /** Tablet View */
  const tabletView = () => {
    return (
      <div className="DesktopScreen:hidden MobileScreen:hidden flex flex-col items-center justify-center gap-[36px] mx-[4.34%]">
        <div>
          <h1 className="flex flex-col items-center justify-center text-hackathone-font-rocket-red">
            SPACE AGENCIES
          </h1>
          <Image src={Rocket} width={1000} alt={"Dev Team Icon"}></Image>
        </div>
        <div className="">
          <p className="font-hackathoneCabinetGrotesk font-[400] text-[26px] leading-[223.34%]">
            In{" "}
            <span className="text-hackathone-font-rocket-red font-[500]">
              2024
            </span>
            , NASA collaborated with even more{" "}
            <span className="text-hackathone-font-rocket-red font-[500]">
              space agency partners
            </span>{" "}
            to bring the largest annual global hackathon to communities around
            the world! These space agency partners , along with NASA’s engineers
            at the{" "}
            <span className="text-hackathone-font-rocket-red font-[500]">
              Earth Science Division
            </span>
            , came up with{" "}
            <span className="text-hackathone-font-rocket-red font-[500]">
              innovative problem statements
            </span>{" "}
            (literally out of this world). They provide access to this data and
            other resources around Earth Observations for solving the{" "}
            <span className="text-hackathone-font-rocket-red font-[500]">
              challenges
            </span>
            .
          </p>
        </div>
      </div>
    );
  };

  /** Mobile View */
  const mobileView = () => {
    return (
      <div className="DesktopScreen:hidden TabletScreen:hidden flex flex-col items-center justify-center gap-[36px] mx-[4.34%]">
        <div>
          <h1 className="flex flex-col items-center justify-center text-hackathone-font-rocket-red">
            SPACE AGENCIES
          </h1>
          <Image src={Rocket} width={1000} alt={"Dev Team Icon"}></Image>
        </div>
        <div className="">
          <p className="font-hackathoneCabinetGrotesk font-[400] text-[24px] leading-[173.34%]">
            In{" "}
            <span className="text-hackathone-font-rocket-red font-[500]">
              2024
            </span>
            , NASA collaborated with even more{" "}
            <span className="text-hackathone-font-rocket-red font-[500]">
              space agency partners
            </span>{" "}
            to bring the largest annual global hackathon to communities around
            the world! These space agency partners , along with NASA’s engineers
            at the{" "}
            <span className="text-hackathone-font-rocket-red font-[500]">
              Earth Science Division
            </span>
            , came up with{" "}
            <span className="text-hackathone-font-rocket-red font-[500]">
              innovative problem statements
            </span>{" "}
            (literally out of this world). They provide access to this data and
            other resources around Earth Observations for solving the{" "}
            <span className="text-hackathone-font-rocket-red font-[500]">
              challenges
            </span>
            .
          </p>
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

export default SpaceAgencies;
