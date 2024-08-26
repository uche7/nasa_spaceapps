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
              In 2024, <span className="text-hackathone-font-rocket-red font-[600]">NASA</span> is teaming up with even more space agency partners to bring the largest annual global hackathon to communities worldwide! These space agencies, along with NASA’s engineers at the <span className="text-hackathone-font-rocket-red font-[600]">Earth Science Division</span>, have crafted innovative problem statements that are literally out of this world. They provide access to data and other resources related to Earth observations to help participants solve these challenges.
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
          <h1 className="font-[700] text-[32.99px] text-hackathone-font-rocket-red my-2">
            Space Agencies
          </h1>
          <p className="font-hackathoneCabinetGrotesk font-[600] text-[18px] leading-[30.57px] pr-[12.7%]">
            In 2024, <span className="text-hackathone-font-rocket-red font-[600]">NASA</span> is teaming up with even more space agency partners to bring the largest annual global hackathon to communities worldwide! These space agencies, along with NASA’s engineers at the <span className="text-hackathone-font-rocket-red font-[600]">Earth Science Division</span>, have crafted innovative problem statements that are literally out of this world. They provide access to data and other resources related to Earth observations to help participants solve these challenges.
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
          In 2024, <span className="text-hackathone-font-rocket-red font-[500]">NASA</span> is teaming up with even more space agency partners to bring the largest annual global hackathon to communities worldwide! These space agencies, along with NASA’s engineers at the <span className="text-hackathone-font-rocket-red font-[500]">Earth Science Division</span>, have crafted innovative problem statements that are literally out of this world. They provide access to data and other resources related to Earth observations to help participants solve these challenges.

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
