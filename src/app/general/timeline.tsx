"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
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

export default function Timeline() {
  const Router = useRouter();

  const timelineInfo = useMemo(() => events(Router), [Router]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && hoveredIndex !== null) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [hoveredIndex]);

  const desktopView = () => (
    <div
      className="MobileScreen:hidden TabletScreen:hidden flex flex-col items-center justify-center lg:mx-[8.68%] TabletScreen:mx-[3.5%]
    mt-[5rem] mb-[8rem] min-h-max py-2 text-hackathone-font-rocket-red"
    >
      <Typography
        variant="h3"
        component="h1"
        className="text-4xl font-bold mb-10 r MobileScreen:text-center MobileScreen:text-[30.99px] MobileScreen:leading-[34.62px] md:text-[32.99px]"
      >
        Timeline
      </Typography>
      <MuiTimeline position="alternate-reverse">
        {timelineInfo.map((event, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <TimelineItem
              key={index}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              onClick={event.route}
              tabIndex={0}
            >
              <TimelineOppositeContent className={`hidden md:block px-4`}>
                <Typography
                  variant="body2"
                  color="white"
                  className={`text-base font-bold MobileScreen:text-center transition-transform transition-colors duration-300 ease-in-out transform ${hoveredIndex === index
                    ? `text-hackathone-font-rocket-red font-extrabold scale-110 ${isOdd ? "translate-x-[-15%]" : "translate-x-[15%]"}`
                    : "text-white scale-100 translate-x-0"
                    }`}
                  style={{
                    transformOrigin: "center",
                  }}
                >
                  {event.date}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-hackathone-font-rocket-red TabletScreen:hidden MobileScreen:hidden" />
                {index < timelineInfo.length - 1 && (
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
                  className="relative flex-1 p-4 rounded-xl transition-all mb-4 duration-300 ease-in-out"
                  style={{
                    maxHeight: hoveredIndex === index ? contentHeight + 140 : "auto",
                    height: hoveredIndex === index ? "auto" : "120px",
                    backgroundColor: "#1e1e1e",
                    border:
                      hoveredIndex === index
                        ? "3px solid #EAFE07"
                        : "2px solid transparent",
                  }} //light grey color : #52525B
                >
                  <Typography
                    variant="h6"
                    component="h1"
                    className={`md:text-xl text-[16px] font-bold text-hackathone-font-rocket-red text-center MobileScreen:text-center ${isOdd ? "md:text-start" : "md:text-end"
                      }`}
                  >
                    {event.title}
                  </Typography>
                  {event.subtitle && (
                    <Typography
                      ref={contentRef}
                      className={`
                        text-white transition-all duration-500 ease-in-out transform my-4 text-[16px]
                        TabletScreen:text-[14px] MobileScreen:text-[14px]
                        ${hoveredIndex === index
                          ? "translate-y-2"
                          : "-translate-y-0"}
                        ${isOdd ? "md:text-start" : "md:text-end"}
                        text-center`}
                    >
                      {event.subtitle}
                    </Typography>
                  )}
                </Paper>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </MuiTimeline>
    </div>
  );
  const tabletView = () => (
    <div
      className="DesktopScreen:hidden MobileScreen:hidden  flex flex-col items-center justify-center lg:mx-[8.68%] TabletScreen:mx-[3.5%]
mt-[5rem] mb-[8rem] min-h-max py-2 text-hackathone-font-rocket-red"
    >
      <Typography
        variant="h3"
        component="h1"
        className="text-4xl font-bold mb-10 r MobileScreen:text-center MobileScreen:text-[30.99px] MobileScreen:leading-[34.62px] md:text-[32.99px]"
      >
        Timeline
      </Typography>
      <MuiTimeline position="alternate-reverse">
        {timelineInfo.map((event, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <TimelineItem
              key={index}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              onClick={event.route}
              tabIndex={0}
            >
              <TimelineOppositeContent className={`hidden md:block px-4`}>
                <Typography
                  variant="body2"
                  color="white"
                  className={`text-base font-bold MobileScreen:text-center transition-transform transition-colors duration-300 ease-in-out transform ${hoveredIndex === index
                    ? `text-hackathone-font-rocket-red font-extrabold scale-110 ${isOdd ? "translate-x-[-15%]" : "translate-x-[15%]"}`
                    : "text-white scale-100 translate-x-0"
                    }`}
                  style={{
                    transformOrigin: "center",
                  }}
                >
                  {event.date}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-hackathone-font-rocket-red TabletScreen:hidden MobileScreen:hidden" />
                {index < timelineInfo.length - 1 && (
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
                      hoveredIndex === index ? contentHeight + 160 : "auto",
                    height:
                      hoveredIndex === index ? "auto" : "auto",
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
                    className={`md:text-xl text-[16px] font-bold text-hackathone-font-rocket-red text-center MobileScreen:text-center ${isOdd ? "md:text-start" : "md:text-end"
                      }`}
                  >
                    {event.title}
                  </Typography>
                  {event.subtitle && (
                    <Typography
                      ref={contentRef}
                      className={`
                  text-white transition-all duration-500 ease-in-out transform mt-4 text-[16px]
                  TabletScreen:text-[14px] MobileScreen:text-[14px]
                  ${hoveredIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2"}
                  ${isOdd ? "md:text-start" : "md:text-end"}
                  text-center
                  MobileScreen:opacity-100 TabletScreen:opacity-100
                `}
                    >
                      {event.subtitle}
                    </Typography>
                  )}
                </Paper>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </MuiTimeline>
    </div>
  )
  const mobileView = () => (
    <div
      className="DesktopScreen:hidden TabletScreen:hidden  flex flex-col items-center justify-center lg:mx-[8.68%] TabletScreen:mx-[3.5%]
mt-[3rem] min-h-screen py-2 text-hackathone-font-rocket-red"
    >
      <Typography
        variant="h3"
        component="h1"
        className="text-4xl font-bold mb-10 r MobileScreen:text-center MobileScreen:text-[30.99px] MobileScreen:leading-[34.62px] md:text-[32.99px]"
      >
        Timeline
      </Typography>
      <MuiTimeline position="alternate-reverse">
        {timelineInfo.map((event, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <TimelineItem
              key={index}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              onClick={event.route}
              tabIndex={0}
            >
              <TimelineOppositeContent className={`hidden md:block px-4`}>
                <Typography
                  variant="body2"
                  color="white"
                  className={`text-base font-bold MobileScreen:text-center transition-transform transition-colors duration-300 ease-in-out transform ${hoveredIndex === index
                    ? `text-hackathone-font-rocket-red font-extrabold scale-110 ${isOdd ? "translate-x-[-15%]" : "translate-x-[15%]"}`
                    : "text-white scale-100 translate-x-0"
                    }`}
                  style={{
                    transformOrigin: "center",
                  }}
                >
                  {event.date}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-hackathone-font-rocket-red TabletScreen:hidden MobileScreen:hidden" />
                {index < timelineInfo.length - 1 && (
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
                      hoveredIndex === index ? contentHeight + 80 : "auto",
                    height:
                      hoveredIndex === index ? "auto" : "120px",
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
                    className={`md:text-xl text-[16px] font-bold text-hackathone-font-rocket-red text-center MobileScreen:text-center ${isOdd ? "md:text-start" : "md:text-end"
                      }`}
                  >
                    {event.title}
                  </Typography>
                  {event.subtitle && (
                    <Typography
                      ref={contentRef}
                      className={`
                    text-white transition-all duration-500 ease-in-out transform my-4 text-[16px]
                    TabletScreen:text-[14px] MobileScreen:text-[14px]
                    ${hoveredIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2"}
                    ${isOdd ? "md:text-start" : "md:text-end"}
                    text-center
                    MobileScreen:opacity-100 TabletScreen:opacity-100
                  `}
                    >
                      {event.subtitle}
                    </Typography>
                  )}
                </Paper>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </MuiTimeline>
    </div>
  );

  return (
    <section id="timeline">
      {desktopView()}
      {tabletView()}
      {mobileView()}
    </section>
  );
}
