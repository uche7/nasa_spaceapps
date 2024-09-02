import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DevTeamIcon from "@/assets/images/general/landing-page/presentation.jpg";
import HackathoneChallenge from "@/assets/images/general/landing-page/presentation.jpg";
import Buttons from "@/library/buttons/buttons";

const JoinUsPage = () => {
  /** Desktop View */
  const desktopView = () => {
    return (
      <div className="TabletScreen:hidden MobileScreen:hidden flex flex-row gap-[1.93%] mt-[56.77px] mx-[8.06%] mb-[179.04px] text-justify">
        <div className="mt-[4rem] w-[49.11%] h-[40rem] mr-[2rem]">
          <div>
            {/* <div className="flex flex-row gap-[0.5rem]">
              <div className="bg-hackathone-font-martin-red w-[6.54px] h-[6.54px] p-1 rounded-full mt-1"></div>
            </div> */}
            <h3 className="mt-[0.5rem] font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red  font-[800] text-[42px] leading-[44.62px]">
              The Hackathon Challenge will be kicking off soon
            </h3>
            <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[18.72px] leading-[24.57px] mt-[9.81px]">
              Join us on <span className="font-bold text-[18px] text-hackathone-font-rocket-red">
                October 4-6, 2024
              </span> for the largest annual space & sciences
              hackathon in the world!
            </p>
          </div>
          <div className="mt-[2rem]">
            <Image
              className="rounded-xl"

              src={HackathoneChallenge}
              alt={"HackathoneChallenge"}
            ></Image>
          </div>
        </div>
        <div className="mt-[4rem] w-[48.95%] h-auto">
          <div className="h-auto rounded-[13.09px] p-1 border-2 ">
            <div className="pt-[1.5rem] pl-[2rem] pr-[5.48%]">
              <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[18px] leading-[28.57px] text-justify">
                We’re back! The Athlone chapter of the world’s largest annual space and science hackathon is being hosted by the <span className="text-hackathone-font-rocket-red font-[600]">Technological University of the Shannon</span>. HackAthlone is one of over 400 global locations participating in this year's NASA SpaceApps Challenge. Leveraging NASA's data HackAthlone exemplifies the values and ambitions of the competition by promoting diversity in the next generation of scientists, engineers, technologists, and designers.
              </p>
            </div>
            <div className="pt-[0.5rem] pl-[2rem] pr-[5.48%] ">
              <br />
              <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[18px] leading-[28.57px] pb-[2rem] text-justify">
                Compete for exciting prizes and goodies, with all the technical resources and F&B provisions you need to keep going. Plus, with guidance from skilled mentors from academia and industry, you’ll have the support to create high-quality projects. The outcomes will be documented for open-source research, contributing to global innovation.
              </p>
            </div>
          </div>
          <div className="rounded-[13.09px] mt-[16.63px] pb-[36.17px] border-2">
            <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[18px] leading-[28.57px] text-justify p-2 pl-[2rem] pr-[2rem] pt-[1.5rem] mb-[1rem]">
              Join this 48-hour hackathon, where you'll tackle problem statements curated by NASA and other space agencies, all centred around this year’s theme, "The Sun Touches Everything," across various STEAM fields. Register now and be part of this extraordinary event!
            </p>
            <motion.a
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
              title="Unfold The Timeline"
              className="bg-hackathone-font-rocket-red ml-[2rem] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40%] h-[44.31px] border-2 border-transparent transition-colors duration-300 ease-in-out"
              href="#timeline"
              onClick={(event) => {
                event.preventDefault();
                const element = document.getElementById("timeline");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <p className="font-[700] text-[16px] leading-[18.28px] font-sefarvestCabinetGrotesk text-black transition-all duration-500 ease-in-out hover:text-hackathone-font-rocket-red">
                Unfold the Timeline
              </p>
            </motion.a>
          </div>
        </div>
      </div>
    );
  };

  /** Tablet View */
  const tabletView = () => {
    return (
      <div className="MobileScreen:hidden DesktopScreen:hidden flex flex-col  mt-[126.77px] mx-[4.06%] mb-[139.04px] text-justify">
        <div className="mb-[24px]">
          <div>
            <h3 className="mt-[0.5rem] font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red  font-[800] text-[32.99px] leading-[44.62px]">
              The Hackathone Challenge will be kicking off soon
            </h3>
            <p className="font-hackathoneSFProDisplay font-[500] text-slate-50 text-[18px] leading-[24.57px] mt-[9.81px]">
              Join us on <span className="font-bold text-[18px] text-hackathone-font-rocket-red">October 4-6, 2024</span> for the largest annual space & sciences hackathon in the world!
            </p>
          </div>
          <div className="mt-[2rem]">
            <Image
              className="rounded-xl"

              src={HackathoneChallenge}
              alt={"HackathoneChallenge"}
            ></Image>
          </div>
        </div>
        <div className="mt-[1.5rem] w-full h-auto flex flex-col TabletScreen:flex-row TabletScreen:justify-between gap-8">
          <div className="TabletScreen:w-[48%] h-auto">
            <div className="h-auto rounded-[13.09px] p-2 border-2">
              <div className="pt-[1rem] pl-[1.5rem] pr-[5.48%]">
                <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[18px] leading-[28.57px] text-justify">
                  We’re back! The Athlone chapter of the world’s largest annual space and science hackathon is being hosted by the <span className="text-hackathone-font-rocket-red font-[600]">Technological University of the Shannon</span>. HackAthlone is one of over 400 global locations participating in this year's NASA SpaceApps Challenge. Leveraging NASA's data HackAthlone exemplifies the values and ambitions of the competition by promoting diversity in the next generation of scientists, engineers, technologists, and designers.
                </p>
              </div>
              <div className="mt-[0.5rem] pl-[1.5rem] pr-[5.48%] ">
                <br /><p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[18px] leading-[28.57px] pb-[2rem] text-justify">
                  Compete for exciting prizes and goodies, with all the technical resources and F&B provisions you need to keep going. Plus, with guidance from skilled mentors from academia and industry, you’ll have the support to create high-quality projects. The outcomes will be documented for open-source research, contributing to global innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="TabletScreen:w-[48%] h-auto">
            <div className="rounded-[13.09px] p-2 pb-[36.17px] border-2">
              <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[18px] leading-[28.57px] text-justify p-4">
                Join this 48-hour hackathon, where you'll tackle problem statements curated by NASA and other space agencies, all centred around this year’s theme, "The Sun Touches Everything," across various STEAM fields. Register now and be part of this extraordinary event!
              </p>
              <motion.a
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                href="#timeline"
                onClick={(event) => {
                  event.preventDefault();
                  const element = document.getElementById("timeline");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                whileTap={{ scale: 0.9 }}
                title="Unfold The Timeline"
                className="bg-hackathone-font-rocket-red ml-[1rem] flex items-center justify-center text-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40%] h-[40%]"
              >
                <p className="font-[800] text-[16px] leading-[18.28px] font-sefarvestCabinetGrotesk text-black flex">
                  Unfold the Timeline
                </p>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /** Mobile View */
  const mobileView = () => {
    return (
      <div className="TabletScreen:hidden DesktopScreen:hidden mt-[90.79px] mx-[1.2rem] mb-[122.68px]">
        <div className="mb-[22.68px] text-start">
          <h3 className="mt-[0.5rem] font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red font-[800] text-[30.99px] leading-[34.62px]">
            The Hackathon Challenge will be kicking off soon
          </h3>
          <p className="font-hackathoneSFProDisplay font-[500] text-slate-50 text-[16.72px] leading-[24.57px] mt-[9.81px] mb-4 text-justify">
            Join us on
            <span className="font-bold text-[18px] text-hackathone-font-rocket-red"> October 4-6, 2024</span> for the largest annual space & sciences
            hackathon in the world!
          </p>
          <Image
            className="w-[312.44%] rounded-[13.09px]"
            src={HackathoneChallenge}
            alt={"HackathoneChallenge"}
          ></Image>
        </div>
        <div className="mt-[2rem]">
          <div className="rounded-[13.09px] p-1 border-2 text-justify">
            <div className="p-2">
              <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[16px] leading-[24.57px] p-4">
                We’re back! The Athlone chapter of the world’s largest annual space and science hackathon is being hosted by the <span className="text-hackathone-font-rocket-red font-[600]">Technological University of the Shannon</span>. HackAthlone is one of over 400 global locations participating in this year's NASA SpaceApps Challenge. Leveraging NASA's data HackAthlone exemplifies the values and ambitions of the competition by promoting diversity in the next generation of scientists, engineers, technologists, and designers.
              </p>
            </div>
            <div className="p-2">
              <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[16px] leading-[24.57px] p-4">
                Compete for exciting prizes and goodies, with all the technical resources and F&B provisions you need to keep going. Plus, with guidance from skilled mentors from academia and industry, you’ll have the support to create high-quality projects. The outcomes will be documented for open-source research, contributing to global innovation.
              </p>
            </div>
          </div>
          <div className="rounded-[13.09px] p-2 mt-[16.63px] pb-[28.17px] border-2">
            <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[16px] leading-[24.57px] text-justify p-4">
              Join this 48-hour hackathon, where you'll tackle problem statements curated by NASA and other space agencies, all centred around this year’s theme, "The Sun Touches Everything," across various STEAM fields. Register now and be part of this extraordinary event!
            </p>
            <div className="w-full flex">
              <motion.a
                whileHover={{
                  scale: 1.07,
                  transition: { duration: 0.3 },
                  backgroundColor: "rgba(255, 0, 0, 0.8)",
                  borderColor: "white",
                }}
                href="#timeline"
                onClick={(event) => {
                  event.preventDefault();
                  const element = document.getElementById("timeline");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                whileTap={{
                  scale: 0.9,
                  borderWidth: "3px",
                  borderColor: "white",
                }}
                title="Unfold The Timeline"
                className="bg-hackathone-font-rocket-red flex items-center justify-center text-center rounded-[6.54px] mx-[1rem] px-[2.22%] py-[11.4px] w-[55%] h-[355] border-2 border-transparent transition-colors duration-300 ease-in-out"
              >
                <p className="font-bold text-[16px] leading-[16.28px] font-sefarvestCabinetGrotesk text-black transition-all duration-150 ease-out hover:text-hackathone-font-rocket-red">
                  Unfold the Timeline
                </p>
              </motion.a>
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

export default JoinUsPage;
