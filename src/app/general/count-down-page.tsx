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
      <span key={interval} className="mx-2 text-hackathone-font-rocket-red lg:font-[800] lg:file:text-[24px] text-center">
        {timeLeft[interval]} {interval}{" "}
      </span>
    ) : null
  );

  if (!isClient) {
    return null;
  }

  /** Desktop View */
  const desktopView = () => (
    <div className="TabletScreen:hidden MobileScreen:hidden mx-[8.94%] mb-[139.04px] flex flex-col items-center justify-center">
      <h2 className="font-hackathoneCabinetGrotesk font-[800] text-hackathone-font-yellow text-[42px]">
        DISCOVER
      </h2>
      <p className="font-hackathoneSFProDisplay font-[400] text-[18px] mt-[32px] mb-[68px]">
        GLOBAL NUMBERS FROM OUR PREVIOUS EVENT
      </p>
      <div className="bg-hackathone-background-grey flex flex-row items-center justify-center gap-[48px] rounded-xl p-[3%]">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>Time&apos;s up!</span>
        )}
      </div>
    </div>
  );

  /** Tablet View */
  const tabletView = () => (
    <div className="DesktopScreen:hidden MobileScreen:hidden mb-[139.04px] flex flex-col items-center justify-center">
      <h2 className="font-hackathoneCabinetGrotesk font-[800] text-hackathone-font-yellow text-[42px]">
        DISCOVER
      </h2>
      <p className="font-hackathoneSFProDisplay font-[400] text-[18px] mt-[32px] mb-[48px]">
        GLOBAL NUMBERS FROM OUR PREVIOUS EVENT
      </p>
      <div className="bg-hackathone-background-grey flex flex-row items-center justify-center gap-[24px] rounded-xl p-[5%]">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>Time&apos;s up!</span>
        )}
      </div>
    </div>
  );

  /** Mobile View */
  const mobileView = () => (
    <div className="DesktopScreen:hidden TabletScreen:hidden mb-[139.04px] flex flex-col items-center justify-center">
      <h2 className="font-hackathoneCabinetGrotesk font-[800] text-hackathone-font-yellow text-[32px]">
        DISCOVER
      </h2>
      <p className="font-hackathoneSFProDisplay font-[400] text-[15px] text-wrap mx-4 mt-[32px] mb-[48px]">
        GLOBAL NUMBERS FROM OUR PREVIOUS EVENT
      </p>
      <div className="bg-hackathone-background-grey flex flex-row items-center justify-center gap-[16px] m-[24px] rounded-xl p-[3%]">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>Time&apos;s up!</span>
        )}
      </div>
    </div>
  );

  return (
    <section>
      {desktopView()}
      {tabletView()}
      {mobileView()}
    </section>
  );
};

export default CountDownPage;
