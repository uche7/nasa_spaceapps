import React from "react";
import Image from "next/image";
import CollabratorsIcon from "@/assets/images/general/landing-page/space-man.png";
import { AgenciesSlider } from "./agencies-slider";
import { CollabratorsSlider } from "./collabrators-slider";
const GlobalCollabrators = () => {
  /** Desktop View */
  const desktopView = () => {
    return (
      <div className=" TabletScreen:hidden MobileScreen:hidden flex flex-row gap-[36px] mx-[8.06%] mt-[8rem]">
        <div className="lg:w-1/2 w-full text-center justify-center items-center mt-[5rem] mr-[2rem]">
          <CollabratorsSlider />
        </div>
        <div className="lg:w-1/2 w-full mb-[20%] mt-[3%]">
          <h1 className="font-[700] text-[42px] text-hackathone-font-rocket-red my-2 pb-[0.5rem]">
            NASA Space Apps
          </h1>
          <div className="mr-[2rem] font-hackathoneCabinetGrotesk font-[400] text-[18px] leading-[160%]">
            <p className="">The NASA Space Apps Challenge is backed by NASA's Earth Science Division through collaborations with  <a href="https://www.boozallen.com/" className="underline text-hackathone-font-rocket-red" target="_blank">Booz Allen Hamilton</a>,  <a href="https://mindgrub.com/" className="underline text-hackathone-font-rocket-red" target="_blank">Mindgrub</a>, and  <a href="https://www.secondmuse.com/" className="underline text-hackathone-font-rocket-red" target="_blank">SecondMuse</a>. This year’s hackathon theme is funded by NASA’s Heliophysics Division in celebration of the Helio Big Year.</p>
            <ul className="list-disc pl-[2rem] pt-[2rem]">
              <li>NASA's Heliophysics Division studies the Sun's impact on space, Earth, and technology, using a fleet of spacecraft to understand solar wind and space weather. This research protects technology and astronauts while revealing how stars influence planetary habitability. <a href="https://science.nasa.gov/heliophysics/" className="underline text-hackathone-font-rocket-red" target="_blank">(Know more)</a></li>
              <li className="lg:pt-[1rem] pt-[0.5rem]">NASA's Earth Science Division (ESD) uses cutting-edge technology to study Earth's systems, like the atmosphere and oceans, providing free data on climate and environmental changes. By collaborating globally and supporting education, ESD empowers students to explore and understand our planet. <a href="https://science.nasa.gov/earth-science" className="underline text-hackathone-font-rocket-red" target="_blank">(Know more)</a></li>
            </ul>
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
            NASA Space Apps
          </h1>
          <div className="font-hackathoneCabinetGrotesk text-slate-50 font-[500]">
            <p className="">The NASA Space Apps Challenge is backed by NASA's Earth Science Division through collaborations with  <a href="https://www.boozallen.com/" className="underline text-hackathone-font-rocket-red" target="_blank">Booz Allen Hamilton</a>,  <a href="https://mindgrub.com/" className="underline text-hackathone-font-rocket-red" target="_blank">Mindgrub</a>, and  <a href="https://www.secondmuse.com/" className="underline text-hackathone-font-rocket-red" target="_blank">SecondMuse</a>. This year’s hackathon theme is funded by NASA’s Heliophysics Division in celebration of the Helio Big Year.</p>
            <ul className="list-disc px-[3rem] pt-[2rem]">
              <li>NASA's Heliophysics Division studies the Sun's impact on space, Earth, and technology, using a fleet of spacecraft to understand solar wind and space weather. This research protects technology and astronauts while revealing how stars influence planetary habitability. <a href="https://science.nasa.gov/heliophysics/" className="underline text-hackathone-font-rocket-red" target="_blank">(Know more)</a></li>
              <li className="pt-[1rem]">NASA's Earth Science Division (ESD) uses cutting-edge technology to study Earth's systems, like the atmosphere and oceans, providing free data on climate and environmental changes. By collaborating globally and supporting education, ESD empowers students to explore and understand our planet. <a href="https://science.nasa.gov/earth-science" className="underline text-hackathone-font-rocket-red" target="_blank">(Know more)</a></li>
            </ul>
          </div>
        </div>
        <div className="md:w-[60%] w-[70%]">
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
            NASA Space Apps
          </h1>
          <div>
            <p className="">The NASA Space Apps Challenge is backed by NASA's Earth Science Division through collaborations with  <a href="https://www.boozallen.com/" className="underline text-hackathone-font-rocket-red" target="_blank">Booz Allen Hamilton</a>,  <a href="https://mindgrub.com/" className="underline text-hackathone-font-rocket-red" target="_blank">Mindgrub</a>, and  <a href="https://www.secondmuse.com/" className="underline text-hackathone-font-rocket-red" target="_blank">SecondMuse</a>. This year’s hackathon theme is funded by NASA’s Heliophysics Division in celebration of the Helio Big Year.</p>
            <ul className="list-disc pl-[3rem] pr-[2rem] pt-[2rem]">
              <li>NASA's Heliophysics Division studies the Sun's impact on space, Earth, and technology, using a fleet of spacecraft to understand solar wind and space weather. This research protects technology and astronauts while revealing how stars influence planetary habitability. <a href="https://science.nasa.gov/heliophysics/" className="underline text-hackathone-font-rocket-red" target="_blank">(Know more)</a></li>
              <li className="pt-[1rem]">NASA's Earth Science Division (ESD) uses cutting-edge technology to study Earth's systems, like the atmosphere and oceans, providing free data on climate and environmental changes. By collaborating globally and supporting education, ESD empowers students to explore and understand our planet. <a href="https://science.nasa.gov/earth-science" className="underline text-hackathone-font-rocket-red" target="_blank">(Know more)</a></li>
            </ul>
          </div>
        </div>
        <div className="translate-y-[-10%]">
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
