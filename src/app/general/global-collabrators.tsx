import React from "react";
import Image from "next/image";
import CollabratorsIcon from "@/assets/images/general/landing-page/space-man.png";

const GlobalCollabrators = () => {
  /** Desktop View */
  const desktopView = () => {
    return (
      <div className=" TabletScreen:hidden MobileScreen:hidden flex flex-row items-center justify-center gap-[36px] mx-[8.06%]">
        <div className="w-[123.45%]">
          <h1 className="my-4 text-hackathone-font-rocket-red font-[700] text-[42px]">
            Global Collaborators This Year
          </h1>
          <p className="font-hackathoneCabinetGrotesk font-[400] text-[18px] leading-[160%]">

            This year, the <span className="text-hackathone-font-rocket-red font-[500]">NASA International Space Apps Challenge Global Organizing Team </span>is partnering with organizations worldwide to provide participants and Local Leads with <span className="text-hackathone-font-rocket-red font-[500]">free tools and resources</span> to help you create the most innovative and creative solutions during the event.

          </p>
        </div>
        <div>
          <Image
            className="rounded-xl"
            src={CollabratorsIcon}
            width={1000}
            alt={"Dev Team Icon"}
          ></Image>
        </div>
      </div>
    );
  };

  /** Tablet View */
  const tabletView = () => {
    return (
      <div className="DesktopScreen:hidden MobileScreen:hidden flex flex-col items-center justify-center gap-[36px] mx-[4.34%]">
        <div className="">
          <p className="font-hackathoneCabinetGrotesk font-[400] text-[26px] leading-[223.34%]">
            This year, the <span className="text-hackathone-font-rocket-red font-[500]">NASA International Space Apps Challenge Global Organizing Team </span>is partnering with organizations worldwide to provide participants and Local Leads with <span className="text-hackathone-font-rocket-red font-[500]">free tools and resources</span> to help you create the most innovative and creative solutions during the event.
          </p>
        </div>
        <div>
          <h1 className="flex flex-col items-center justify-center text-hackathone-font-rocket-red">
            Global Collaborators This Year
          </h1>
          <Image
            className="rounded-xl"
            src={CollabratorsIcon}
            width={1000}
            alt={"Dev Team Icon"}
          ></Image>
        </div>
      </div>
    );
  };

  /** Mobile View */
  const mobileView = () => {
    return (
      <div className="DesktopScreen:hidden TabletScreen:hidden flex flex-col items-center justify-center gap-[36px] mx-[1.2rem]">
        <div>
          <h1 className="text-[30.99px] leading-[34.62px] font-[800] text-hackathone-font-rocket-red font-hackathoneCabinetGrotesk pb-[2rem]">
            Global Collaborators This Year
          </h1>
          <p className="font-hackathoneCabinetGrotesk font-[400] text-[16px] leading-[173.34%]">
            This year, the <span className="text-hackathone-font-rocket-red font-[500]">NASA International Space Apps Challenge Global Organizing Team </span>is partnering with organizations worldwide to provide participants and Local Leads with <span className="text-hackathone-font-rocket-red font-[500]">free tools and resources</span> to help you create the most innovative and creative solutions during the event.
          </p>
        </div>
        <div>
          <Image
            className="rounded-xl"
            src={CollabratorsIcon}
            width={1000}
            alt={"Dev Team Icon"}
          ></Image>
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

export default GlobalCollabrators;
