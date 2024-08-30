import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { agenciesSlider } from "./general.dto";

const sliderItems = [...agenciesSlider];

export const AgenciesSlider = () => {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-4 lg:gap-8 md:gap-6 gap-4">
        {sliderItems.map((item, index) => {
          // Initialize the image source state for each item
          const [imgSrc, setImgSrc] = useState(item.img)

          return (
            <div
              key={index}
              className={`flex items-center justify-center px-4 py-2 max-h-[100px] ${index === sliderItems.length - 1 ? "col-span-2 md:col-span-1 lg:col-span-2 sm:scale-150" : ""
                }`}
              style={{ transition: "transform 0.3s ease-in-out" }} // Add smooth transition

            >
              <Image
                className="cursor-pointer transform transition-transform duration-300 lg:hover:scale-125 sm:w-[80px]"
                src={imgSrc}
                width={120}
                height={120}
                alt={"Agencies Icon"}
                onMouseEnter={() => setImgSrc(item.imgOrigin || item.img)}
                onMouseLeave={() => setImgSrc(item.img)}
              />
            </div>
          );
        })}
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
