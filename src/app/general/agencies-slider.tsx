import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { agenciesSlider } from "./general.dto";

const sliderItems = [...agenciesSlider, ...agenciesSlider];

export const AgenciesSlider = () => {
  return (
    <div className="my-24 overflow-hidden">
      <motion.div
        className="flex flex-row items-center lg:gap-[94px] gap-4"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }} // To Move to half the width of the duplicated items
        transition={{
          duration: 30, // To Adjust duration for scroll speed
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {sliderItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 px-2">
            <Image
              className="cursor-pointer"
              src={item.img}
              width={120}
              height={120}
              alt={"Agencies Icon"}
              onClick={item.route}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
