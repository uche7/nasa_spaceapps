"use client";
import React from 'react';
import Image, { StaticImageData } from "next/image";
import { winners } from "./winners.dto";

const WinnerDetails: React.FC = () => {
    return (
        <div className="winner-cards">
            {winners.map((winner, index) => (
                <div
                    key={index}
                    className={`winner-card flex ${index % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col-reverse md:flex-row'}`}
                >
                    {/* Image */}
                    <div className="winner-image w-full md:w-1/2">
                        {winner.image && (
                            <Image
                                src={winner.image} // Safely access the image
                                alt={winner.name}
                                layout="responsive"
                                width={500}
                                height={300}
                                className="object-cover"
                            />
                        )}
                    </div>

                    {/* Content */}
                    <div className="winner-content w-full md:w-1/2 p-4">
                        <h1 className='text-2xl font-bold'>{winner.title} Place: {winner.name}</h1>
                        <div className="details mt-4">
                            {winner.details.map((paragraph, paragraphIndex) => (
                                <p
                                    className='font-sefarvestCabinetGrotesk'
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
                        </div>
                        <div className="prize mt-4 text-xl font-semibold">
                            Prize: {winner.prize}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WinnerDetails;
