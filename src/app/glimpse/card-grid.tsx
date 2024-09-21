import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { data } from "./glimpse.dto";

const imageSwapper = [...data];

export const CardGrid = () => {
    return (
        <div className="overflow-hidden">
            <div className="flex mb-4 gap-6">
                <div className="flex flex-col w-2/5 gap-4">
                    {/* color for flexbox visualization, now just load the content in.*/}
                    {/*Overview: Block 1 */}
                    <div className="bg-gray-800 h-fit rounded-2xl border border-4  border-black justify-start text-start items-start">
                        <div className="bg-hackathone-font-rocket-red rounded-md border w-fit m-6 justify-center">
                            <motion.button
                                className="bg-hackathone-font-rocket-red rounded-md border justify-center hover:bg-red-600 transition duration-300 ease-in-out"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="block text-hackathoneCabinetGrotesk text-black hover:text-hackathone-font-rocket-red text-lg font-bold px-4 py-2">Overview</span>
                            </motion.button>
                        </div>
                        <div className="flex flex-row justify-center items-start gap-4 pb-4">
                            <div className="w-1/3 mx-4">
                                <h3 className="text-[3rem] font-bold">15+</h3>
                                <p className="">Subject Matter Expert mentors</p>
                            </div>
                            <div className="w-1/3">
                                <h3 className="text-[3rem] font-bold">140+</h3>
                                <p >Participants</p>
                            </div>
                            <div className="w-1/3">
                                <h3 className="text-[3rem] font-bold">2.5k</h3>
                                <p>Cash Prize</p>
                            </div>
                        </div>
                    </div>
                    {/*Revisit: Block 2 */}
                    <div className="bg-gray-800 h-fit rounded-2xl border border-4  border-black justify-start text-start items-start">
                        <div className="bg-hackathone-font-rocket-red rounded-md border w-fit m-6 justify-center">
                            <span className="block text-hackathoneCabinetGrotesk text-black text-lg font-bold px-4 py-2" >Revisit</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="text-start justify-bottom text-start px-6">
                                <p className="text-[2.5rem] leading-tight font-bold py-4"><span className="text-hackathone-font-rocket-red">Hackath</span>l<span className="text-hackathone-font-rocket-red">on</span>e <span className="block">2023</span></p>
                            </div>
                            <div className="p-4">
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-white rounded-full border p-4 hover:bg-hackathone-font-rocket-red transition duration-300 ease-in-out"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-6 text-black">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-3/5 bg-gray-800">
                    <div className="bg-hackathone-font-rocket-red rounded-md border w-fit m-6 justify-center">
                        <span className="block text-hackathoneCabinetGrotesk text-black text-lg font-bold px-4 py-2" >Moments to relive</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <div className="w-3/5 bg-gray-800 h-80">
                    <div className="bg-hackathone-font-rocket-red rounded-md border w-fit m-6 justify-center">
                        <span className="block text-hackathoneCabinetGrotesk text-black text-lg font-bold px-4 py-2" >Photo Wall</span>
                    </div>
                </div>
                <div className="w-2/5 bg-gray-800 h-80">
                    <div className="bg-hackathone-font-rocket-red rounded-md border w-fit m-6 justify-center">
                        <span className="block text-hackathoneCabinetGrotesk text-black text-lg font-bold px-4 py-2" >Volunteers</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
