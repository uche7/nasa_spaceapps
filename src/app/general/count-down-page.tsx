import React, { useState, useEffect } from "react";
import { countDownData } from "./general.dto";

const CountDownPage = () => {
  const createCountDownState = () => {
    return countDownData.map(() => 0);
  };

  const [counts, setCounts] = useState(createCountDownState);

  useEffect(() => {
    countDownData.forEach((item, index) => {
      let start = 0;
      const end = parseInt(item.counts.replace(/,/g, ""));
      if (start === end) return;

      const totalDuration = 5000; // 5 seconds
      const incrementValue = end / (totalDuration / 10); // Calculate the increment value per 10ms interval

      const timer = setInterval(() => {
        start += incrementValue;
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.min(Math.floor(start), end);
          return newCounts;
        });
        if (start >= end) clearInterval(timer);
      }, 10); // Update every 10ms for smoother animation
    });
  }, []);

  const formatCount = (count: any) => {
    return count.toLocaleString();
  };

  /** Desktop View */
  const desktopView = () => {
    return (
      <div className="TabletScreen:hidden MobileScreen:hidden mx-[8.94%] mb-[139.04px] flex flex-col items-center justify-center">
        <h2 className="font-hackathoneCabinetGrotesk font-[800] text-hackathone-font-yellow text-[42px]">
          DISCOVER
        </h2>
        <p className="font-hackathoneSFProDisplay font-[400] text-[18px] mt-[32px] mb-[68px]">
          GLOBAL NUMBERS FROM OUR PREVIOUS EVENT
        </p>
        <div className="bg-hackathone-background-grey flex flex-row items-center justify-center gap-[48px] rounded-xl p-[3%]">
          {countDownData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <figure className="font-hackathoneSFProDisplay text-hackathone-font-yellow font-[800] text-[60px]">
                {formatCount(counts[index])}
              </figure>
              <p className="font-hackathoneCabinetGrotesk font-[400] text-[24px]">
                {item.dec1}
              </p>
              <p className="font-hackathoneCabinetGrotesk font-[400] text-[24px]">
                {item.dec2}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  /** Tablet View */
  const tabletView = () => {
    return (
      <div className="DesktopScreen:hidden MobileScreen:hidden mb-[139.04px] flex flex-col items-center justify-center">
        <h2 className="font-hackathoneCabinetGrotesk font-[800] text-hackathone-font-yellow text-[42px]">
          DISCOVER
        </h2>
        <p className="font-hackathoneSFProDisplay font-[400] text-[18px] mt-[32px] mb-[48px]">
          GLOBAL NUMBERS FROM OUR PREVIOUS EVENT
        </p>
        <div className="bg-hackathone-background-grey flex flex-col items-center justify-center gap-[24px] rounded-xl p-[9%]">
          {countDownData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <figure className="font-hackathoneSFProDisplay text-hackathone-font-yellow font-[800] text-[40px]">
                {formatCount(counts[index])}
              </figure>
              <p className="font-hackathoneCabinetGrotesk font-[400] text-[24px]">
                {item.dec1}
              </p>
              <p className="font-hackathoneCabinetGrotesk font-[400] text-[24px]">
                {item.dec2}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  /** Mobile View */
  const mobileView = () => {
    return (
      <div className="DesktopScreen:hidden TabletScreen:hidden mb-[139.04px] flex flex-col items-center justify-center">
        <h2 className="font-hackathoneCabinetGrotesk font-[800] text-hackathone-font-yellow text-[32px]">
          DISCOVER
        </h2>
        <p className="font-hackathoneSFProDisplay font-[400] text-[15px] text-wrap mx-4 mt-[32px] mb-[48px]">
          GLOBAL NUMBERS FROM OUR PREVIOUS EVENT
        </p>
        <div className="bg-hackathone-background-grey flex flex-col items-center justify-center gap-[16px] rounded-xl p-[15%]">
          {countDownData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <figure className="font-hackathoneSFProDisplay text-hackathone-font-yellow font-[800] text-[40px]">
                {formatCount(counts[index])}
              </figure>
              <p className="font-hackathoneCabinetGrotesk font-[400] text-[24px]">
                {item.dec1}
              </p>
              <p className="font-hackathoneCabinetGrotesk font-[400] text-[24px]">
                {item.dec2}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section>
      {desktopView()}
      {tabletView()}
      {mobileView()}
    </section>
  );
};

export default CountDownPage;
