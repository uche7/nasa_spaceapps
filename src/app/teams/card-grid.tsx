import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { teamMembers } from "./teams.dto";

const gridItems = [...teamMembers];

export const CardGrid = () => {
    const [selectedMember, setSelectedMember] = useState<number | null>(null);
    const handleCardClick = (index: number) => {
        setSelectedMember(index);
    };

    // Close the popup
    const handleClosePopup = () => {
        setSelectedMember(null);
    };
    return (
        <div className="overflow-hidden">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-4">
                {gridItems.map((item, index) => {

                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-start justify-center text-center start-[4rem]`}
                            style={{ transition: "transform 0.3s ease-in-out" }} // Add smooth transition
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="rounded-xl w-80 h-80 bg-gray-800">
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
                            <div className="w-80 text-center text-lg text-slate-50 py-2">
                                <p>{item.name}</p>
                                <p>{item.role}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Popup Modal */}
            {selectedMember !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50  ">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="bg-white p-6 rounded-lg shadow-lg w-10/12 max-w-lg text-black relative"
                    >
                        <button
                            className="absolute top-2 right-2 text-2xl"
                            onClick={handleClosePopup}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">
                            {gridItems[selectedMember].name}
                        </h2>
                        <p className="text-lg mb-4">
                            {gridItems[selectedMember].role}
                        </p>
                        <p className="text-md">
                            {/* Display bio or other details */}
                            {gridItems[selectedMember].details ? (
                                gridItems[selectedMember].details.map((detailArray, index) => (
                                    <span key={index}>
                                        {detailArray.map((detail, subIndex) => (
                                            <span
                                                key={subIndex}
                                                className={detail.highlight ? "font-bold text-red-500" : ""}
                                            >
                                                {detail.text}
                                            </span>
                                        ))}
                                    </span>
                                ))
                            ) : (
                                "No bio available."
                            )}
                        </p>
                    </motion.div>
                </div>
            )}
        </div>
    );
};
