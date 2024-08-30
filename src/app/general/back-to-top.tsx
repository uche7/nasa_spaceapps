import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"
import rocket from "@/assets/images/general/landing-page/rocket.png"
import rocket_hover from "@/assets/images/general/landing-page/rocket_hover.png"
import rocket_motion from "@/assets/images/general/landing-page/rocket_motion.png"

{/*<a href="https://www.flaticon.com/free-icons/rocket" title="rocket icons">Rocket icons created by Dreamstale - Flaticon</a> 
    <a href="https://www.vecteezy.com/free-vector/rocket-icon">Rocket Icon Vectors by Vecteezy</a>
    <a href="https://www.vecteezy.com/free-vector/rocket-icon">Rocket Icon Vectors by Vecteezy</a> */}

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [imageSrc, setImageSrc] = useState(rocket);
    const [isClicked, setIsClicked] = useState(false);

    const scrollFunction = () => {
        if (window.scrollY > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const topFunction = () => {
        setIsClicked(true);
        setImageSrc(rocket_motion);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsClicked(false);
            setImageSrc(rocket);
        }, 1000);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollFunction);

        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };
    }, [isClicked]);
    const desktopView = () => {
        return (<div className="MobileScreen:hidden TabletScreen:hidden">
            {isVisible && (
                <motion.button
                    title="T-minus..."
                    onClick={topFunction}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onHoverStart={() => !isClicked && setImageSrc(rocket_hover)}
                    onHoverEnd={() => !isClicked && setImageSrc(rocket)}
                    className={`fixed bottom-10 right-10 p-3 bg-hackathone-font-rocket-red border-none cursor-pointer z-50 rounded-full transition-opacity duration-300 ${isClicked ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
                >
                    <motion.div
                        animate={isClicked ? { y: -600, scale: 2 } : { y: 0, scale: 1 }}  // Animate the rocket on click
                        transition={{ duration: 3, ease: "easeOut" }}
                    >
                        <Image
                            src={imageSrc}
                            alt="Back to top"
                            width={50}
                            height={50}
                            className="transition-transform duration-300"
                        />
                    </motion.div>
                </motion.button>
            )}
        </div>);

    }
    const tabletView = () => {
        return (
            <div className="MobileScreen:hidden DesktopScreen:hidden">
                {isVisible && (
                    <motion.button
                        title="T-minus..."
                        onClick={topFunction}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onHoverStart={() => !isClicked && setImageSrc(rocket_hover)}
                        onHoverEnd={() => !isClicked && setImageSrc(rocket)}
                        className={`fixed bottom-4 right-4 p-3 bg-hackathone-font-rocket-red border-none cursor-pointer z-50 rounded-full transition-opacity duration-300 ${isClicked ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
                    >
                        <motion.div
                            animate={isClicked ? { y: -400, scale: 2 } : { y: 0, scale: 1 }}  // Animate the rocket on click
                            transition={{ duration: 2, ease: "easeOut" }}
                        >
                            <Image
                                src={imageSrc}
                                alt="Back to top"
                                width={40}
                                height={40}
                                className="transition-transform duration-300"
                            />
                        </motion.div>
                    </motion.button>
                )}
            </div>);
    }
    const mobileView = () => {
        return (
            <div className="TabletScreen:hidden DesktopScreen:hidden">
                {isVisible && (
                    <motion.button
                        title="T-minus..."
                        onClick={topFunction}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onHoverStart={() => !isClicked && setImageSrc(rocket_hover)}
                        onHoverEnd={() => !isClicked && setImageSrc(rocket)}
                        className={`fixed bottom-4 right-2 p-1 bg-hackathone-font-rocket-red border-none cursor-pointer z-50 rounded-full transition-opacity duration-300 ${isClicked ? "opacity-100" : "opacity-40 hover:opacity-100"}`}
                    >
                        <motion.div
                            animate={isClicked ? { y: -400, scale: 1.5 } : { y: 0, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            <Image
                                src={imageSrc}
                                alt="Back to top"
                                width={40}
                                height={40}
                                className="transition-transform duration-300"
                            />
                        </motion.div>
                    </motion.button>
                )}
            </div>);
    }

    return (
        <section>
            {desktopView()}
            {tabletView()}
            {mobileView()}


        </section>
    );
};

export default BackToTopButton;