import React, { useState } from "react";
import Image from "next/image";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import TusMarker from "@/assets/images/general/landing-page/mapping-images/marker.png";
import { MapLogos } from "./general.dto";
import { motion } from "framer-motion";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

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

  const latitude = 53.45710720439234;
  const longitude = -7.897407425947888;

  const customIcon = L.icon({
    iconUrl: TusMarker.src,
    iconSize: [40, 40],
    iconAnchor: [32, 32],
  });

  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  /** Shared View for all devices */
  const sharedView = () => (
    <>
      <div className="px-4 sm:px-6 lg:px-10">
        <motion.h1
          variants={fadeIn("right", "tween", 0.2, 0.4)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-hackathone-font-yellow font-firaSans tracking-wide mb-4"
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
          <span className="font-black text-[#eafe07]">
            NASA Spaceapps Challenge 2023
          </span>{" "}
          is being held at the heart of Ireland, Athlone.{" "}
          <span className="font-black text-[#eafe07]">
            Technology University of the Shannon
          </span>{" "}
          is being presented as the host location for this massive in-person
          hackathon. The university needs no introduction for its merits in
          innovation and technology, preaching knowledge and excellence to over{" "}
          <span className="font-black text-[#eafe07]">7000+</span> students. It
          is also responsible for supporting the hackathon with technological
          components, hackshop materials and subject matter experts to provide
          mentorship for a smooth and exciting event.
        </motion.p>
      </div>
      <div className="px-4 sm:px-6 lg:px-10">
        <MapContainer
          center={[latitude, longitude]}
          zoom={16}
          scrollWheelZoom={false}
          style={{ width: "100%" }}
          className="rounded-lg lg:h-[500px] h-[300px]"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[latitude, longitude]} icon={customIcon}>
            <Popup>
              <div
                onMouseEnter={() => setIsCarouselPaused(true)}
                onMouseLeave={() => setIsCarouselPaused(false)}
              >
                <Carousel
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                  showArrows={false}
                  autoPlay={!isCarouselPaused}
                  infiniteLoop
                >
                  {MapLogos.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center p-4"
                    >
                      <Image
                        src={item.src}
                        alt={`Logo ${index}`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );

  /** Desktop View */
  const desktopView = () => (
    <motion.div
      style={{ backgroundSize: "21%" }}
      className="TabletScreen:hidden MobileScreen:hidden lg:block h-full w-full mt-20 mb-36 py-8"
    >
      {sharedView()}
    </motion.div>
  );

  /** Tablet View */
  const tabletView = () => (
    <motion.div
      style={{ backgroundSize: "21%" }}
      className="DesktopScreen:hidden MobileScreen:hidden lg:block h-full w-full mt-20 py-8"
    >
      {sharedView()}
    </motion.div>
  );

  /** Mobile View */
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
