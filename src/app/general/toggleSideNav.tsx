import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { navigationData } from "./navigation.dto";

export const SideNav = () => {
  const Router = useRouter();
  const navigationInfo = useMemo(() => navigationData(Router), [Router]);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const sideNavVariants = {
    hidden: { x: "-100%" },
    visible: { x: "0%" },
  };

  export const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  <motion.div
    className="fixed top-0 left-0 w-[75%] h-full bg-hackathone-background-grey z-50 p-4"
    initial="hidden"
    animate={isSideNavOpen ? "visible" : "hidden"}
    variants={sideNavVariants}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  >
    <div className="flex flex-col gap-4">
      {navigationInfo.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer font-hackathoneSFProDisplay font-[400] hover:text-[#eafe07]"
          onClick={item.route}
        >
          {item.text}
        </div>
      ))}
    </div>
  </motion.div>;
};
