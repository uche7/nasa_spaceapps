"use client";

import React from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import { motion } from "framer-motion";
import HeroImage from "@/assets/images/general/landing-page/spaceapps_Logo.png";
import NavigationBar from "../general/navigation-bar";
import Footer from "../general/footer";

const ItineraryHeroPage = () => {
    /** Desktop View */
    return (

        <>
            <div className="relative min-h-screen">
                <div className="w-[40%] mx-[8.06%] mt-[2rem] flex flex-col items-start text-start">
                    <div>
                        <Image unoptimized src={HeroImage} alt="Hero Image" width={180} />
                    </div>
                    <div className="mt-[3rem]">
                        <p className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[65.08px] leading-[73.26px]">
                            NASA space apps Athlone Itinerary
                        </p>
                        <p className="font-hackathoneCabinetGrotesk font-bold text-green-300 pt-[0.5rem]">
                            October 4th - October 6th 2024
                        </p>
                    </div>

                </div>

            </div>
        </>

    );
};

export default ItineraryHeroPage;