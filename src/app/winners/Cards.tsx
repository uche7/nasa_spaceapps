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
        <div className="flex flex-col gap-8 DesktopScreen:mx-[8.06%] TabletScreen:mx-[4.06%]">
            {/* Circular icon placeholder*/}
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
                        />
                    </div>
                </div>
            </div>
            {/*Introductory  page*/}
            <div className='flex flex-col TabletScreen:mt-[2rem] DesktopScreen:mt-[3rem] MobileScreen:mt-[2rem]'>
                {/*Back Button*/}
                {/*Desktop*/}
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
                        aria-label="back to home">
                        <Image
                            width={40}
                            height={40}
                            src={BackButton}
                            alt="Back to Home"
                        />
                    </IconButton>
                </Tooltip>

                {/*Tablet Button*/}
                <div className='DesktopScreen:hidden MobileScreen:hidden'>
                    <IconButton
                        size="small"
                        color="primary"
                        onClick={() => router.push("/")}
                        className="object-left text-white hover:text-hackathone-font-rocket-red"
                        edge="start"
                        sx={{
                            width: '2.5rem',
                            height: '2.5rem',
                            fontSize: '2.5rem',
                            position: 'relative',
                            top: '0',
                            left: '0rem',
                        }}
                        aria-label="back to home">
                        <Image
                            width={80}
                            height={80}
                            src={BackButton}
                            alt="Back to Home"
                        />
                    </IconButton>
                </div>

                {/*Mobile Button*/}
                <div className='DesktopScreen:hidden TabletScreen:hidden'>
                    <IconButton
                        size="small"
                        color="primary"
                        onClick={() => router.push("/")}
                        className="object-left text-white hover:text-hackathone-font-rocket-red"
                        edge="start"
                        sx={{
                            width: '2.5rem',
                            height: '2.5rem',
                            fontSize: '2.5rem',
                            position: 'relative',
                            top: '0',
                            left: '0.5rem',
                        }}
                        aria-label="back to home">
                        <Image
                            width={80}
                            height={80}
                            src={BackButton}
                            alt="Back to Home"
                        />
                    </IconButton>
                </div>

                <h1 className='text-[32px] md:text-[52px] font-bold leading-tight text-hackathone-font-rocket-red MobileScreen:px-4 TabletScreen:px-0 overflow-hidden mt-4'>Dared it & did it </h1>
                <p className='pt-4 text-md md:text-lg text-slate-50 MobileScreen:px-4'>Meet the winners on <span className='text-hackathone-font-rocket-red font-bold'>HackAth</span>l<span className='text-hackathone-font-rocket-red font-bold'>on</span>e&apos;23</p>
                {/* Image for Mobile and Tablet*/}
                {/* <div className="py-8 px-4 w-full flex justify-center DesktopScreen:hidden">
                    <Image
                        layout='responsive'
                        className='rounded-2xl'
                        src={Winners}
                        alt='Winners'
                        width={550}
                        height={300}
                    />
                </div> */}
                {/* <div
                    className="border-1 rounded-lg overflow-hidden flex flex-col-reverse md:flex-row"
                >
                    {/* Image */}
                {/* <div className="py-8 w-full lg:w-1/2 flex justify-center lg:justify-start lg:mt-8 MobileScreen:hidden TabletScreen:hidden">
                        <Image
                            className='rounded-2xl'
                            src={Winners}
                            alt='Winners'
                            width={550}
                            height={300}
                        />
                    </div> */}

                {/* Content */}
                {/* <div className="w-full lg:w-1/2 lg:py-8  flex justify-center items-center">
                        <div className="font-sefarvestCabinetGrotesk text-slate-50 text-lg leading-relaxed text-start px-8 MobileScreen:px-4">
                            <p
                                className=''
                            >
                                SpaceApps Athlone, also known as HackAthlone, is one of the 300+ locations for this year's NASA SpaceApps Challenge. Technology University of the Shannon takes pride in hosting 200 participants on their campus for 48 hours to collaborate on 30 problem statements that cater to all STEAM fields.
                            </p>
                            <br />
                            <p>
                                HackAthlone stands as the sole in-person Hackathon location in Ireland for this event, offering exciting prizes, goodies, and all necessary technical components and F&B provisions.
                                <span className="text-hackathone-font-rocket-red font-[600]">

                                </span>
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>

            {/*Card for Winners */}
            {winners.map((winner, index) => (
                <div
                    key={index}
                    className={`relative border-2 border-gray-700 rounded-3xl flex mt-2 ${index % 2 == 0 ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse'} ${index == 2 ? 'lg:mb-12' : ''}`}
                >
                    {/* Background Layer with Opacity */}
                    <div className="absolute inset-0 bg-[#8F8F8F1A] bg-opacity-50 backdrop-blur-md z-0 rounded-3xl"></div>
                    {/* Image */}
                    <div className={`relative p-4 md:p-8 w-full lg:w-1/3 flex ${index % 2 == 0 ? 'lg:justify-start justify-center lg:pr-0' : 'lg:justify-end justify-center lg:pl-0'} z-10`}>
                        {winner.image && (
                            <Image
                                src={winner.image}
                                alt={winner.name}
                                // layout="responsive"
                                width={500}
                                height={300}
                            />
                        )}
                    </div>

                    {/* Content */}
                    <div className="relative w-full lg:w-2/3 py-8 MobileScreen:px-4 TabletScreen:px-4 lg:px-8 z-10">
                        <div className='text-4xl MobileScreen:text-3xl font-bold flex flex-row items-end'>
                            <h1 ><span className='text-[88px] MobileScreen:text-[68px] text-hackathone-font-rocket-red'>{winner.title}</span></h1>
                            <h1 className='pl-4 MobileScreen:pl-2 whitespace-pre-line'><span className=''>{winner.name}</span></h1>
                        </div>


                        <div className={`pt-6 md:pt-8 text-lg leading-relaxed text-start pr-2  ${index % 2 == 0 ? 'pr-4 pl-4' : 'pl-2'}`}>
                            {winner.details.map((paragraph, paragraphIndex) => (
                                <p
                                    className='font-sefarvestCabinetGrotesk text-slate-50 mb-8'
                                    key={paragraphIndex}
                                >
                                    {paragraph.map((part, partIndex) => (
                                        part.highlight ? (
                                            <span key={partIndex} className="text-hackathone-font-rocket-red font-[600]">
                                                {part.text}
                                            </span>
                                        ) : (
                                            <span key={partIndex}>
                                                {part.text}
                                            </span>
                                        )
                                    ))}
                                </p>
                            ))}
                            <div className="mt-4 text-lg bg-hackathone-font-rocket-red text-black font-bold py-2 px-6 rounded-full inline-block">
                                Prize: {winner.prize}
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default WinnerDetails;
