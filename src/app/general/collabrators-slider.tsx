import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { collabratorsSlider } from "./general.dto";

const sliderItems = [...collabratorsSlider];

export const CollabratorsSlider = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="grid grid-cols-2 grid-rows-2 
                   sm:grid-cols-2 sm:grid-rows-2
                   md:grid-cols-2 md:grid-rows-2
                   lg:grid-cols-2 lg:grid-rows-2
                   gap-4"
        style={{
          gridTemplateAreas: `
            "top top"
            "bottom-left bottom-right"
          `,
        }}
      >
        {sliderItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-4 py-2"
            style={{
              gridArea:
                index === 0 ? 'top' : index === 1 ? 'bottom-left' : 'bottom-right',
              // Make the first image larger
              height: index === 0 ? '200px' : '100px',  // Adjust the height as needed
            }}
          >
            <Image
              className={`cursor-pointer ${index === 0 ? 'w-2/3' : 'w-full'}`} // Make the first image take up 2/3 of its container width
              src={item.img}
              width={index === 0 ? 200 : 100} // Adjust the width as needed
              height={index === 0 ? 200 : 100} // Adjust the height as needed
              alt={"Agencies Icon"}
              onClick={item.route}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
