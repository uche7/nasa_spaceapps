import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stories } from "./general.dto";

const TeamStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Stories.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-10">
      <motion.h1 className="font-hackathoneCabinetGrotesk text-hackathone-font-yellow font-[800] text-center lg:text-4xl sm:text-3xl text-2xl">
        Hackathon Unplugged: Team Stories
      </motion.h1>
      <motion.p className="font-hackathoneSFProDisplay text-center lg:text-xl sm:text-lg text-base mt-2">
        “Let&apos;s hear what the Teams have to say”
      </motion.p>
      <div className="relative h-64 lg:mx-[8.34%] flex items-center justify-center overflow-hidden p-4 rounded-lg shadow-md mt-6">
        <AnimatePresence>
          {Stories.map(
            (item, index) =>
              index === currentIndex && (
                <motion.div
                  key={index}
                  className="absolute w-full text-center text-lg px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.p className="font-hackathoneCabinetGrotesk sm:text-lg text-sm mx-auto max-w-prose">
                    {item.text}
                  </motion.p>
                  <motion.p className="font-hackathoneSFProDisplay mt-5 sm:text-base text-xs">
                    {item.author}
                  </motion.p>
                </motion.div>
              )
          )}
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-1 sm:space-x-2 p-2">
          {Stories.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${
                currentIndex === index ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamStories;
