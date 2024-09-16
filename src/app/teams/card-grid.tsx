import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { teamMembers } from "./teams.dto";

const sliderItems = [...teamMembers];

export const CardGrid = () => {
    // Handle mouse enter event to change the image
    const handleMouseEnter = (index: number) => {

    };
    // Handle mouse leave event to revert the image
    const handleMouseLeave = (index: number) => {
    };
    return (
        <div className="overflow-hidden">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-8 md:gap-6 gap-4">
                {sliderItems.map((item, index) => {

                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center p-2 start-[4rem]`}
                            style={{ transition: "transform 0.3s ease-in-out" }} // Add smooth transition
                        >
                            <div className="rounded-full w-40 h-40 bg-white">
                                {/* <Image
                                    className="cursor-pointer transform transition-transform duration-300 lg:hover:scale-125 hover:scale-110 sm:w-[80px] lg:min-h-[20px]"
                                    src={imgSrcs[index]}
                                    width={120}
                                    height={120}
                                    alt={"Agencies Icon"}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                    onClick={item.route}
                                /> */}
                            </div>
                            <div className="text-lg text-slate-50 py-2">
                                <p>{item.name}</p>
                                <p>{item.role}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
