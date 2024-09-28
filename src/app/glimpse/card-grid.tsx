import React, { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import Image from "next/image";
import { OverviewImages, RevisitImages, MomentsImages, PhotoWallImages, VolunteerImages } from "./glimpse.dto";
import router, { useRouter } from "next/router";
import Slider from "react-slick";
import Code from "@/assets/images/general/landing-page/Code.png"
import PlayButon from "@/assets/images/general/landing-page/glimpse/playbutton.png"

const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
    cssEase: "ease-out",
    swipe: false,
    draggable: false,
};
// navigate to old website
interface CountUpProps {
    target: number;
    className?: string;
    suffix?: string;
    duration?: number;
    decimals?: number;
}

export const CardGrid = () => {
    const CountUp = ({ target, className, suffix = "", duration = 3, decimals = 0 }: CountUpProps) => {
        const [value, setValue] = useState(0);
        const [hasReachedTarget, setHasReachedTarget] = useState(false);

        useEffect(() => {
            const controls = animate(0, target, {
                duration: duration,
                onUpdate: (v) => setValue(parseFloat(v.toFixed(decimals))),
                onComplete: () => setHasReachedTarget(true),
            });

            return () => controls.stop(); // Cleanup animation on unmount
        }, [target]);

        return (
            <motion.h3
                className={className}
                initial={{ y: 10, opacity: 0 }}
                animate={hasReachedTarget ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                {value}{suffix}
            </motion.h3>
        );
    };
    return (
        <div className="overflow-hidden lg:gap-8 TabletScreen:gap-6 gap-4">
            <div className="flex mb-4 lg:gap-8 TabletScreen:gap-6 gap-4 TabletScreen:flex-col MobileScreen:flex-col">
                <div className="flex lg:flex-col lg:w-2/5 lg:gap-8 TabletScreen:gap-6 gap-4 flex-row w-full MobileScreen:flex-col">
                    {/*Overview: Block 1 */}
                    <div className="bg-gray-800 h-fit rounded-2xl border border-transparent justify-start text-start items-start lg:w-full TabletScreen:w-1/2 MobileScreen:w-full">
                        <div className="bg-hackathone-font-rocket-red rounded-md border w-fit lg:m-6 m-4  justify-center">
                            <motion.button
                                className="bg-hackathone-font-rocket-red rounded-md border justify-center ease-in-out"
                                whileHover={{
                                    scale: 1.1,
                                }}
                                whileTap={{
                                    scale: 0.9,
                                }}
                            >
                                <span className="block text-hackathoneCabinetGrotesk text-black lg:text-lg text-md font-bold px-4 py-2">Overview</span>
                            </motion.button>
                        </div>
                        <div className="flex md:flex-row flex-wrap md:flex-nowrap justify-center MobileScreen:justify-start items-start gap-4 pb-4 MobileScreen:pl-4">
                            <div className="md:w-1/3 md:mx-4">
                                <CountUp target={15} suffix="+" duration={2} className="lg:text-[3rem] text-[2.5rem] font-bold" />
                                <p className="">Subject Matter <span className="hidden lg:block">Expert mentors</span></p>
                            </div>
                            <div className="md:w-1/3">
                                <CountUp target={140} suffix="+" duration={5} className="lg:text-[3rem] text-[2.5rem] font-bold" />
                                <p >Participants</p>
                            </div>
                            <div className="md:w-1/3">
                                <CountUp target={2.5} suffix="k" duration={4} decimals={1} className="lg:text-[3rem] text-[2.5rem] font-bold" />
                                <p>Cash Prize</p>
                            </div>
                        </div>
                    </div>
                    {/*Revisit: Block 2 */}
                    <div className="bg-gray-800 h-fit rounded-2xl border border-4  border-black justify-start text-start items-start relative overflow-hidden lg:w-full TabletScreen:w-1/2 MobileScreen:w-full">
                        {/* Image as background cover */}
                        <Image
                            src={Code}
                            alt="Code"
                            layout="fill"  // Ensures the image scales with the parent div size
                            objectFit="cover"    // Ensures the image covers the container without distortion
                            className="rounded-t-2xl"  // Add rounded corners to match the parent div
                        />
                        {/* Content */}
                        <div className="relative z-10">
                            <div className="bg-hackathone-font-rocket-red rounded-md border w-fit lg:m-6 m-4 justify-center">
                                <motion.button
                                    className="bg-hackathone-font-rocket-red rounded-md border justify-center ease-in-out"
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                    whileTap={{
                                        scale: 0.9,
                                    }}
                                    onClick={() =>
                                        window.open(
                                            "https://66b8783ce930a118fc45939c--voluble-conkies-fba672.netlify.app/",
                                            "_blank"
                                        )
                                    }
                                >
                                    <span className="block text-hackathoneCabinetGrotesk text-black lg:text-lg text-md font-bold px-4 py-2">Revisit</span>
                                </motion.button>
                            </div>
                        </div>
                        {/* Text */}
                        <div className="relative flex justify-between items-end z-10">
                            <div className="text-start justify-bottom text-start px-6">
                                <p className="lg:text-[2.5rem] text-[2rem] leading-tight font-bold py-4"><span className="text-hackathone-font-rocket-red">Hackath</span>l<span className="text-hackathone-font-rocket-red">on</span>e <span className="block">2023</span></p>
                            </div>
                            <div className="p-4 hidden md:block">
                                <motion.button
                                    transition={{ duration: 0.1 }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-white rounded-full border p-4 hover:bg-hackathone-font-rocket-red transition duration-300 ease-in-out"
                                    onClick={() =>
                                        window.open(
                                            "https://66b8783ce930a118fc45939c--voluble-conkies-fba672.netlify.app/",
                                            "_blank"
                                        )
                                    }
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-6 text-black">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Block 3: Moments to relive */}
                <div className="lg:w-3/5 bg-gray-800 lg:h-[500px] TabletScreen:h-[400px] MobileScreen:h-52 rounded-2xl border border-4 border-black relative overflow-hidden w-full">
                    <Slider {...settings} className="absolute inset-0 z-0">
                        {MomentsImages.map((item, index) => (
                            <div key={index} className="relative w-full h-full">
                                <div className="relative w-full h-full">
                                    <Image
                                        className="rounded-2xl lg:h-[500px] TabletScreen:h-[400px] MobileScreen:h-52 object-cover w-full h-full"
                                        src={item.img}
                                        alt={"Moments"}
                                    ></Image>
                                    {/* Image and shadow overlay */}
                                    <div className="absolute inset-0 bg-black lg:opacity-40 opacity-30 rounded-2xl z-10"></div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="absolute z-10 lg:top-6 lg:left-6 top-4 left-4">
                        <motion.button
                            className="bg-hackathone-font-rocket-red rounded-md border justify-center ease-in-out"
                            whileHover={{
                                scale: 1.1,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                        >
                            <span className="block text-hackathoneCabinetGrotesk text-black lg:text-lg text-md font-bold px-4 py-2">Moments to relive</span>
                        </motion.button>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center z-5">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="rounded-2xl"
                        >
                            <Image
                                className="rounded-2xl TabletScreen:hidden MobileScreen:hidden"
                                width={60}
                                height={60}
                                src={PlayButon}
                                alt="Play Button"
                            />
                            {/* Tablet View */}
                            <Image
                                className="rounded-2xl DesktopScreen:hidden MobileScreen:hidden"
                                width={50}
                                height={50}
                                src={PlayButon}
                                alt="Play Button"
                            />
                            {/* Tablet View */}
                            <Image
                                className="rounded-2xl TabletScreen:hidden DesktopScreen:hidden"
                                width={40}
                                height={40}
                                src={PlayButon}
                                alt="Play Button"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
            <div className="flex sm:flex-row flex-col mt-8 MobileScreen:mt-4 lg:gap-8 TabletScreen:gap-6 gap-4">
                {/* Block 4: PhotoWall */}
                <div className="lg:w-3/5 sm:w-1/2 w-full bg-gray-800 lg:h-96 TabletScreen:h-72 MobileScreen:h-52 rounded-2xl border border-4 border-black relative overflow-hidden">
                    <Slider {...settings} className="absolute inset-0 z-0">
                        {PhotoWallImages.map((item, index) => (
                            <div key={index} className="relative w-full h-full">
                                <Image
                                    className="rounded-2xl lg:h-[400px] TabletScreen:h-[300px] h-[200px] w-full h-full object-cover"
                                    src={item.img}
                                    alt={"Participants"}
                                ></Image>
                            </div>
                        ))}
                    </Slider>
                    <div className="absolute z-10 lg:top-6 lg:left-6 top-4 left-4">
                        <motion.button
                            className="bg-hackathone-font-rocket-red rounded-md border justify-center ease-in-out"
                            whileHover={{
                                scale: 1.1,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                        >
                            <span className="block text-hackathoneCabinetGrotesk text-black lg:text-lg text-md font-bold px-4 py-2">PhotoWall</span>
                        </motion.button>
                    </div>
                </div>
                {/* Block 5 : Volunteer */}
                <div className="lg:w-2/5 sm:w-1/2 w-full bg-gray-800 lg:h-96 TabletScreen:h-72 MobileScreen:h-52 rounded-2xl border border-4  border-black justify-start text-start items-start relative overflow-hidden">
                    {/* Image as background cover */}
                    <Slider {...settings} className="absolute inset-0 z-0">
                        {VolunteerImages.map((item, index) => (
                            <div key={index} className="relative w-full h-full">
                                <Image
                                    className="rounded-2xl lg:h-[400px] TabletScreen:h-[300px] h-[200px] w-full h-full object-cover"
                                    src={item.img}
                                    alt={"Volunteers"}
                                />
                            </div>
                        ))}
                    </Slider>
                    <div className="absolute z-10 lg:top-6 lg:left-6 top-4 left-4">
                        <motion.button
                            className="bg-hackathone-font-rocket-red rounded-md border justify-center ease-in-out"
                            whileHover={{
                                scale: 1.1,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                        >
                            <span className="block text-hackathoneCabinetGrotesk text-black lg:text-lg text-md font-bold px-4 py-2">Volunteer</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};
