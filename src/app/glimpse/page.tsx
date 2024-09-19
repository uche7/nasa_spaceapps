'use client'
import React from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from 'next/navigation';
import { Canvas } from "@react-three/fiber";
import { IconButton } from "@mui/material";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import { CardGrid } from "@/app/glimpse/card-grid";
import NavigationBar from "../general/navigation-bar";
import Footer from "../general/footer";
import BackToTopButton from "../general/back-to-top"
import Tooltip from "../general/tooltip"
import BackButton from "@/assets/images/general/landing-page/back-button.svg"


const Teams = () => {
    const router = useRouter();
    /** Desktop View */
    const desktopView = () => {
        return (
            <div className=" TabletScreen:hidden MobileScreen:hidden flex flex-col gap-[36px] mx-[8.06%]">
                <div className="w-full mt-[3%]">
                    <Tooltip text="Back to Home">
                        <IconButton
                            variant="contained"
                            size="small"
                            color="primary"
                            onClick={() => router.push("/")}
                            className="object-left text-white hover:text-hackathone-font-rocket-red TabletScreen:hidden"
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
                    <h1 className="font-[700] text-[42px] text-hackathone-font-rocket-red my-2 pb-[0.5rem]">
                        Here&apos;s a glimpse
                    </h1>
                    <div className="mr-[3rem]">
                        <p className="font-hackathoneCabinetGrotesk text-[18px] leading-[1.8rem] text-left">
                            from HackAthlone&apos;23
                        </p>
                    </div>
                </div>
                <div className="w-full items-start text-center mt-2">
                    <CardGrid />
                </div>
            </div>
        );
    };

    /** Tablet View */
    const tabletView = () => {
        return (
            <div className="DesktopScreen:hidden MobileScreen:hidden flex flex-col items-center justify-center gap-[36px] mx-[4.06%]">
                <div className="w-full mt-[3%]">
                    {/*Tablet*/}
                    <IconButton
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => router.push("/")}
                        className="object-left text-white hover:text-hackathone-font-rocket-red DesktopScreen:hidden MobileScreen:hidden"
                        edge="start"
                        sx={{
                            width: '2.5rem',
                            height: '2.5rem',
                            fontSize: '2.5rem',
                            position: 'relative',
                            top: '0',
                            left: '0',
                        }}
                        aria-label="back to home">
                        <Image
                            width={80}
                            height={80}
                            src={BackButton}
                            alt="Back to Home"
                        />
                    </IconButton>
                    <h1 className="font-[700] text-[32.99px] text-hackathone-font-rocket-red my-2">
                        Here&apos;s a glimpse
                    </h1>
                    <p className="font-hackathoneCabinetGrotesk font-[400] text-[18px] leading-[30.57px] pr-[12.7%]">
                        from HackAthlone&apos;23
                    </p>
                </div>
                <div className="w-full mb-[20%]">
                </div>
            </div>
        );
    };

    /** Mobile View */
    const mobileView = () => {
        return (
            <div className="DesktopScreen:hidden TabletScreen:hidden flex flex-col items-center justify-center mx-[1.2rem]">
                <div className="w-full mt-[3%]">
                    {/*Mobile*/}
                    <IconButton
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => router.push("/")}
                        className="object-left text-white hover:text-hackathone-font-rocket-red DesktopScreen:hidden TabletScreen:hidden"
                        edge="start"
                        sx={{
                            width: '2.5rem',
                            height: '2.5rem',
                            fontSize: '2.5rem',
                            position: 'relative',
                            top: '0',
                            left: '-3px',
                        }}
                        aria-label="back to home">
                        <Image
                            width={80}
                            height={80}
                            src={BackButton}
                            alt="Back to Home"
                        />
                    </IconButton>
                    <h1 className="font-[800] text-[30.99px] leading-[44.62px] text-hackathone-font-rocket-red font-hackathoneCabinetGrotesk my-2 pb-[0.5rem]">
                        Here&apos;s a glimpse
                    </h1>
                </div>
                <p className="font-hackathoneCabinetGrotesk text-slate-50 font-[500] text-[16px] leading-[30.57px] pr-[8.7%]">
                    from HackAthlone&apos;23
                </p>
                <div className="w-full mb-[20%] mt-[1.5rem]">
                </div>
            </div>
        );
    };
    return (
        <section>
            <div className="relative min-h-screen bg-black text-white">
                <div className="fixed inset-0 z-0">
                    <Canvas camera={{ position: [0, 0, 1] }}>
                        <CloudParticleBg />
                    </Canvas>
                </div>
                <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
                    <NavigationBar />
                    {desktopView()}
                    {tabletView()}
                    {mobileView()}
                    <BackToTopButton />
                    <Footer />
                </div>
            </div>
        </section>
    );
};

export default Teams;
