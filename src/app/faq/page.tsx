"use client";

import React from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import { motion } from "framer-motion";

import NavigationBar from "../general/navigation-bar";
import Footer from "../general/footer";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      <div className="m-4">
      <Typography variant="h4" gutterBottom className="m-4">
        Frequently Asked Questions
      </Typography>
      <Accordion className="m-8 bg-hackathone-font-martin-red text-white"  disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is the theme of the 2024 NASA Space Apps Challenge?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The 2024 NASA Space Apps Challenge theme is 'The Sun Touches Everything' in collaboration with NASA Heliophysics. This theme is in alignment with the Heliophysics Big Year, a global celebration of the Sun’s influence on Earth and the entire solar system, as declared by NASA.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="m-8 bg-hackathone-font-martin-red text-white"  disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How do I register to participate in the 2024 NASA Space Apps Challenge?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To register for the 2024 NASA Space Apps Challenge, visit the official NASA Space Apps Challenge website and follow the registration instructions provided there.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Add more FAQ items here as needed */}
    </div>
      
      <Footer />
      </div>
      </div>
      </>
    
  );
};

export default faq;