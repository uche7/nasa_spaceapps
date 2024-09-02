import React from "react";
import Image from "next/image";
import CollabratorsIcon from "@/assets/images/general/landing-page/space-man.png";
import { AgenciesSlider } from "./agencies-slider";
import { CollabratorsSlider } from "./collabrators-slider";
const GlobalCollabrators = () => {
  /** Desktop View */
  const desktopView = () => {
    return (
      // <div className=" TabletScreen:hidden MobileScreen:hidden flex flex-row items-center justify-center gap-[36px] mx-[8.06%]">
      //   <div className="w-[123.45%]">
      //     <h1 className="my-4 text-hackathone-font-rocket-red font-[700] text-[42px]">
      //       Global Collaborators This Year
      //     </h1>
      //     <p className="font-hackathoneCabinetGrotesk font-[400] text-[18px] leading-[160%]">
      //       <span className="text-hackathone-font-rocket-red font-[500]">
      //         This year
      //       </span>
      //       , the NASA International Space Apps Challenge
      //       <span className="text-hackathone-font-rocket-red  font-[500]">
      //         Global Organizing Team
      //       </span>
      //       collaborates with{" "}
      //       <span className="text-hackathone-font-rocket-red font-[500]">
      //         organizations
      //       </span>{" "}
      //       from around the world to provide{" "}
      //       <span className="text-hackathone-font-rocket-red  font-[500]">
      //         participants
      //       </span>{" "}
      //       and/or
      //       <span className="text-hackathone-font-rocket-red  font-[500]">
      //         Local Leads
      //       </span>{" "}
      //       with tools and resources that enable the creation of{" "}
      //       <span className="text-hackathone-font-rocket-red  font-[500]">
      //         solutions
      //       </span>
      //       . These tools and resources can be used for free during the event.
      //     </p>
      //   </div>
      //   <div>
      //     <Image
      //       className="rounded-xl"
      //       src={CollabratorsIcon}
      //       width={1000}
      //       alt={"Dev Team Icon"}
      //     ></Image>
      //   </div>
      // </div>
      <div className=" TabletScreen:hidden MobileScreen:hidden flex flex-row gap-[36px] mx-[8.06%] mt-[8rem]">
        <div className="lg:w-1/2 w-full text-center">
          <CollabratorsSlider />
        </div>
        <div className="lg:w-1/2 w-full mb-[20%] mt-[3%] ml-[2rem]">
          <h1 className="font-[700] text-[42px] text-hackathone-font-rocket-red my-2 pb-[0.5rem]">
          NASA Space Apps
          </h1>
          <div className="mr-[3rem]">
            <p className="font-hackathoneCabinetGrotesk font-[400] text-[18px] leading-[160%]">
              
            <li>NASA's Heliophysics Division studies the Sun's impact on space, Earth, and technology, using a fleet of spacecraft to understand solar wind and space weather. This research protects technology and astronauts while revealing how stars influence planetary habitability. <a href="https://science.nasa.gov/heliophysics/" target="_blank">Know more</a></li>
            <li>NASA's Earth Science Division (ESD) uses cutting-edge technology to study Earth's systems, like the atmosphere and oceans, providing free data on climate and environmental changes. By collaborating globally and supporting education, ESD empowers students to explore and understand our planet. <a href="https://science.nasa.gov/earth-science" target="_blank">Know more</a></li>
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
        <div className="">
          <h1 className="font-[700] text-[32.99px] text-hackathone-font-rocket-red my-2 pb-[0.5rem]">
            Global Collaborators This Year
          </h1>
          <p className="font-hackathoneCabinetGrotesk font-[400] text-[26px] leading-[223.34%]">
            
          <li>NASA's Heliophysics Division studies the Sun's impact on space, Earth, and technology, using a fleet of spacecraft to understand solar wind and space weather. This research protects technology and astronauts while revealing how stars influence planetary habitability. <a href="https://science.nasa.gov/heliophysics/" target="_blank">Know more</a></li>
          <li>NASA's Earth Science Division (ESD) uses cutting-edge technology to study Earth's systems, like the atmosphere and oceans, providing free data on climate and environmental changes. By collaborating globally and supporting education, ESD empowers students to explore and understand our planet. <a href="https://science.nasa.gov/earth-science" target="_blank">Know more</a></li>

          </p>
        </div>
        <div>

          <CollabratorsSlider />
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
          <li>NASA's Heliophysics Division studies the Sun's impact on space, Earth, and technology, using a fleet of spacecraft to understand solar wind and space weather. This research protects technology and astronauts while revealing how stars influence planetary habitability. <a href="https://science.nasa.gov/heliophysics/" target="_blank">Know more</a></li>
          <li>NASA's Earth Science Division (ESD) uses cutting-edge technology to study Earth's systems, like the atmosphere and oceans, providing free data on climate and environmental changes. By collaborating globally and supporting education, ESD empowers students to explore and understand our planet. <a href="https://science.nasa.gov/earth-science" target="_blank">Know more</a></li>
           
          </p>
        </div>
        <div>
          <CollabratorsSlider />
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
