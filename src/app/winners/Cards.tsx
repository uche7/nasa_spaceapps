"use client";
import React from 'react';
import Image, { StaticImageData } from "next/image";
import { useRouter, useSearchParams } from 'next/navigation';
import { winners } from "./winners.dto";
import { IconButton } from "@mui/material";
import BackToTopButton from "../general/back-to-top"
import BackButton from "@/assets/images/general/landing-page/back-button.svg"
import Winners from "@/assets/images/general/landing-page/winners/winners.png";
import Trophy from "@/assets/images/general/landing-page/trophy_draw.png"
import Tooltip from "../general/tooltip"

const WinnerDetails: React.FC = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col gap-8 DesktopScreen:mx-[8.06%] TabletScreen:mx-[4.06%] overflow-x-hidden">
        {/* Circular icon placeholder */}
        <div className="relative w-full flex justify-center items-center TabletScreen:hidden MobileScreen:hidden">
          {/* Circular icon placeholder */}
          <div className="absolute flex justify-center items-center h-48 w-52 right-0 translate-y-44">
            {/* Neon-like inner circular border */}
            <div className="absolute rounded-full h-[20rem] w-[20rem] border-8 border-[#d6ff00] opacity-75 z-[-7]" />
            {/* Middle circle with medium-dark border */}
            <div className="absolute rounded-full h-[26rem] w-[26rem] border-[6px] border-[#EAFE0780] opacity-75 z-[-108]" />
            {/* Outer circle with darker border */}
            <div className="absolute rounded-full h-[32rem] w-[32rem] border-4 border-[#EAFE0740] opacity-95 z-[-109]" />
            {/* Outer fading circle with darkest border */}
            <div className="absolute rounded-full h-[38rem] w-[38rem] border-2 border-[#EAFE0740] opacity-75 z-[-100]" />
            {/* Trophy Icon */}
            <div className="relative z-0">
              <Image
                src={Trophy}
                alt="Trophy"
                width={400}
                height={400}
                className="max-w-full" // Ensures the image doesn't cause overflow
              />
            </div>
          </div>
        </div>
      
        {/* Introductory page */}
        <div className='flex flex-col TabletScreen:mt-[2rem] DesktopScreen:mt-[3rem] MobileScreen:mt-[2rem]'>
          {/* Back Button */}
          {/* Desktop */}
          <Tooltip text="Back to Home">
            <IconButton
              size="small"
              color="primary"
              onClick={() => router.push("/")}
              className="object-left text-white hover:text-hackathone-font-rocket-red TabletScreen:hidden MobileScreen:hidden"
              edge="start"
              sx={{
                width: '3rem',
                height: '3rem',
                fontSize: '2.5rem',
                position: 'relative',
                top: '0',
                left: '-0.5rem',
              }}
              aria-label="back to home"
            >
              <Image
                width={40}
                height={40}
                src={BackButton}
                alt="Back to Home"
              />
            </IconButton>
          </Tooltip>
      
          {/* Rest of the content */}
        </div>
      
        {/* Cards for Winners */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 overflow-x-hidden"> {/* Added overflow-x-hidden */}
          {winners.map((winner, index) => (
            <div
              key={index}
              className={`relative border-2 border-gray-700 rounded-3xl flex flex-col mt-2 overflow-hidden`}
            >
              {/* Background Layer with Opacity */}
              <div className="absolute inset-0 bg-[#8F8F8F1A] bg-opacity-50 backdrop-blur-md z-0 rounded-3xl"></div>
              
              {/* Image */}
              <div className="relative w-full h-[300px] md:h-[400px] flex justify-center z-10 p-7">
                {winner.image && (
                  <Image
                    src={winner.image}
                    alt={winner.name}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover max-w-full" // Added max-w-full
                  />
                )}
              </div>
      
              {/* Title, Name, and Prize */}
              <div className="relative w-full py-2 px-4 lg:px-8 xl:px-12 z-10 text-left">
                {/* Title */}
                <div className="text-4xl MobileScreen:text-3xl font-bold">
                  <h1 className="text-4xl MobileScreen:text-3xl text-hackathone-font-rocket-red">
                    {winner.title}
                  </h1>
                </div>
      
                {/* Name */}
                <div className="text-2xl MobileScreen:text-xl font-bold mt-2">
                  <h2>{winner.name}</h2>
                </div>
      
                {/* Prize */}
                <div className="mt-4 text-white font-bold py-2 px--7 inline-block">
                  Prize: 
                  <span className="text-hackathone-font-rocket-red">
                    {winner.prize}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    );
};

export default WinnerDetails;
