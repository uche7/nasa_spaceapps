'use client';
import { motion } from "framer-motion";
import React from "react";
import { InstagramEmbed } from 'react-social-media-embed';

const handleJoinUsClick = () => {
    // Navigate to the specified Instagram post
    window.open("https://www.instagram.com/p/DALAFgJStm-/", "_blank"); // Opens the Instagram post in a new tab
};

const DesignBrew = () => {
    return (
        <>
            {/* Desktop view */}
            <div className="hidden lg:flex px-4 lg:px-10 flex-col lg:flex-row gap-6 pb-30">
                {/* Text on the left */}
                <div className="lg:w-1/2 w-full flex items-center justify-center mt-[1.5rem] lg:mr-[1rem] lg:ml-[3rem]">
                    <div className="items-center pb-24">
                        {/* Hero text */}
                        <div>
                            <h3 className="font-hackathoneCabinetGrotesk font-extrabold tracking-widest text-[18px]">IT ALL STARTS HERE</h3>
                            <h1 className="font-[700] text-[52px] text-hackathone-font-rocket-red tracking-tight leading-tight mt-[1rem] mb-[1rem]">
                                Ready to supercharge
                                <br /> your creative process?
                            </h1>
                        </div>

                        {/* Join button */}
                        {/* <a
                            className="bg-slate-50 text-black font-[620] py-4 px-3 rounded-lg w-32 h-14 italic text-center flex items-center justify-center gap-2 mt-[1.5rem]"
                            href="https://www.instagram.com/p/DALAFgJStm-/"
                            target="_blank" >
                            <span className="text-lg">Join Us</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </a> */}
                        <motion.button
                            onClick={handleJoinUsClick}
                            className="bg-slate-50 text-black font-[620] py-4 px-3 rounded-lg w-32 h-14 italic text-center flex items-center justify-center gap-2 mt-[1.5rem]  transition duration-200 ease-in-out"
                            initial={{ scale: 1 }} // Initial scale
                            whileHover={{ scale: 1.05 }} // Scale up on hover
                            whileTap={{ scale: 0.95 }} // Scale down on tap
                        >
                            <span className="text-lg">Join Us</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </motion.button>
                    </div>
                </div>

                {/* Instagram post on the right */}
                <div className="lg:w-1/2 w-full flex items-center justify-center rounded-lg lg:h-[500px] h-[500px] mb-4 mr-4 rounded-2xl border-none overflow-hidden mb-20">
                    <div className="w-full rounded-2xl overflow-hidden">
                        <InstagramEmbed
                            url="https://www.instagram.com/p/DALAFgJStm-/"
                            width={450} // Width for large screens
                            height={500} // Height for large screens
                            className="rounded-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile and Tablet view */}
            <div className="block lg:hidden px-4 sm:px-6 flex flex-col items-center gap-6 pb-30">
                {/* Hero text */}
                <div className="flex flex-col items-center justify-center text-center mt-[1.5rem] pb-12">
                    <h3 className="font-hackathoneCabinetGrotesk font-extrabold tracking-widest text-[18px]">IT ALL STARTS HERE</h3>
                    <h1 className="font-[700] text-[32px] sm:text-[40px] md:text-[48px] text-hackathone-font-rocket-red tracking-tight leading-tight mt-[1rem] mb-[1rem]">
                        Ready to supercharge
                        <br /> your creative process?
                    </h1>

                    {/* Join button */}
                    <div className="bg-slate-50 text-black font-[620] py-4 px-3 rounded-lg w-32 h-14 italic text-center flex items-center justify-center gap-2 mt-[1.5rem]">
                        <span className="text-lg">Join Us</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                        </svg>
                    </div>
                </div>

                {/* Instagram post below */}
                <div className="flex items-center justify-center rounded-lg h-[400px] md:h-[500px] w-full mb-4 border-none overflow-hidden mb-24">
                    <div className="w-full max-w-md md:max-w-lg rounded-2xl overflow-hidden flex items-center justify-center">
                        <InstagramEmbed
                            url="https://www.instagram.com/p/DALAFgJStm-/"
                            width={350} // Width for mobile
                            height={400} // Height for mobile
                            className="rounded-2xl"
                        />
                    </div>
                </div>
            </div>

        </>
    );
};

export default DesignBrew;
