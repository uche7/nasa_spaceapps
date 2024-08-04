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
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>(
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
    timeLeft[interval] ? (
      <div
        key={interval}
        className="flex flex-col items-center justify-center bg-hackathone-background-grey text-hackathone-font-rocket-red rounded-lg mx-1 p-2 min-w-[60px] md:min-w-[80px]"
      >
        <span className="text-2xl md:text-4xl font-bold">
          {timeLeft[interval]}
        </span>
        <span className="text-xs md:text-sm uppercase">{interval}</span>
      </div>
    ) : null
  );

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center  mb-[139.04px]">
      <h2 className="font-hackathoneCabinetGrotesk font-[800] text-hackathone-font-rocket-red text-[24px] md:text-[32px]">
        Joins Us Now
      </h2>
      <p className="font-hackathoneSFProDisplay font-[400] text-[12px] md:text-[15px] text-wrap mx-4 mt-[16px] md:mt-[32px] mb-[24px] md:mb-[48px]">
        GLOBAL NUMBERS FROM OUR PREVIOUS EVENT
      </p>
      <div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-4">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default CountDownPage;
