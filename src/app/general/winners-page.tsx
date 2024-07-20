import React from "react";
import Image from "next/image";
import FirstPlace from "@/assets/images/general/landing-page/first-place.jpg";
import SecondPlace from "@/assets/images/general/landing-page/second-place.jpg";
import ThirdPlace from "@/assets/images/general/landing-page/third-place.jpg";

export const WinnersPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-hackathoneCabinetGrotesk text-hackathone-font-yellow font-[800] lg:text-[48px] text-[28px] text-center">
        Our Crowned Champions
      </h1>
      <p className="font-hackathoneSFProDisplay font-[400] text-[24px] text-center">
        Where Innovation Meets Excellence
      </p>
      <div className="flex items-center flex-col justify-center my-5 md:mx-4 md:flex-row">
        <Image
          className="w-full md:w-1/3 p-5 shadow-2xl md:relative md:mt-8"
          src={SecondPlace}
          alt={"Second Place"}
        ></Image>
        <Image
          className="w-full md:w-1/3 p-5 shadow-2xl"
          src={FirstPlace}
          alt={"First Place"}
        ></Image>
        <Image
          className="w-full md:w-1/3 p-5 shadow-2xl md:relative md:mt-16"
          src={ThirdPlace}
          alt={"Third Place"}
        ></Image>
      </div>
    </div>
  );
};
