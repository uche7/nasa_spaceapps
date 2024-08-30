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
import { Paper, Typography, Button } from "@mui/material";

const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'short' };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
};

const Itinerary: React.FC = () => {
    const router = useRouter();
    const startDate = new Date(2024, 9, 4);

    return (
        <div className="relative z-10 py-[24px] mx-[8.06%] ">
            <div>
                {schedule.map((day: DaySchedule, dayIndex: number) => {
                    const dayDate = new Date(startDate);
                    dayDate.setDate(startDate.getDate() + dayIndex);

                    return (
                        <section key={dayIndex} id={`day-${dayIndex + 1}`} className="mb-16">
                            <div className="flex items-center mb-10">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => router.push("/")} // Navigate to home
                                    className="mr-4"
                                >
                                    Back
                                </Button>
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
                                        padding: '0 0 0 1.5rem', // Adjust spacing as needed
                                    },
                                    // [`& .${timelineItemClasses.separator}`]: {
                                    //     margin: '0 0 0 0.75rem', // Adjust to control the position of the line
                                    // },
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
                                                        className="md:text-xl text-[14px] font-bold text-hackathone-font-rocket-red text-start whitespace-nowrap"
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

export default Itinerary;
