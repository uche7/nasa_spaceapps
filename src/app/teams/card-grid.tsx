import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { teamMembers } from "./teams.dto";
import XIcon from "@/assets/images/general/landing-page/x_logo.svg"
import InstaIcon from "@/assets/images/general/landing-page/instagram.png"
import InIcon from "@/assets/images/general/landing-page/linkedin.png"

const gridItems = [...teamMembers];

export const CardGrid = () => {
    const [selectedMember, setSelectedMember] = useState<number | null>(null);
    const modalRef = useRef<HTMLDivElement>(null); //

    const handleCardClick = (index: number) => {
        setSelectedMember(index);
    };

    // Close the popup
    const handleClosePopup = () => {
        setSelectedMember(null);
    };

    const handleOutsideClick = (e: any) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            handleClosePopup();
        }
    };

    const renderSocialIcons = (socials: any) => {
        return (
            <div className="flex justify-start lg:justify-center space-x-4 mt-4 ml-6">
                {socials.twitter && (
                    <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
                        <Image
                            className="cursor-pointer w-6 h-6 ms-2 MobileScreen:w-4 hover:scale-110"
                            src={XIcon}
                            height={80}
                            width={80}
                            alt={"XIcon"}
                        />
                    </a>
                )}
                {socials.linkedin && (
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                        <Image
                            className="cursor-pointer w-6 h-6 hover:scale-110"
                            src={InIcon}
                            height={80}
                            width={80}
                            alt={"InIcon"}
                        />
                    </a>
                )}
                {socials.github && (
                    <a href={socials.github} target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-white hover:text-gray-400 hover:scale-110" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.838 1.234 1.838 1.234 1.07 1.835 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.983-.399 3.003-.404 1.02.005 2.043.137 3.004.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.841 1.234 1.911 1.234 3.221 0 4.609-2.804 5.623-5.476 5.921.43.371.823 1.103.823 2.222v3.293c0 .321.218.694.824.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                    </a>
                )}
                {socials.instagram && (
                    <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                        <Image
                            className="cursor-pointer w-6 h-6 ms-2 MobileScreen:w-4 MobileScreen:h-4 hover:scale-110"
                            src={InstaIcon}
                            height={80}
                            width={80}
                            alt={"InstaIcon"}
                        />
                    </a>
                )}
            </div>
        );
    };

    return (
        <div className="overflow-hidden flex justify-center sm:block sm:justify-start">
            {/* Responsive grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-6">
                {gridItems.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-start justify-center text-center start-[4rem]`}
                            style={{ transition: "transform 0.3s ease-in-out" }} // Smooth transition
                            onClick={() => handleCardClick(index)}
                        >
                            {/* Container for the image */}
                            <div className="relative w-auto sm:w-80 max-h-[280px] max-w-[300px] rounded-2xl overflow-hidden">
                                <Image
                                    className="cursor-pointer rounded-2xl object-cover w-full h-auto"
                                    src={item.image}
                                    alt={item.name}
                                    // layout="fill"  // Ensures the image fills the container
                                    objectFit="cover"  // Keeps the aspect ratio
                                    quality={100}
                                />
                            </div>
                            {/* Container for the text */}
                            <div className="w-80 text-start text-lg text-slate-50 py-4 pl-2 MobileScreen:pl-4 text-hackathoneCabinetGrotesk">
                                <p className="font-bold">{item.name}</p>
                                <p className="text-red-400">{item.role}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Popup Modal */}
            {selectedMember !== null && (gridItems[selectedMember].socials.instagram || gridItems[selectedMember].socials.linkedin) && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={handleOutsideClick}>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="bg-gray-800 p-6 rounded-2xl shadow-lg w-11/12 sm:w-7/12 md:w-7/12 lg:w-6/12 xl:w-5/12 text-white relative"
                        ref={modalRef}
                    >
                        <button
                            className="absolute top-0 right-0 text-3xl text-white p-2"
                            onClick={handleClosePopup}
                        >
                            &times;
                        </button>

                        {/* Image */}
                        <div className="w-full flex justify-center">
                            <div className="relative w-80 h-80 rounded-xl overflow-hidden my-4">
                                <Image
                                    src={gridItems[selectedMember].image}
                                    layout="fill"
                                    objectFit="cover"
                                    alt={gridItems[selectedMember].name}
                                />
                            </div>
                        </div>

                        <div className="ml-6">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">
                                {gridItems[selectedMember].name}
                            </h2>
                            <p className="text-md md:text-lg mb-4 text-red-500 font-bold">
                                {gridItems[selectedMember].role}
                            </p>

                            {/* Display bio or other details */}
                            <p className="text-md mb-6">
                                {gridItems[selectedMember].bio ? (
                                    gridItems[selectedMember].bio.map((bioArray, index) => (
                                        <span key={index}>
                                            {bioArray.map((bio, subIndex) => (
                                                <span
                                                    key={subIndex}
                                                    className={bio.highlight ? "font-bold text-red-500" : ""}
                                                >
                                                    {bio.text}
                                                </span>
                                            ))}
                                        </span>
                                    ))
                                ) : (
                                    "Check for socials media below:"
                                )}
                            </p>
                        </div>


                        {/* Social Media Links */}
                        {renderSocialIcons(gridItems[selectedMember].socials)}
                    </motion.div>
                </div>
            )}
        </div>
    );
};
