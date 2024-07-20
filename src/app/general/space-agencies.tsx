import React from "react";
import Image from "next/image";
import DevTeam2Icon from "@/assets/images/general/landing-page/dev-team2-icon.svg";

const SpaceAgencies = () => {
  /** Desktop View */
  const desktopView = () => {
    return (
      <div className=" TabletScreen:hidden MobileScreen:hidden flex flex-row items-center justify-center gap-[36px] mx-[8.34%]">
        <div>
          <h1 className="flex flex-col items-center justify-center text-hackathone-font-yellow">
            SPACE AGENCIES
          </h1>
          <Image src={DevTeam2Icon} width={1000} alt={"Dev Team Icon"}></Image>
        </div>
        <div className="w-[123.45%]">
          <p className="font-hackathoneCabinetGrotesk font-[400] text-[26px] leading-[223.34%]">
            In{" "}
            <span className="text-hackathone-font-yellow font-[500]">2022</span>
            , NASA collaborated with even more{" "}
            <span className="text-hackathone-font-yellow font-[500]">
              space agency partners
            </span>{" "}
            to bring the largest annual global hackathon to communities around
            the world! These space agency partners , along with NASA’s engineers
            at the{" "}
            <span className="text-hackathone-font-yellow font-[500]">
              Earth Science Division
            </span>
            , came up with{" "}
            <span className="text-hackathone-font-yellow font-[500]">
              innovative problem statements
            </span>{" "}
            (literally out of this world). They provide access to this data and
            other resources around Earth Observations for solving the{" "}
            <span className="text-hackathone-font-yellow font-[500]">
              challenges
            </span>
            .
          </p>
        </div>
      </div>
    );
  };

  /** Tablet View */
  const tabletView = () => {
    return (
      <div className="DesktopScreen:hidden MobileScreen:hidden flex flex-col items-center justify-center gap-[36px] mx-[4.34%]">
        <div>
          <h1 className="flex flex-col items-center justify-center text-hackathone-font-yellow">
            SPACE AGENCIES
          </h1>
          <Image src={DevTeam2Icon} width={1000} alt={"Dev Team Icon"}></Image>
        </div>
        <div className="">
          <p className="font-hackathoneCabinetGrotesk font-[400] text-[26px] leading-[223.34%]">
            In{" "}
            <span className="text-hackathone-font-yellow font-[500]">2022</span>
            , NASA collaborated with even more{" "}
            <span className="text-hackathone-font-yellow font-[500]">
              space agency partners
            </span>{" "}
            to bring the largest annual global hackathon to communities around
            the world! These space agency partners , along with NASA’s engineers
            at the{" "}
            <span className="text-hackathone-font-yellow font-[500]">
              Earth Science Division
            </span>
            , came up with{" "}
            <span className="text-hackathone-font-yellow font-[500]">
              innovative problem statements
            </span>{" "}
            (literally out of this world). They provide access to this data and
            other resources around Earth Observations for solving the{" "}
            <span className="text-hackathone-font-yellow font-[500]">
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
          <h1 className="flex flex-col items-center justify-center text-hackathone-font-yellow">
            SPACE AGENCIES
          </h1>
          <Image src={DevTeam2Icon} width={1000} alt={"Dev Team Icon"}></Image>
        </div>
        <div className="">
          <p className="font-hackathoneCabinetGrotesk font-[400] text-[24px] leading-[223.34%]">
            In{" "}
            <span className="text-hackathone-font-yellow font-[500]">2022</span>
            , NASA collaborated with even more{" "}
            <span className="text-hackathone-font-yellow font-[500]">
              space agency partners
            </span>{" "}
            to bring the largest annual global hackathon to communities around
            the world! These space agency partners , along with NASA’s engineers
            at the{" "}
            <span className="text-hackathone-font-yellow font-[500]">
              Earth Science Division
            </span>
            , came up with{" "}
            <span className="text-hackathone-font-yellow font-[500]">
              innovative problem statements
            </span>{" "}
            (literally out of this world). They provide access to this data and
            other resources around Earth Observations for solving the{" "}
            <span className="text-hackathone-font-yellow font-[500]">
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
