'use client';
import { motion } from "framer-motion";
import React from "react";
import { InstagramEmbed } from 'react-social-media-embed';
import HeroImage from "@/assets/images/general/landing-page/hero_icon.png";
import DesignBrewImage from "@/assets/images/general/landing-page/DesignBrewLogo.png";
import Image from "next/image";


const StarWithCircles = () => {
    // Function to calculate star points
    const calculateStarPoints = (centerX: number, centerY: number, arms: number, outerRadius: number, innerRadius: number) => {
        let points = [];
        for (let i = 0; i < arms * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (Math.PI * i) / arms;
            points.push([
                centerX + Math.cos(angle) * radius,
                centerY + Math.sin(angle) * radius
            ]);
        }
        return points.map(point => point.join(',')).join(' ');
    };

   
    const centerX = 200; // Center of the star
    const centerY = 200; // Center of the star
    const arms = 20; // Number of arms
    const outerRadius = 200; // Outer radius (half of 400)
    const innerRadius = 122; // Inner radius (half of 244)

    const starPoints = calculateStarPoints(centerX, centerY, arms, outerRadius, innerRadius);

    return (
        <div className="absolute bottom-[-200px] left-[-5px] w-[400px] h-[400px] overflow-hidden lg:block hidden"> {/* Adjusted container size */}
            <svg
                viewBox="0 0 400 400" // Adjusted viewBox to match new dimensions
                className="absolute left-[-200px] top-0 w-full h-full" // Shift SVG left to push half the star out
            >
                <polygon
                    points={starPoints}
                    fill="yellow"
                    stroke="yellow"
                    strokeWidth="1"
                />
                <circle
                    cx={centerX}
                    cy={centerY}
                    r="28"   // Size of the inner black circle (half of 60)
                    fill="black"
                />
                <circle
                    cx={centerX}
                    cy={centerY}
                    r="60"  // Size of the outer dashed circle (half of 120)
                    fill="none"
                    stroke="black"
                    strokeWidth="4"
                    strokeDasharray="25 10"  // Dash length
                />
            </svg>
        </div>
    );
};




const handleJoinUsClick = () => {
    window.open("https://www.meetup.com/designbrew-design-meetup-events/events/303563168/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link", "_blank"); 
};

const DesignBrew = () => {
    return (
        <>
            {/* Desktop view */}
            {/* logo row */}

            <div className="relative lg:h-[600px] w-full">
                <div className="hidden lg:flex px-4 lg:px-10 flex-col lg:flex-row gap-6 pb-30">
                    {/* Text on the left */}
                    <div className="lg:w-1/2 w-full flex items-center justify-center  lg:mr-[1rem] pb-20">

                        <div className="items-center ">
                            {/* Hero text */}
                            <div className="flex justify-between items-center mb-12">
                                <a className="cursor-pointer" href="/">
                                    <Image width={100} src={HeroImage} alt="Hero Image" />
                                </a>
                                <a className="cursor-pointer " href="/">
                                    <Image width={100} src={DesignBrewImage} alt="DesignBrew Image" />
                                </a>
                            </div>
                            <div>
                                <h3 className="font-hackathoneCabinetGrotesk font-extrabold tracking-widest text-[18px]">IT ALL STARTS HERE</h3>
                                <h1 className="font-[700] text-[52px] text-hackathone-font-rocket-red tracking-tight leading-tight mt-[1rem] mb-[1rem]">
                                    Ready to supercharge
                                    <br /> your creative process?
                                </h1>
                            </div>

                            {/* Join button */}

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
                    <div className="lg:w-1/2 w-full flex items-center justify-center rounded-lg lg:h-[550px] h-[500px] mb-4 mr-4 rounded-2xl border-none overflow-hidden mb-20">
                        <div className="w-full rounded-2xl overflow-hidden">
                            <InstagramEmbed
                                url="https://www.instagram.com/p/DALAFgJStm-/"
                                width={450} // Width for large screens
                                height={500} // Height for large screens
                                className="rounded-2xl ml-6"
                            />
                        </div>
                    </div>

                </div>
                <StarWithCircles />

            </div>

            {/* Mobile and Tablet view */}
            <div className="block lg:hidden px-4 sm:px-6 flex flex-col items-center gap-6 pb-30">
                {/* Hero text */}
                <div className="flex flex-col items-center justify-center text-center mt-[1.5rem] pb-12">
                    <div className="flex justify-between items-center pb-6 ">
                        <a className="cursor-pointer mr-4" href="/">
                            <Image width={100} src={HeroImage} alt="Hero Image" />
                        </a>
                        <a className="cursor-pointer ml-4" href="/">
                            <Image width={100} src={DesignBrewImage} alt="DesignBrew Image" />
                        </a>
                    </div>
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
