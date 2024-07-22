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
}: {
  date: string;
  title: string;
  content: string;
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
      className="relative flex items-start mb-8 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TimelineOppositeContent className="mt-2.5 hidden md:block">
        <Typography className="text-white text-sm">{date}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot className="bg-orange-500" />
        <TimelineConnector
          className="transition-all duration-500 ease-in-out"
          style={{
            height: isHovered ? contentHeight + 20 : "2px", // Add extra padding to account for margin
            backgroundColor: "#f97316", // Tailwind CSS bg-orange-500 equivalent
          }}
        />
      </TimelineSeparator>
      <TimelineContent className="flex-1">
        <Typography className="text-white font-bold text-lg">
          {title}
        </Typography>
        <Typography className="text-white text-sm mt-2 block md:hidden">
          {date}
        </Typography>
        <Typography
          ref={contentRef}
          className={`text-white transition-all duration-500 ease-in-out transform mt-2 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          {content}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

const HackathoneTimeline = () => {
  return (
    <Timeline className="p-4 lg:p-8">
      {events.map((event, index) => (
        <TimelineItemComponent
          key={index}
          date={event.date}
          title={event.title}
          content={event.content}
        />
      ))}
    </Timeline>
  );
};

export default HackathoneTimeline;
