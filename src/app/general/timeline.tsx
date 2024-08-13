import React, { useState, useRef, useEffect } from "react";
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
import { events } from "./general.dto";

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [hoveredIndex]);

  return (
    <div
      id="timeline"
      className="flex flex-col items-center justify-center lg:mx-[8.68%] TabletScreen:mx-[3.5%]
        md:my-[124px] min-h-screen py-2 text-hackathone-font-rocket-red"
    >
      <Typography
        variant="h3"
        component="h1"
        className="text-4xl font-bold mb-10">
        Timeline
      </Typography>
      <MuiTimeline position="alternate-reverse">
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            className="cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <TimelineOppositeContent className="hidden md:block px-4">
              <Typography
                variant="body2"
                className="text-base font-normal text-hackathone-font-rocket-red"
              >
                {event.date}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className="bg-hackathone-font-rocket-red TabletScreen:hidden MobileScreen:hidden" />
              {index < events.length - 1 && (
                <TimelineConnector
                  className="transition-all duration-500 ease-in-out TabletScreen:hidden MobileScreen:hidden"
                  style={{
                    height:
                      hoveredIndex === index ? contentHeight + 20 : "100px",
                    backgroundColor: "#52525B",
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={3}
                className="relative flex-1 p-4 rounded-xl transition-all mb-4 duration-500 ease-in-out"
                style={{
                  maxHeight:
                    hoveredIndex === index ? contentHeight + 80 : "90px",
                  backgroundColor: "#1e1e1e",
                  border:
                    hoveredIndex === index
                      ? "2px solid #52525B"
                      : "2px solid transparent",
                }}
              >
                <Typography
                  variant="h6"
                  component="h1"
                  className="md:text-xl text-[14px] font-bold text-hackathone-font-rocket-red"
                >
                  {event.title}
                </Typography>
                {event.content && (
                  <Typography
                    ref={contentRef}
                    className={`text-white transition-all duration-500 ease-in-out transform mt-2
                         TabletScreen:text-[14px] MobileScreen:text-[12px] ${hoveredIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                      }`}
                  >
                    {event.content}
                  </Typography>
                )}
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </MuiTimeline>
    </div>
  );
};

export default Timeline;
