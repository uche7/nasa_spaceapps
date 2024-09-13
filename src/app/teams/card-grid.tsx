import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { agenciesSlider } from "../general/general.dto";

const sliderItems = [...agenciesSlider];

export const CardGrid = () => {
    const [imgSrcs, setImgSrcs] = useState(
        sliderItems.map((item) => item.img)
    );
    // Handle mouse enter event to change the image
    const handleMouseEnter = (index: number) => {
        const newImgSrcs = [...imgSrcs];
        newImgSrcs[index] = sliderItems[index].imgOrigin || sliderItems[index].img;
        setImgSrcs(newImgSrcs);
    };
    // Handle mouse leave event to revert the image
    const handleMouseLeave = (index: number) => {
        const newImgSrcs = [...imgSrcs];
        newImgSrcs[index] = sliderItems[index].img;
        setImgSrcs(newImgSrcs);
    };
    return (
        <div className="overflow-hidden">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-4 lg:gap-8 md:gap-6 gap-4">
                {sliderItems.map((item, index) => {
                    // Initialize the image source state for each item
                    return (
                        <div
                            key={index}
                            className={`flex items-center justify-center px-4 py-2 max-h-[100px] ${index === sliderItems.length - 1 ? "col-span-2 md:col-span-1 lg:col-span-2 sm:scale-150" : ""
                                }`}
                            style={{ transition: "transform 0.3s ease-in-out" }} // Add smooth transition

                        >
                            <Image
                                className="cursor-pointer transform transition-transform duration-300 lg:hover:scale-125 hover:scale-110 sm:w-[80px] lg:min-h-[20px]"
                                src={imgSrcs[index]}
                                width={120}
                                height={120}
                                alt={"Agencies Icon"}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                onClick={item.route}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
