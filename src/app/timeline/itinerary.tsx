"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { schedule, DaySchedule, ScheduleItem } from "./timeline.dto";
import {
    Timeline as MuiTimeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    timelineItemClasses,
} from "@mui/lab";
import { Paper, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Tooltip from "../general/tooltip"


const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'short' };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
};

const Itinerary: React.FC = () => {
    const router = useRouter();
    const startDate = new Date(2024, 9, 4);

    const desktopView = () => {
        return (
            <div className="TabletScreen:hidden MobileScreen:hidden relative z-10 py-[24px] mx-[8.06%] ">
                <div>
                    {schedule.map((day: DaySchedule, dayIndex: number) => {
                        const dayDate = new Date(startDate);
                        dayDate.setDate(startDate.getDate() + dayIndex);

                        return (
                            <section key={dayIndex} id={`day-${dayIndex + 1}`} className="mb-16">
                                <div className="flex items-center mb-10">
                                    <Tooltip text="Back to Home">
                                        <IconButton
                                            variant="contained"
                                            size="large"
                                            color="primary"
                                            onClick={() => router.push("/")}
                                            className="mr-4 text-white hover:text-hackathone-font-rocket-red"
                                            edge="start"
                                            sx={{
                                                width: '3.5rem',
                                                height: '3.5rem',
                                                fontSize: '5rem',
                                                transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
                                                '&:hover': {
                                                    transform: 'scale(1.2)',
                                                },
                                            }}
                                            aria-label="back to home"
                                        >
                                            <ChevronLeftIcon sx={{ fontSize: 'inherit' }} />
                                        </IconButton>
                                    </Tooltip>
                                    <Typography
                                        variant="h3"
                                        component="h1"
                                        className="text-4xl font-hackathoneCabinetGrotesk font-bold text-hackathone-font-rocket-red text-start md:text-[3.5rem]"
                                    >
                                        {day.title}
                                        <span className='text-4xl text-white md:text-[32.99px]'>
                                            {" (" + formatDate(dayDate) + "'24)"}
                                        </span>
                                    </Typography>
                                </div>
                                <MuiTimeline
                                    position="right"
                                    sx={{
                                        [`& .${timelineItemClasses.root}:before`]: {
                                            flex: 0,
                                            padding: 0,
                                        },
                                        [`& .${timelineItemClasses.root}`]: {
                                            padding: '0 0 0 1.5rem',
                                        },
                                    }}
                                >
                                    {day.day.map((item: ScheduleItem, index: number) => (
                                        <TimelineItem
                                            key={index}
                                            className="cursor-pointer"
                                            tabIndex={0}
                                        >
                                            <TimelineSeparator>
                                                <TimelineDot className="bg-hackathone-font-rocket-red" />
                                                {index < day.day.length - 1 && (
                                                    <TimelineConnector
                                                        className="transition-all duration-500 ease-in-out"
                                                    />
                                                )}
                                            </TimelineSeparator>
                                            <div className='w-[15rem] mx-[1rem] justify-center items-center text-center'>
                                                <TimelineContent>
                                                    <Paper
                                                        elevation={3}
                                                        className="p-2 rounded-lg transition-all duration-500  ease-in-out w-[13rem] h-[3rem] "
                                                        style={{
                                                            backgroundColor: "rgb(234 254 7)",
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="h6"
                                                            component="h1"
                                                            className="md:text-[1rem] text-[14px] font-extrabold text-black text-center whitespace-nowrap"
                                                            style={{
                                                                backgroundColor: "rgb(234 254 7)",
                                                            }}
                                                        >
                                                            {item.time}
                                                        </Typography>
                                                    </Paper>
                                                </TimelineContent>
                                            </div>
                                            <div className='translate-y-[-30%] w-[55%]'>
                                                <TimelineContent>
                                                    <Paper
                                                        elevation={3}
                                                        className="relative flex-1 p-4 rounded-xl transition-all duration-500 ease-in-out"
                                                        style={{
                                                            backgroundColor: "#1e1e1e",
                                                        }}
                                                    >

                                                        <Typography
                                                            variant="h6"
                                                            component="h1"
                                                            className="md:text-xl text-[14px] font-bold text-hackathone-font-rocket-red text-start lg:whitespace-nowrap"
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                        <Typography
                                                            variant="body1"
                                                            className="text-start text-white"
                                                        >
                                                            {item.content}
                                                        </Typography>
                                                    </Paper>
                                                </TimelineContent>
                                            </div>

                                        </TimelineItem>
                                    ))}
                                </MuiTimeline>
                            </section>
                        );
                    })}
                </div>
            </div >
        );
    };

    const mobileTabletView = () => {
        return (
            <div className="DesktopScreen:hidden relative z-10 py-[24px] TabletScreen:mx-[8.06%]">
                <div>
                    {schedule.map((day: DaySchedule, dayIndex: number) => {
                        const dayDate = new Date(startDate);
                        dayDate.setDate(startDate.getDate() + dayIndex);

                        return (
                            <section key={dayIndex} id={`day-${dayIndex + 1}`} className="mb-16">
                                <div className="flex flex-row items-center text-center justify-center TabletScreen:mb-10 mb-4">
                                    <div className='TabletScreen:w-[20%] TabletScreen:text-left'>
                                        <IconButton
                                            variant="contained"
                                            size="large"
                                            color="primary"
                                            onClick={() => router.push("/")}
                                            className="mr-4 object-left text-white hover:text-hackathone-font-rocket-red MobileScreen:hidden"
                                            edge="start"
                                            sx={{
                                                width: '3.5rem',
                                                height: '3.5rem',
                                                fontSize: '5rem',
                                                transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
                                                '&:hover': {
                                                    transform: 'scale(1.2)',
                                                },
                                            }}
                                            aria-label="back to home"
                                        >
                                            <ChevronLeftIcon sx={{ fontSize: 'inherit' }} />
                                        </IconButton>
                                    </div>
                                    <div className='TabletScreen:w-[90%] TabletScreen:flex TabletScreen:text-center TabletScreen:justify-center TabletScreen:items-center'>
                                        <Typography
                                            variant="h3"
                                            component="h1"
                                            className="text-3xl font-hackathoneCabinetGrotesk font-bold text-hackathone-font-rocket-red text-center TabletScreen:text-start sm:text-[3.5rem]"
                                        >
                                            {day.title}
                                            <span className='text-3xl text-white sm:text-[32.99px] MobileScreen:whitespace-pre'>
                                                {"\n (" + formatDate(dayDate) + "'24)"}
                                            </span>
                                        </Typography>
                                    </div>

                                </div>
                                <MuiTimeline
                                    position="right"
                                    sx={{
                                        [`& .${timelineItemClasses.root}:before`]: {
                                            flex: 0,
                                            padding: 0,
                                        },
                                        [`& .${timelineItemClasses.root}`]: {
                                            padding: '0 0 0 1.5rem',
                                        },
                                    }}
                                >
                                    {day.day.map((item: ScheduleItem, index: number) => (
                                        <TimelineItem
                                            key={index}
                                            className="cursor-pointer"
                                            tabIndex={0}
                                        >
                                            <TimelineSeparator>
                                                <TimelineDot className="bg-hackathone-font-rocket-red" />
                                                {index < day.day.length - 1 && (
                                                    <TimelineConnector
                                                        className="transition-all duration-500 ease-in-out"
                                                    />
                                                )}
                                            </TimelineSeparator>
                                            <div className='mx-[1rem] justify-center items-center text-center space-x-4 w-full'>
                                                <TimelineContent>
                                                    <Paper
                                                        elevation={3}
                                                        className="h-[2.5rem] TabletScreen:mx-[15%]"
                                                        style={{
                                                            backgroundColor: "rgb(234 254 7)",
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="h6"
                                                            component="h1"
                                                            className="p-2 rounded-lg md:text-[1rem] text-[14px] font-extrabold text-black text-center MobileScreen:text-start MobileScreen:pl-[1rem]"
                                                            style={{
                                                                backgroundColor: "rgb(234 254 7)",
                                                            }}
                                                        >
                                                            {item.time}
                                                        </Typography>

                                                    </Paper>
                                                    <Paper
                                                        elevation={3}
                                                        className="relative flex-1 p-4 rounded-xl transition-all duration-500 ease-in-out my-[2.5rem] MobileScreen:mb-[2.5rem] MobileScreen:mt-[1rem]"
                                                        style={{
                                                            backgroundColor: "#1e1e1e",
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="h6"
                                                            component="h1"
                                                            className="md:text-xl text-[18px] font-bold text-hackathone-font-rocket-red text-center MobileScreen:text-start lg:whitespace-nowrap"
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                        <Typography
                                                            variant="body1"
                                                            className="text-center MobileScreen:text-start text-white pt-[0.5rem]"
                                                        >
                                                            {item.content}
                                                        </Typography>
                                                    </Paper>
                                                </TimelineContent>
                                            </div>
                                        </TimelineItem>
                                    ))}
                                </MuiTimeline>
                            </section>
                        );
                    })}
                </div>
            </div >
        );
    };

    return (
        <section>
            {desktopView()}
            {mobileTabletView()}
        </section>
    );
};




export default Itinerary;
