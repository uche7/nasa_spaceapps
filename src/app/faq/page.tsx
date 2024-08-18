"use client";

import React from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import Sun from "@/assets/images/general/landing-page/faq_sun.png"
import { motion } from "framer-motion";

import { FAQ } from "../general/general.dto";
import NavigationBar from "../general/navigation-bar";
import Footer from "../general/footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faq = () => {
  /** Desktop View */

  return (
    <>
      <div className="relative min-h-screen bg-black text-white">
        <div className="fixed inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <CloudParticleBg />
          </Canvas>
        </div>
        <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
          <NavigationBar />
          <div className="w-full flex flex-row">
            <div className="ml-12 w-[80%]">
              <Typography
                variant="h4"
                gutterBottom
                className="mx-16 my-8 font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red font-[800] text-[42px] leading-[44.62px]"
              >
                Frequently Asked Questions (FAQs)
              </Typography>
              {FAQ.map((quote, index) => (
                <Accordion
                  className="m-8 bg-hackathone-font-martin-red text-white lg:mx-[6.8%]"
                  disableGutters
                  key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="font-bold text-lg">{quote.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    className="bg-hackathone-background-grey"
                  >
                    <Typography>{quote.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
            <div className="w-[60%] overflow-visible">
              <Image
                src={Sun}
                alt="Sun"
                width={1600}
                height={1400}
                objectFit="fill"
                className="translate-x-[40%] translate-y-[-8%]"
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default faq;
