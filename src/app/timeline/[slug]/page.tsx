"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import NavigationBar from "../../general/navigation-bar";
import Footer from "../../general/footer";
import { schedule } from "../timeline.dto"
import {
    Timeline as MuiTimeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from "@mui/lab";
import { Paper, Typography } from "@mui/material";

const TimelinePage: React.FC = () => {
    const { slug } = useParams(); // Use useParams to get the slug from the URL
    const daySchedule = schedule.find((d) => d.slug === slug); // Find the correct schedule based on slug

    if (!daySchedule) {
        return <div>Schedule not found</div>; // Handle case where no schedule is found
    }

    return (
        <div className="relative min-h-screen bg-black text-white">
            <div className="fixed inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <CloudParticleBg />
                </Canvas>
            </div>
            <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
                <NavigationBar />
                <div>
                    <div
                        id="timeline"
                        className="flex flex-col items-center justify-center lg:mx-[8.68%] TabletScreen:mx-[3.5%]
    md:my-[10rem] my-[8rem] min-h-screen py-2 text-hackathone-font-rocket-red"
                    >
                        <Typography
                            variant="h3"
                            component="h1"
                            className="text-4xl font-bold mb-10 r MobileScreen:text-center MobileScreen:text-[30.99px] MobileScreen:leading-[34.62px] md:text-[32.99px]"
                        >
                            {daySchedule.title} Schedule
                        </Typography>
                        <MuiTimeline position="alternate-reverse">
                            {daySchedule.day.map((item, index) => (
                                <TimelineItem
                                    key={index}
                                    className="cursor-pointer"
                                    tabIndex={0}
                                >
                                    <TimelineOppositeContent className="hidden md:block px-4">
                                        <Typography
                                            variant="body2"
                                            color="white"
                                            className="text-base font-normal MobileScreen:text-center"
                                        >
                                            {item.time}
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot className="bg-hackathone-font-rocket-red TabletScreen:hidden MobileScreen:hidden" />
                                        {index < daySchedule.day.length - 1 && (
                                            <TimelineConnector
                                                className="transition-all duration-500 ease-in-out TabletScreen:hidden MobileScreen:hidden"
                                            />
                                        )}
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper
                                            elevation={3}
                                            className="relative flex-1 p-4 rounded-xl transition-all mb-4 duration-500 ease-in-out"
                                        >
                                            <Typography
                                                variant="h6"
                                                component="h1"
                                                className="md:text-xl text-[14px] font-bold text-hackathone-font-rocket-red MobileScreen:text-center"
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                className="text-white"
                                            >
                                                {item.content}
                                            </Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </MuiTimeline>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};