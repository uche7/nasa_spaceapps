import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/** Shannon Technology University */
const Shannon = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const sharedView = () => (
    <>
      <div className="px-4 sm:px-6 lg:px-10">
        <motion.h1
          variants={fadeIn("right", "tween", 0.2, 0.4)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-hackathone-font-rocket-red font-firaSans tracking-wide mb-4"
        >
          Technology University of the Shannon
        </motion.h1>

        <motion.p
          variants={fadeIn("down", "tween", 1.2, 0.4)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className="text-justify my-8 text-base sm:text-lg md:text-xl font-hackathoneCabinetGrotesk font-[400] text-white leading-relaxed"
        >
          <span className="font-black text-hackathone-font-rocket-red">
            NASA Spaceapps Challenge 2024
          </span>{" "}
          is being held at the heart of Ireland, Athlone.{" "}
          <span className="font-black text-hackathone-font-rocket-red">
            Technology University of the Shannon
          </span>{" "}
          is being presented as the host location for this massive in-person
          hackathon. The university needs no introduction for its merits in
          innovation and technology, preaching knowledge and excellence to over{" "}
          <span className="font-black text-hackathone-font-rocket-red">
            7000+
          </span>{" "}
          students. It is also responsible for supporting the hackathon with
          technological components, hackshop materials and subject matter
          experts to provide mentorship for a smooth and exciting event.
        </motion.p>
      </div>
      <div className="px-4 sm:px-6 lg:px-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.8253383388155
          !2d-7.907762524009276!3d53.4179497693644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
          .1!3m3!1m2!1s0x485c496f19ccea6b%3A0x1f3a077e5c4fdffd!2sTechnological%20Universi
          ty%20of%20the%20Shannon%3A%20Midlands!5e0!3m2!1sen!2sng!4v1721568682708!5m2!1sen!2sng"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg lg:h-[400px] h-[300px] w-full"
        ></iframe>
      </div>
    </>
  );

  const desktopView = () => (
    <motion.div
      style={{ backgroundSize: "21%" }}
      className="TabletScreen:hidden MobileScreen:hidden lg:block h-full mt-20 mb-36 mx-[8.34%] py-8"
    >
      {sharedView()}
    </motion.div>
  );

  const tabletView = () => (
    <motion.div
      style={{ backgroundSize: "21%" }}
      className="DesktopScreen:hidden MobileScreen:hidden lg:block h-full w-full mt-20 py-8"
    >
      {sharedView()}
    </motion.div>
  );

  const mobileView = () => (
    <motion.div
      style={{ backgroundSize: "21%" }}
      className="DesktopScreen:hidden TabletScreen:hidden lg:block h-full w-full mt-20 py-8"
    >
      {sharedView()}
    </motion.div>
  );

  return (
    <section>
      {desktopView()}
      {tabletView()}
      {mobileView()}
    </section>
  );
};

export default Shannon;
