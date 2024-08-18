import React from "react";
import Image from "next/image";
import Rocket from "@/assets/images/general/landing-page/rocket.svg";
import { AgenciesSlider } from "./agencies-slider";

const SpaceAgencies = () => {
  /** Desktop View */
  const desktopView = () => {
    return (
      <div className=" TabletScreen:hidden MobileScreen:hidden flex flex-row gap-[36px] mx-[8.06%]">
        <div className="lg:w-1/2 w-full text-center">
          <AgenciesSlider />
        </div>
        <div className="lg:w-1/2 w-full mb-[20%] mt-[3%] ml-[2rem]">
          <h1 className="font-[700] text-[42px] text-hackathone-font-rocket-red my-2 pb-[0.5rem]">
            Space Agencies
          </h1>
          <div className="mr-[3rem]">
            <p className="font-hackathoneCabinetGrotesk text-[18px] leading-[1.8rem] text-left">
              In <span className="text-hackathone-font-rocket-red font-[600]">2024</span>, NASA collaborated with even more <span className="text-hackathone-font-rocket-red font-[600]">space agency partners</span> to bring the largest annual global hackathon to communities around the world! These space agency partners, along with NASA’s engineers at the <span className="text-hackathone-font-rocket-red font-[600]">Earth Science Division</span>, came up with <span className="text-hackathone-font-rocket-red font-[600]">innovative problem statements</span> (literally out of this world).
            </p><br />
            <p className="font-hackathoneCabinetGrotesk text-[18px] leading-[1.8rem] text-left pt-[0.5rem]">
              They provide access to this data and other resources around <span className="text-hackathone-font-rocket-red font-[600]">Earth Observations</span> for solving the <span className="text-hackathone-font-rocket-red font-[600]">challenges.</span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  /** Tablet View */
  const tabletView = () => {
    return (
      <div className="DesktopScreen:hidden MobileScreen:hidden flex flex-col items-center justify-center gap-[36px] mx-[4.06%]">
        <div className="w-full mt-[3%]">
          <h1 className="font-[700] text-[42px] text-hackathone-font-rocket-red my-2">
            Space Agencies
          </h1>
          <p className="font-hackathoneCabinetGrotesk font-[600] text-[18px] leading-[30.57px] pr-[12.7%]">
            In{" "}
            <span className="text-hackathone-font-rocket-red font-[600]">
              2024
            </span>
            , NASA collaborated with even more{" "}
            <span className="text-hackathone-font-rocket-red font-[600]">
              space agency partners
            </span>{" "}
            to bring the largest annual global hackathon to communities around
            the world! These space agency partners , along with NASA’s engineers
            at the{" "}
            <span className="text-hackathone-font-rocket-red font-[600]">
              Earth Science Division
            </span>
            , came up with{" "}
            <span className="text-hackathone-font-rocket-red font-[600]">
              innovative problem statements
            </span>{" "}
            (literally out of this world).
          </p><br />
          <p className="font-hackathoneCabinetGrotesk text-[18px] font-[600] leading-[1.8rem] text-left pt-[0.5rem]">
            They provide access to this data and other resources around <span className="text-hackathone-font-rocket-red font-[600]">Earth Observations</span> for solving the <span className="text-hackathone-font-rocket-red font-[600]">challenges.</span>
          </p>
        </div>
        <div className="w-full mb-[20%]">
          <AgenciesSlider />
        </div>
      </div>
    );
  };

  /** Mobile View */
  const mobileView = () => {
    return (
      <div className="DesktopScreen:hidden TabletScreen:hidden flex flex-col items-center justify-center mx-[1.2rem]">
        <div className="w-full mt-[3%]">
          <h1 className="font-[800] text-[30.99px] leading-[44.62px] text-hackathone-font-rocket-red font-hackathoneCabinetGrotesk my-2 pb-[0.5rem]">
            Space Agencies
          </h1>
        </div>
        <p className="font-hackathoneCabinetGrotesk text-slate-50 font-[500] text-[16px] leading-[30.57px] pr-[8.7%]">
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
          (literally out of this world).
        </p><br />
        <p className="font-hackathoneCabinetGrotesk text-slate-50 font-[500] text-[16px] leading-[30.57px] pr-[8.7%] mb-[2rem]">They provide access to this data and
          other resources around <span className="text-hackathone-font-rocket-red font-[500]">Earth Observations</span> for solving the{" "}
          <span className="text-hackathone-font-rocket-red font-[500]">
            challenges
          </span>
        </p>
        <div className="w-full mb-[20%]">
          <AgenciesSlider />
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
