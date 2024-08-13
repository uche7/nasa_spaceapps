import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Instagram = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <>
      <motion.div className="w-full flex flex-col items-center justify-between px-1 gap-1 bg-center bg-repeat bg-cover ">
        <motion.h1
          variants={fadeIn("down", "tween", 0.5, 0.4)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className="font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red font-bold text-5xl tracking-tight mb-1 text-center"
        >
          Discover More on Our Social Media
        </motion.h1>

        <a
          href="https://www.instagram.com/spaceappsathlone/"
          target="_blank"
          className="font-firaSans cursor-pointer text-[#f6f4f4] hover:text-hackathone-font-rocket-red transition ease duration-1000 font-bold text-xl no-underline tracking-tight mb-8 text-center"
        >
          @spaceappsathlone
        </a>

        <motion.div
          variants={fadeIn("down", "tween", 1.1, 0.7)}
          initial="hidden"
          animate={animationComplete ? "show" : "hidden"}
          onAnimationComplete={handleAnimationComplete}
          className="flex flex-row flex-wrap items-start justify-center gap-8 my-3"
        >
          <iframe
            src="https://www.instagram.com/p/CyBirTTxKgP/embed/"
            width={300}
            height={400}
            className="rounded-md"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            allow="encrypted-media"
          />
          <iframe
            src="https://www.instagram.com/p/Cxuyn6js_Cn/embed/"
            width={300}
            height={400}
            className="rounded-md"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            allow="encrypted-media"
          />

          <iframe
            src="https://www.instagram.com/p/Cxiw9xRNFtO/embed/"
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
            width={300}
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
