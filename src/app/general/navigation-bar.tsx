import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { navigationData } from "./general.dto";
import DeeduLogo from "@/assets/images/general/landing-page/deedu-logo.png";
import MenuIcon from "@/assets/images/general/landing-page/menu-icon.svg";

export default function NavigationBar() {
  const Router = useRouter();
  const navigationInfo = useMemo(() => navigationData(Router), [Router]);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const sideNavVariants = {
    hidden: { x: "-100%" },
    visible: { x: "0%" },
  };

  const SideNav = () => (
    <motion.div
      className="fixed top-0 left-0 w-[75%] h-full bg-black z-50 p-5"
      initial="hidden"
      animate={isSideNavOpen ? "visible" : "hidden"}
      variants={sideNavVariants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div
        className="absolute right-5 text-[24px] cursor-pointer"
        onClick={() => setIsSideNavOpen(false)}
      >
        X
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {navigationInfo.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer font-hackathoneSFProDisplay font-[400] hover:text-[#E43700]"
            onClick={item.route}
          >
            {item.text}
          </div>
        ))}
      </div>
    </motion.div>
  );

  /** Desktop View */
  const desktopView = () => (
    <nav
      className="MobileScreen:hidden TabletScreen:hidden sticky bg-hackathone-background-grey 
        flex items-center justify-between h-[68px] px-[1.7%] mx-[7%] rounded-xl"
    >
      <div
        onClick={() =>
          window.open("https://deeducommunity.netlify.app/", "_blank")
        }
      >
        <Image
          className="cursor-pointer"
          src={DeeduLogo}
          width={100}
          alt={"Deedu logo"}
        ></Image>
      </div>
      <div className="flex flex-row gap-[16px]">
        {navigationInfo.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer font-hackathoneSFProDisplay font-[400] hover:text-[#E43700]"
            onClick={item.route}
          >
            {item.text}
          </div>
        ))}
      </div>
    </nav>
  );

  /** Tablet View */
  const tabletView = () => (
    <nav
      className="DesktopScreen:hidden MobileScreen:hidden bg-hackathone-background-grey px-[1.7%]
         flex flex-row justify-between py-[6px] mx-[3%] rounded-xl"
    >
      <div
        onClick={() =>
          window.open("https://deeducommunity.netlify.app/", "_blank")
        }
      >
        <Image
          className="cursor-pointer"
          src={DeeduLogo}
          width={100}
          alt={"Deedu logo"}
        ></Image>
      </div>
      <div onClick={toggleSideNav}>
        <Image
          className="cursor-pointer"
          src={MenuIcon}
          width={50}
          alt={"Menu Icon"}
        ></Image>
      </div>
    </nav>
  );

  /** Mobile View */
  const mobileView = () => (
    <nav
      className="DesktopScreen:hidden TabletScreen:hidden bg-hackathone-background-grey px-[1.2%]
         flex flex-row items-center justify-between py-[6px] mx-[1%] rounded-md"
    >
      <div
        onClick={() =>
          window.open("https://deeducommunity.netlify.app/", "_blank")
        }
      >
        <Image
          className="cursor-pointer mt-2"
          src={DeeduLogo}
          width={70}
          alt={"Deedu logo"}
        ></Image>
      </div>
      <div onClick={toggleSideNav}>
        <Image
          className="cursor-pointer"
          src={MenuIcon}
          width={50}
          alt={"Menu Icon"}
        ></Image>
      </div>
    </nav>
  );

  return (
    <section>
      {desktopView()}
      {tabletView()}
      {mobileView()}
      <SideNav />
    </section>
  );
}
