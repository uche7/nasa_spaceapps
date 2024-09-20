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
                    <div className="bg-gray-800 h-fit rounded-2xl border border-4  border-black justify-start text-start items-start">
                        <div className="bg-hackathone-font-rocket-red rounded-md border w-fit m-6 justify-center">
                            <span className="block text-hackathoneCabinetGrotesk text-black text-lg font-bold px-4 py-2" >Overview</span>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-4 pb-4">
                            <div className="w-1/3 mx-4">
                                <h3 className="text-[3rem] text-hackathone-font-rocket-red font-bold">15+</h3>
                                <p className="">Subject Matter Expert mentors</p>
                            </div>
                            <div className="w-1/3">
                                <h3 className="text-[3rem] text-hackathone-font-rocket-red font-bold">140+</h3>
                                <p >Participants</p>
                            </div>
                            <div className="w-1/3">
                                <h3 className="text-[3rem] text-hackathone-font-rocket-red font-bold">2.5k</h3>
                                <p>Cash Prize</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 h-80">
                        <div className="bg-hackathone-font-rocket-red rounded-md border w-fit m-6 justify-center">
                            <span className="block text-hackathoneCabinetGrotesk text-black text-lg font-bold px-4 py-2" >Location</span>
                        </div>
                        <div className="h-full text-start justify-bottom">
                            <p className="text-2xl text-hackathone-font-rocket-red">Technological University of the Shannon</p>
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
