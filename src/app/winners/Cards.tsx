"use client";
import React from 'react';
import Image, { StaticImageData } from "next/image";
import { winners } from "./winners.dto";
import Winners from "@/assets/images/general/landing-page/winners/winners.png";

const WinnerDetails: React.FC = () => {
    return (
        <div className="flex flex-col gap-8 DesktopScreen:mx-[8.06%] TabletScreen:mx-[4.06%]">
            {/*Introductory  page*/}
            <div className='flex flex-col TabletScreen:mt-[2rem] DesktopScreen:mt-[3rem]'>
                <h1 className='text-[52px] font-bold leading-tight'>Cheers to the winners of <span className='text-hackathone-font-rocket-red'>Hackath</span>l<span className='text-hackathone-font-rocket-red'>on</span>e<span className='text-hackathone-font-rocket-red'>’23</span></h1>

                <div
                    className="border-1 rounded-lg overflow-hidden flex flex-col-reverse md:flex-row"
                >
                    {/* Image */}
                    <div className="py-8 w-full md:w-1/2 flex justify-center lg:justify-start lg:mt-8">
                        <Image
                            className='rounded-2xl'
                            src={Winners}
                            alt='Winners'
                            width={550}
                            height={300}
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 py-8  flex justify-center items-center">
                        <div className="font-sefarvestCabinetGrotesk text-slate-50 text-lg leading-relaxed text-start pl-8 pr-8">
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
                </div>
            </div>

            {/*Card for Winners */}
            {winners.map((winner, index) => (
                <div
                    key={index}
                    className={`border-1 rounded-lg overflow-hidden flex my-8 ${index % 2 == 0 ? 'flex-col lg:flex-row-reverse' : 'flex-col-reverse md:flex-row'}`}
                >
                    {/* Image */}
                    <div className={`py-8 w-full md:w-1/2 flex ${index % 2 == 0 ? 'lg:justify-end justify-center' : 'lg:justify-start justify-center'}`}>
                        {winner.image && (
                            <Image
                                src={winner.image}
                                alt={winner.name}
                                // layout="responsive"
                                width={550}
                                height={300}
                            />
                        )}
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 py-8">
                        <h1 className='text-4xl font-bold'><span className='text-[88px] text-hackathone-font-rocket-red'>{winner.title}</span>  <span className=''>{winner.name}</span></h1>
                        <div className={`pt-12 text-lg leading-relaxed text-start  pr-8  ${index % 2 == 0 ? 'pl-2' : 'pr-4'}`}>
                            {winner.details.map((paragraph, paragraphIndex) => (
                                <p
                                    className='font-sefarvestCabinetGrotesk text-slate-50'
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
                            <div className="mt-8 text-xl text-hackathone-font-rocket-red font-bold">
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
