import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { agenciesSlider } from "./general.dto";

const sliderItems = [...agenciesSlider];

export const AgenciesSlider = () => {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 lg:gap-8 md:gap-6 gap-4">
        {sliderItems.map((item, index) => (
          <div key={index} className="flex items-center justify-center px-4 py-2">
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
      </div>
    </div>
  );
};

{
  /* For reference:
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
      </motion.div>*/
}
