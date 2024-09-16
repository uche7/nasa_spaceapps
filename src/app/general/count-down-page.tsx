"use client";

import React, { useState, useEffect, useCallback } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

const CountDownPage: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const calculateTimeLeft = useCallback(() => {
    const currentDateInIrishTime = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "Europe/Dublin",
      })
    );
    const difference = +new Date(targetDate) - +currentDateInIrishTime;
    let timeLeft: { [key: string]: string } = {};

    if (difference >= 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<{ [key: string]: string }>(
    calculateTimeLeft()
  );

  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isClient, timeLeft, calculateTimeLeft]);

  const timerComponents = Object.keys(timeLeft).map((interval) =>
    timeLeft[interval] !== undefined ? (
      <div
        key={interval}
        className="flex flex-col items-center justify-center text-center bg-transparent border rounded text-hackathone-font-rocket-red mx-1 p-2 min-w-[60px] md:min-w-[80px]"
      >
        <span className="text-2xl md:text-4xl font-bold">
          {timeLeft[interval]}
        </span>
        <span className="text-xs md:text-lg capitalize text-slate-50 font-[500]">{interval}</span>
      </div>
    ) : null
  );

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center mb-[3rem]">
      <div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-4">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default CountDownPage;
