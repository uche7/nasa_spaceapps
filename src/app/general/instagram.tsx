import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import XIcon from "@/assets/images/general/landing-page/x_logo.svg"
import InstaIcon from "@/assets/images/general/landing-page/instagram.png"
import InIcon from "@/assets/images/general/landing-page/linkedin.png"
import TweetEmbed from "./xpost-embed";
import InPostEmbed from "./linkedin-embed";

const Instagram = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <>
      <motion.div className="w-full flex flex-col items-center text-center justify-center bg-center bg-repeat bg-cover ">
        <motion.h1
          variants={fadeIn("down", "tween", 0.5, 0.4)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className="font-hackathoneCabinetGrotesk text-white font-[700] text-5xl tracking-tight mb-[1rem] text-center MobileScreen:text-[30.99px] MobileScreen:leading-[34.62px] px-[3rem]"
        >
          Discover more on Our <span className="font-extrabold text-hackathone-font-rocket-red ">Socials</span>
        </motion.h1>
        <div className="mb-[2rem]">
          <p className="font-hackathoneCabinetGrotesk text-[22px] leading-tight text-white">
            Keep your self updated by{" "}<span className="font-extrabold text-hackathone-font-rocket-red ">following us on social media</span>
          </p>
        </div>
        <motion.div
          variants={fadeIn("down", "tween", 1.1, 0.7)}
          initial="hidden"
          animate={animationComplete ? "show" : "hidden"}
          onAnimationComplete={handleAnimationComplete}
          className="flex flex-row flex-wrap items-start justify-center gap-8 my-3 MobileScreen:mx-[2rem] TabletScreen:mx-[2rem] "
        >
          <motion.div
            variants={fadeIn("down", "tween", 1.0, 0.5)}
            initial="hidden"
            animate={animationComplete ? "show" : "hidden"}
            onAnimationComplete={handleAnimationComplete}
            className="mb-8"
          >
            {isClient && <TweetEmbed />}
            <a
              href="https://twitter.com/hack_athlone?ref_src=twsrc%5Etfw"
              className="text-hackathone-font-rocket-red font-[700] rounded-lg text-[18px] my-[0.5rem] text-center inline-flex items-center me-2 mb-2"
            >
              Follow us on
              <Image
                className="cursor-pointer w-6 h-6 ms-2 MobileScreen:w-4"
                src={XIcon}
                height={80}
                width={80}
                alt={"XIcon"}
              ></Image>
            </a>

          </motion.div>

          <motion.div
            variants={fadeIn("down", "tween", 1.0, 0.5)}
            initial="hidden"
            animate={animationComplete ? "show" : "hidden"}
            onAnimationComplete={handleAnimationComplete}
            className="mb-8"
          >
            <iframe
              src="https://www.instagram.com/p/C-dJTQhhL-I/embed/"
              width={300}
              height={400}
              className="rounded-md"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
            />
            <a
              href="https://www.instagram.com/spaceappsathlone/"
              className="text-hackathone-font-rocket-red font-[700] rounded-lg text-[18px] my-[1rem] text-center inline-flex items-center me-2 mb-2"
            >
              Follow us on
              <Image
                className="cursor-pointer w-6 h-6 ms-2 MobileScreen:w-4 MobileScreen:h-4"
                src={InstaIcon}
                height={80}
                width={80}
                alt={"InstaIcon"}
              ></Image>

            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("down", "tween", 1.0, 0.5)}
            initial="hidden"
            animate={animationComplete ? "show" : "hidden"}
            onAnimationComplete={handleAnimationComplete}
            className="mb-8 "
          >
            <InPostEmbed />
            <a
              href="https://www.linkedin.com/company/spaceapps-hackathlone/"
              className="text-hackathone-font-rocket-red font-[700] rounded-lg text-[18px] my-[1rem] text-center inline-flex items-center me-2 mb-2"
            >
              Follow us on
              <Image
                className="cursor-pointer w-6 h-6 ms-2 MobileScreen:w-4 MobileScreen:h-4"
                src={InIcon}
                height={80}
                width={80}
                alt={"InIcon"}
              ></Image>
            </a>

          </motion.div>


        </motion.div>
      </motion.div>
    </>
  );
};

export default Instagram;
