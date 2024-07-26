import React, { useState, useRef, useEffect } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography } from "@mui/material";
import { events } from "./general.dto";

const TimelineItemComponent = ({
  date,
  title,
  content,
  isLeftAligned,
}: {
  date: string;
  title: string;
  content: string;
  isLeftAligned: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isHovered]);

  return (
    <TimelineItem
      className="relative flex items-start cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex ${
          isLeftAligned ? "flex-row-reverse md:flex-row" : "flex-row"
        } w-full`}
      >
        <TimelineOppositeContent className="hidden md:block">
          <Typography className="text-gray-500 text-sm">{date}</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator className="flex flex-col items-center">
          <TimelineDot className="bg-hackathone-font-rocket-red" />
          <TimelineConnector
            className="transition-all duration-500 ease-in-out TabletScreen:hidden MobileScreen:hidden"
            style={{
              height: isHovered ? contentHeight + 20 : "100px",
              backgroundColor: "#E43700",
            }}
          />
        </TimelineSeparator>
        <TimelineContent
          className="relative flex-1 p-4 rounded-xl transition-all mb-4 duration-500 ease-in-out"
          style={{
            maxHeight: isHovered ? contentHeight + 80 : "90px",
            backgroundColor: "#1e1e1e",
            border: isHovered ? "2px solid #E43700" : "2px solid transparent",
          }}
        >
          <Typography className="text-white font-bold text-lg">
            {title}
          </Typography>
          <Typography className="text-gray-300 text-sm mt-2 block md:hidden">
            {date}
          </Typography>
          <Typography
            ref={contentRef}
            className={`text-white transition-all duration-500 ease-in-out transform mt-2 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            {content}
          </Typography>
        </TimelineContent>
      </div>
    </TimelineItem>
  );
};

const HackathoneTimeline = () => {
  return (
    <div className="mt-12 font-bold text-4xl text-hackathone-font-rocket-red">
      <h1 className="text-center md:mb-8">Timeline</h1>
      <Timeline className="p-4 lg:p-8">
        {events.map((event, index) => (
          <TimelineItemComponent
            key={index}
            date={event.date}
            title={event.title}
            content={event.content}
            isLeftAligned={index % 2 === 0}
          />
        ))}
      </Timeline>
    </div>
  );
};

export default HackathoneTimeline;
