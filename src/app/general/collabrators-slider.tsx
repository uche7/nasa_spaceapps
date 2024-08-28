import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { collabratorsSlider } from "./general.dto";

const sliderItems = [...collabratorsSlider];

export const CollabratorsSlider = () => {
  return (
   <div className="overflow-hidden">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-4">
        {sliderItems.map((item, index) => (
          <div key={index} className="flex items-center justify-center px-4 py-2">
            <Image
              className="cursor-pointer"
              src={item.img}
              width={100}
              height={100}
              alt={"Agencies Icon"}
              onClick={item.route}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
