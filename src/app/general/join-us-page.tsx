import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DevTeamIcon from "@/assets/images/general/landing-page/dev-team-icon.jpg";
import Buttons from "@/library/buttons/buttons";

const JoinUsPage = () => {
  /** Desktop View */
  const desktopView = () => {
    return (
      <div className="TabletScreen:hidden MobileScreen:hidden flex flex-row gap-[1.93%] mt-[126.77px] mx-[8.06%] mb-[179.04px]">
        <div className="w-[49.11%] h-[477.65px]">
          <div>
            <div className="flex flex-row gap-[9.81px]">
              <div className="bg-hackathone-background-dark-blue w-[6.54px] h-[6.54px] p-1 rounded-full mt-1"></div>
              <div className="text-slate-300 font-hackathoneSFProDisplay font-[700] text-[14.72px] leading-[17.57px]">
                HackAthlone
              </div>
            </div>
            <h3 className="mt-[9.81px] font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red  font-[800] text-[35.99px] leading-[44.62px]">
              The Hackathone Challenge will be kicking off soon
            </h3>
            <p className="font-hackathoneCabinetGrotesk font-[400] text-slate-300 text-[14.72px] leading-[17.57px] mt-[9.81px]">
              Join us October 6-8, 2024 for the largest annual space & sciences
              hackathon in the world!
            </p>
          </div>
          <div className="mt-[30.21px]">
            <Image
              className="rounded-xl"
              unoptimized
              src={DevTeamIcon}
              alt={"Dev Team Icon"}
            ></Image>
          </div>
        </div>
        <div className="w-[48.95%] h-[477.65px]">
          <div className="bg-hackathone-background-grey h-[236.37px] rounded-[13.09px] p-1">
            <div className="pt-[22px] pl-[1.93%] pr-[5.48%]">
              <p className="font-hackathoneCabinetGrotesk font-[400] text-slate-300 text-[18px] leading-[18.62px]">
                SpaceApps Athlone, also known as{" "}
                <span className="text-hackathone-font-rocket-red">
                  HackAthlone
                </span>
                , is one of the 300+ locations for this year&apos;s NASA
                SpaceApps Challenge.{" "}
                <span className="text-hackathone-font-rocket-red">
                  Technology University of the Shannon
                </span>{" "}
                takes pride in hosting 200 participants on their campus for{" "}
                <span className="text-hackathone-font-rocket-red">
                  48 hours{" "}
                </span>
                to collaborate on{" "}
                <span className="text-hackathone-font-rocket-red">
                  30 problem statements
                </span>{" "}
                that cater to all STEAM fields.
              </p>
            </div>
            <div className="h-[221.65px] mt-[11.8px] ml-[1.93%] mr-[5.48%] mb-[48.97px]">
              <p className="font-hackathoneCabinetGrotesk font-[400] text-slate-300 text-[18px] leading-[18.62px]">
                HackAthlone stands as the sole in-person Hackathon location in
                Ireland for this event, offering exciting prizes, goodies, and
                all necessary technical components and F&B provisions. It also
                holds the distinction of being the sole location in Europe that
                will livestream the event to the public.
              </p>
            </div>
          </div>
          <div className="bg-hackathone-background-grey rounded-[13.09px] p-1 mt-[19.63px] pb-[36.17px]">
            <p className="font-hackathoneCabinetGrotesk font-[400] text-slate-300 text-[18px] leading-[18.62px] p-2 mt-[6.54px] mb-[52.24px]">
              Skilled mentors from both academia and industry will join in to
              assist the students in producing high-quality projects. This
              hackathon will be documented for open-source research purposes.
            </p>
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              title="Unfold The Timeline"
              className="bg-white mt-[32.82px] mx-8 flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40.36%] h-[44.31px]"
            >
              <p className="mr-[7px] font-bold text-[13.13px] leading-[16.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red">
                Unfold The Timeline
              </p>
            </motion.button>
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
            <div className="flex flex-row gap-[9.81px]">
              <div className="bg-hackathone-background-dark-blue w-[6.54px] h-[6.54px] p-1 rounded-full mt-1"></div>
              <div className="text-slate-300 font-hackathoneSFProDisplay font-[700] text-[14.72px] leading-[17.57px]">
                HackAthlone
              </div>
            </div>
            <h3 className="mt-[9.81px] font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red  font-[800] text-[35.99px] leading-[44.62px]">
              The Hackathone Challenge will be kicking off soon
            </h3>
            <p className="font-hackathoneSFProDisplay font-[400] text-slate-300 text-[14.72px] leading-[14.57px] mt-[9.81px]">
              Join us October 6-8, 2024 for the largest annual space & sciences
              hackathon in the world!
            </p>
          </div>
          <div className="mt-[30.21px]">
            <Image
              className="rounded-xl"
              unoptimized
              src={DevTeamIcon}
              alt={"Dev Team Icon"}
            ></Image>
          </div>
        </div>
        <div>
          <div className="bg-hackathone-background-grey rounded-[13.09px] p-1">
            <div className="pt-[22px] pl-[1.93%] pr-[5.48%]">
              <p className="font-hackathoneCabinetGrotesk font-[400] text-slate-300 text-[18px] leading-[18.92px]">
                SpaceApps Athlone, also known as{" "}
                <span className="text-hackathone-font-rocket-red">
                  HackAthlone
                </span>
                , is one of the 300+ locations for this year&apos;s NASA
                SpaceApps Challenge.{" "}
                <span className="text-hackathone-font-rocket-red">
                  Technology University of the Shannon
                </span>{" "}
                takes pride in hosting 200 participants on their campus for{" "}
                <span className="text-hackathone-font-rocket-red">
                  48 hours{" "}
                </span>
                to collaborate on{" "}
                <span className="text-hackathone-font-rocket-red">
                  30 problem statements
                </span>{" "}
                that cater to all STEAM fields.
              </p>
            </div>
            <div className="mt-[11.8px] ml-[1.93%] mr-[5.48%] mb-4">
              <p className="font-hackathoneCabinetGrotesk font-[400] text-slate-300 text-[18px] leading-[18.92px]">
                HackAthlone stands as the sole in-person Hackathon location in
                Ireland for this event, offering exciting prizes, goodies, and
                all necessary technical components and F&B provisions. It also
                holds the distinction of being the sole location in Europe that
                will livestream the event to the public.
              </p>
            </div>
          </div>
          <div className="bg-hackathone-background-grey rounded-[13.09px] p-1 mt-[19.63px] pb-[36.17px]">
            <p className="font-hackathoneCabinetGrotesk font-[400] text-slate-300 text-[18px] leading-[18.62px] p-2 mt-[6.54px] mb-[52.24px]">
              Skilled mentors from both academia and industry will join in to
              assist the students in producing high-quality projects. This
              hackathon will be documented for open-source research purposes.
            </p>
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              title="Unfold The Timeline"
              className="bg-white mt-[32.82px] mx-8 flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40.36%] h-[44.31px]"
            >
              <p className="mr-[7px] font-bold text-[13.13px] leading-[16.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red">
                Unfold The Timeline
              </p>
            </motion.button>
          </div>
        </div>
      </div>
    );
  };

  /** Mobile View */
  const mobileView = () => {
    return (
      <div className="TabletScreen:hidden DesktopScreen:hidden mt-[90.79px] mx-[2.28%] mb-[122.68px]">
        <div className="mb-[22.68px]">
          <div className="flex flex-row gap-[9.81px]">
            <div className="bg-hackathone-background-dark-blue w-[6.54px] h-[6.54px] p-1 rounded-full mt-1"></div>
            <div className="text-slate-300 font-hackathoneSFProDisplay font-[700] text-[14.72px] leading-[17.57px]">
              HackAthlone
            </div>
          </div>
          <h3 className="mt-[9.81px] font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red font-[800] text-[30.99px] leading-[44.62px]">
            The Hackathone Challenge will be kicking off soon
          </h3>
          <p className="font-hackathoneSFProDisplay font-[400] text-slate-300 text-[14.72px] leading-[14.57px] mt-[9.81px] mb-4">
            Join us October 6-8, 2024 for the largest annual space & sciences
            hackathon in the world!
          </p>
          <Image
            className="w-[312.44%] rounded-[13.09px]"
            src={DevTeamIcon}
            alt={"Dev Team Icon"}
          ></Image>
        </div>
        <div>
          <div className="bg-hackathone-background-grey rounded-[13.09px] p-1">
            <div className="pt-[22px] pl-[1.93%] pr-[5.48%]">
              <p className="font-hackathoneCabinetGrotesk font-[400] text-slate-300 text-[18px] leading-[18.92px]">
                SpaceApps Athlone, also known as{" "}
                <span className="text-hackathone-font-rocket-red">
                  HackAthlone
                </span>
                , is one of the 300+ locations for this year&apos;s NASA
                SpaceApps Challenge.{" "}
                <span className="text-hackathone-font-rocket-red">
                  Technology University of the Shannon
                </span>{" "}
                takes pride in hosting 200 participants on their campus for{" "}
                <span className="text-hackathone-font-rocket-red">
                  48 hours{" "}
                </span>
                to collaborate on{" "}
                <span className="text-hackathone-font-rocket-red">
                  30 problem statements
                </span>{" "}
                that cater to all STEAM fields.
              </p>
            </div>
            <div className="mt-[11.8px] ml-[1.93%] mr-[5.48%] mb-4">
              <p className="font-hackathoneCabinetGrotesk font-[400] text-slate-300 text-[18px] leading-[18.92px]">
                HackAthlone stands as the sole in-person Hackathon location in
                Ireland for this event, offering exciting prizes, goodies, and
                all necessary technical components and F&B provisions. It also
                holds the distinction of being the sole location in Europe that
                will livestream the event to the public.
              </p>
            </div>
          </div>
          <div className="bg-hackathone-background-grey rounded-[13.09px] p-1 mt-[19.63px] pb-[36.17px]">
            <p className="font-hackathoneCabinetGrotesk font-[400] text-slate-300 text-[18px] leading-[18.62px] p-2 mt-[6.54px] mb-[52.24px]">
              Skilled mentors from both academia and industry will join in to
              assist the students in producing high-quality projects. This
              hackathon will be documented for open-source research purposes.
            </p>
            <Buttons
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              title="Unfold The Timeline"
              className="bg-white mt-[32.82px] mx-8 flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] h-[44.31px]"
            >
              <p className="mr-[7px] font-bold text-[13.13px] leading-[16.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red">
                Unfold The Timeline
              </p>
            </Buttons>
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
