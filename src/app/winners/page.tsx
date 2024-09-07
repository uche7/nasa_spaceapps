"use client";

import React from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import WinnerDetails from "./Cards";
import NavigationBar from "../general/navigation-bar";
import Footer from "../general/footer";
import BackToTopButton from "../general/back-to-top"

const Winners = () => {
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
                    <WinnerDetails />
                    <BackToTopButton />
                    <Footer />
                </div>
            </div>
        </>

    );
};

export default Winners;