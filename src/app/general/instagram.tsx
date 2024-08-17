import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
// import XIcon from "@/assets/images/general/landing-page"

const Instagram = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <>
      <motion.div className="w-full flex flex-col items-center text-center justify-center bg-center bg-repeat bg-cover">
        <motion.h1
          variants={fadeIn("down", "tween", 0.5, 0.4)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className="font-hackathoneCabinetGrotesk text-white font-[700] text-5xl tracking-tight mb-[1rem] text-center MobileScreen:text-[30.99px] MobileScreen:leading-[44.62px] px-[3rem]"
        >
          Discover more on Our <span className="font-extrabold text-hackathone-font-rocket-red ">Socials</span>
        </motion.h1>
        <div className="mb-[2rem]">
          <p className="font-hackathoneCabinetGrotesk text-[22px] text-white">
            Keep your self updated by{" "}<span className="font-extrabold text-hackathone-font-rocket-red ">following us on social media</span>
          </p>
        </div>
        <motion.div
          variants={fadeIn("down", "tween", 1.1, 0.7)}
          initial="hidden"
          animate={animationComplete ? "show" : "hidden"}
          onAnimationComplete={handleAnimationComplete}
          className="flex flex-row flex-wrap items-start justify-center gap-8 my-3"
        >
          <motion.div
            variants={fadeIn("down", "tween", 1.0, 0.5)}
            initial="hidden"
            animate={animationComplete ? "show" : "hidden"}
            onAnimationComplete={handleAnimationComplete}
            className="mb-8"
          >

            <iframe
              src="https://www.instagram.com/p/CyBirTTxKgP/embed/"
              width={450}
              height={400}
              className="rounded-md"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="encrypted-media"
            />
            <button
              type="button"
              className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm my-[0.5rem] px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              {/* <Image
                className="cursor-pointer"
                src={MenuIcon}
                width={50}
                alt={"Menu Icon"}
              ></Image> */}
              Follow us on
            </button>
          </motion.div>


          <iframe
            src="https://www.instagram.com/p/C-dJTQhhL-I/embed/"
            width={300}
            height={400}
            className="rounded-md"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            allow="encrypted-media"
          />
          <iframe
            src="https://www.instagram.com/p/CxdsGb7hnqK/embed/"
            width={450}
            height={400}
            className="rounded-md"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            allow="encrypted-media"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Instagram;
