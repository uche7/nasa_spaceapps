"use client";

import React from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import { motion } from "framer-motion";
// import CardGrid from "./CardGrid";
import NavigationBar from "../general/navigation-bar";
import Footer from "../general/footer";
import ItineraryHeroPage from "./hero-page";
import ItineraryPage from "./itinerary"

const Itinerary = () => {
    /** Desktop View */


    return (

        <>
            <div className="relative min-h-screen bg-black text-white">
                <div className="fixed inset-0 z-0">
                    <Canvas camera={{ position: [0, 0, 1] }}>
                        <CloudParticleBg />
                    </Canvas>
                </div>
                <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
                    <NavigationBar />
                    <ItineraryHeroPage />
                    <ItineraryPage />
                    <Footer />
                </div>
            </div>
        </>

    );
};

export default Itinerary;