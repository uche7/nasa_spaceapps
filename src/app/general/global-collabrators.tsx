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

      <div className=" TabletScreen:hidden MobileScreen:hidden flex flex-row gap-[36px] mx-[8.06%] mt-8">
         <div className="lg:w-1/2 w-full mb-[20%] mt-[3%] ml-[2rem]">
        <h1 className="font-[700] text-[42px] text-hackathone-font-rocket-red my-2 pb-[0.5rem]">
        Global Collaborators This Year
        </h1>
        <div className="mr-[3rem]">
        <p className="font-hackathoneCabinetGrotesk font-[400] text-[18px] leading-[160%]">
       <span className="text-hackathone-font-rocket-red font-[500]">
           This year
             </span>
             , the NASA International Space Apps Challenge   &nbsp;
             <span className="text-hackathone-font-rocket-red  font-[500]">
               Global Organizing Team
             </span> &nbsp;
             collaborates with   &nbsp;
             <span className="text-hackathone-font-rocket-red font-[500]">
               organizations
             </span>   &nbsp;
             from around the world to provide   &nbsp;
             <span className="text-hackathone-font-rocket-red  font-[500]">
               participants
             </span>   &nbsp;
             and/or&nbsp;
             <span className="text-hackathone-font-rocket-red  font-[500]">
               Local Leads
             </span>   &nbsp;
             with tools and resources that enable the creation of   &nbsp;
             <span className="text-hackathone-font-rocket-red  font-[500]">
               solutions
             </span>
             . These tools and resources can be used for free during the event.
           </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full text-center">
        <CollabratorsSlider />
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
            <span className="text-hackathone-font-rocket-red  font-[500]">
              This year
            </span>
            <span>
            , the NASA International Space Apps Challenge</span>
            <span className="text-hackathone-font-rocket-red  font-[500]">
              Global Organizing Team 
            </span>
        
            <span>  collaborates with</span>
           
            <span className="text-hackathone-font-rocket-red  font-[500]">
              organizations
            </span>
            from around the world to provide
            <span className="text-hackathone-font-rocket-red  font-[500]">
              participants
              </span>
             
              <span>
            and /or</span>
            <span className="text-hackathone-font-rocket-red  font-[500]">
              Local Leads 
            </span>
            with tools and resources that enable the creation of
            <span className="text-hackathone-font-rocket-red  font-[500]">
              solutions
            </span>
            . These tools and resources can be used for free during the event.

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
            <span className="text-hackathone-font-rocket-red font-[500]">
              This year
            </span>
            , the NASA International Space Apps Challenge  &nbsp;
            <span className="text-hackathone-font-rocket-red  font-[500]">
              Global Organizing Team
            </span>
            collaborates with  &nbsp;
            <span className="text-hackathone-font-rocket-red font-[500]">
              organizations
            </span>  &nbsp;
            from around the world to provide
            <span className="text-hackathone-font-rocket-red  font-[500]">
              participants
            </span>  &nbsp;
            and/or
            <span className="text-hackathone-font-rocket-red font-[500]">
              Local Leads
            </span>  &nbsp;
            with tools and resources that enable the creation of  &nbsp;
            <span className="text-hackathone-font-rocket-red  font-[500]">
              solutions
            </span>
            . These tools and resources can be used for free during the event.
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
