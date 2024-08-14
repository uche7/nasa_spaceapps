import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DevTeamIcon from "@/assets/images/general/landing-page/dev-team-icon.jpg";
import HackathoneChallenge from "@/assets/images/general/landing-page/hackathlone_challenge.jpg";
import Buttons from "@/library/buttons/buttons";

const JoinUsPage = () => {
  /** Desktop View */
  const desktopView = () => {
    return (
      <div className="TabletScreen:hidden MobileScreen:hidden flex flex-row gap-[1.93%] mt-[126.77px] mx-[8.06%] mb-[179.04px]">
        <div className="mt-[4rem] w-[49.11%] h-[40rem] mr-[2rem]">
          <div>
            {/* <div className="flex flex-row gap-[0.5rem]">
              <div className="bg-hackathone-font-martin-red w-[6.54px] h-[6.54px] p-1 rounded-full mt-1"></div>
            </div> */}
            <h3 className="mt-[0.5rem] font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red  font-[800] text-[42px] leading-[44.62px]">
              The Hackathone Challenge will be kicking off soon
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
              unoptimized
              src={HackathoneChallenge}
              alt={"HackathoneChallenge"}
            ></Image>
          </div>
        </div>
        <div className="mt-[4rem] w-[48.95%] h-auto">
          <div className="h-auto rounded-[13.09px] p-1 border-2 ">
            <div className="pt-[1rem] pl-[1.5rem] pr-[5.48%]">
              <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[18px] leading-[30.57px]">
                SpaceApps Athlone, also known as{" "}
                <span className="text-hackathone-font-rocket-red font-[600]">
                  HackAthlone
                </span>
                , is one of the 300+ locations for this year&apos;s NASA
                SpaceApps Challenge.{" "}
                <span className="text-hackathone-font-rocket-red font-[600]">
                  Technology University of the Shannon
                </span>{" "}
                takes pride in hosting 200 participants on their campus for{" "}
                <span className="text-hackathone-font-rocket-red font-[600]">
                  48 hours{" "}
                </span>
                to collaborate on{" "}
                <span className="text-hackathone-font-rocket-red font-[600]">
                  30 problem statements
                </span>{" "}
                that cater to all STEAM fields.
              </p>
            </div>
            <div className="mt-[0.5rem] pl-[1.5rem] pr-[5.48%] ">
              <br />
              <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[18px] leading-[30.57px] pb-[2rem]">
                HackAthlone stands as the sole in-person Hackathon location in
                Ireland for this event, offering exciting prizes, goodies, and
                all necessary technical components and F&B provisions.
              </p>
            </div>
          </div>
          <div className="rounded-[13.09px] p-2 mt-[16.63px] pb-[36.17px] border-2">
            <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[18px] leading-[30.57px] p-2 ml-[0.5rem] mt-[2.54px] mb-[1rem]">
              Skilled mentors from both academia and industry will join in to
              assist the students in producing high-quality projects. This
              hackathon will be documented for open-source research purposes.
            </p>
            <motion.a
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              title="Unfold The Timeline"
              className="bg-hackathone-font-rocket-red ml-[1rem] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40%] h-[44.31px]"
              href="#timeline"
              onClick={(event) => {
                event.preventDefault();
                const element = document.getElementById("timeline");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <p className="font-[800] text-[16px] leading-[18.28px] font-sefarvestCabinetGrotesk text-black flex ">
                Unfold The Timeline
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
      <div className="MobileScreen:hidden DesktopScreen:hidden flex flex-col  mt-[126.77px] mx-[4.06%] mb-[139.04px]">
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
              unoptimized
              src={HackathoneChallenge}
              alt={"HackathoneChallenge"}
            ></Image>
          </div>
        </div>
        <div className="mt-[1.5rem] w-full h-auto flex flex-col TabletScreen:flex-row TabletScreen:justify-between gap-8">
          <div className="TabletScreen:w-[48%] h-auto">
            <div className="h-auto rounded-[13.09px] p-1 border-2">
              <div className="pt-[1rem] pl-[1.5rem] pr-[5.48%]">
                <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[18px] leading-[30.57px]">
                  SpaceApps Athlone, also known as{" "}
                  <span className="text-hackathone-font-rocket-red font-[600]">
                    HackAthlone
                  </span>
                  , is one of the 300+ locations for this year&apos;s NASA
                  SpaceApps Challenge.{" "}
                  <span className="text-hackathone-font-rocket-red font-[600]">
                    Technology University of the Shannon
                  </span>{" "}
                  takes pride in hosting 200 participants on their campus for{" "}
                  <span className="text-hackathone-font-rocket-red font-[600]">
                    48 hours{" "}
                  </span>
                  to collaborate on{" "}
                  <span className="text-hackathone-font-rocket-red font-[600]">
                    30 problem statements
                  </span>{" "}
                  that cater to all STEAM fields.
                </p>
              </div>
              <div className="mt-[0.5rem] pl-[1.5rem] pr-[5.48%] ">
                <br /><p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[18px] leading-[30.57px] pb-[2rem]">
                  HackAthlone stands as the sole in-person Hackathon location in
                  Ireland for this event, offering exciting prizes, goodies, and
                  all necessary technical components and F&B provisions.
                </p>
              </div>
            </div>
          </div>
          <div className="TabletScreen:w-[48%] h-auto">
            <div className="rounded-[13.09px] p-2 pb-[36.17px] border-2">
              <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[18px] leading-[30.57px] p-2 ml-[0.5rem] mt-[2.54px] mb-[1rem]">
                Skilled mentors from both academia and industry will join in to
                assist the students in producing high-quality projects. This
                hackathon will be documented for open-source research purposes.
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
                  Unfold The Timeline
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
        <div className="mb-[22.68px]">
          <h3 className="mt-[0.5rem] font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red font-[800] text-[30.99px] leading-[44.62px]">
            The Hackathone Challenge will be kicking off soon
          </h3>
          <p className="font-hackathoneSFProDisplay font-[500] text-slate-50 text-[16.72px] leading-[24.57px] mt-[9.81px] mb-4">
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
        <div className="mt-[2rem] ">
          <div className="rounded-[13.09px] p-1 border-2">
            <div className="pt-[1rem] pl-[1.5rem] pr-[5.48%]">
              <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[16px] leading-[30.57px]">
                SpaceApps Athlone, also known as{" "}
                <span className="text-hackathone-font-rocket-red font-[600]">
                  HackAthlone
                </span>
                , is one of the 300+ locations for this year&apos;s NASA
                SpaceApps Challenge.{" "}
                <span className="text-hackathone-font-rocket-red font-[600]">
                  Technology University of the Shannon
                </span>{" "}
                takes pride in hosting 200 participants on their campus for{" "}
                <span className="text-hackathone-font-rocket-red font-[600]">
                  48 hours{" "}
                </span>
                to collaborate on{" "}
                <span className="text-hackathone-font-rocket-red font-[600]">
                  30 problem statements
                </span>{" "}
                that cater to all STEAM fields.
              </p>
            </div>
            <div className="mt-[0.5rem] pl-[1.5rem] pr-[5.48%] ">
              <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[16px] leading-[30.57px]">
                HackAthlone stands as the sole in-person Hackathon location in
                Ireland for this event, offering exciting prizes, goodies, and
                all necessary technical components and F&B provisions.
              </p>
            </div>
          </div>
          <div className="rounded-[13.09px] p-2 mt-[16.63px] pb-[36.17px] border-2">
            <p className="font-hackathoneCabinetGrotesk font-[500] text-slate-50 text-[16px] leading-[30.57px] p-2 ml-[0.5rem] mt-[2.54px] mb-[1rem]">
              Skilled mentors from both academia and industry will join in to
              assist the students in producing high-quality projects. This
              hackathon will be documented for open-source research purposes.

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
              className="bg-hackathone-font-rocket-red mx-[3.6rem] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[55%] h-[355]"
            >
              <p className="font-[800] text-[16px] leading-[18.28px] font-sefarvestCabinetGrotesk text-black flex">
                Unfold The Timeline
              </p>
            </motion.a>
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
