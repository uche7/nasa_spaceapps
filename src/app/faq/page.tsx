"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import { faqData } from "./components/faq.dto";
import NavigationBar from "../general/navigation-bar";
import Footer from "../general/footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Sun from "@/assets/images/faq-page/sun.png";

const Faq = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  /** DeskTop View */
  const desktopView = () => {
    return (
      <div className="TabletScreen:hidden MobileScreen:hidden relative min-h-screen bg-black text-white">
        <div className="fixed inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <CloudParticleBg />
          </Canvas>
        </div>

        <div className="relative z-10 py-[24px] MobileScreen:py-[12px] flex flex-col">
          <NavigationBar />
          <div className="w-full flex flex-row">
            <div className="w-[100%]">
              <Typography
                variant="h4"
                gutterBottom
                className="lg:px-[3.8%] md:my-[2rem] mx-16 font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red font-[800] text-[42px] leading-[44.62px]"
              >
                Frequently Asked Questions (FAQS)
              </Typography>
              <div className="flex flex-row">
                <div className="w-[80%] pl-[2.8%]">
                  {faqData.map((item, index) => (
                    <Accordion
                      key={index}
                      expanded={expanded === index}
                      onChange={handleChange(index)}
                      className="my-4 border-2 border-hackathone-font-light-grey lg:mx-[9.8%] bg-transparent text-white rounded"
                      disableGutters
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon
                            style={{
                              color: "yellow",
                            }}
                          />
                        }
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                      >
                        <h1
                          className="font-hackathoneSFProDisplay font-[300] text-[18px]"
                          style={{
                            color: expanded === index ? "yellow" : "white",
                          }}
                        >
                          {item.header}
                        </h1>
                      </AccordionSummary>
                      <AccordionDetails className="">
                        <Typography>{item.text}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
                <div className="w-[60%]">
                  <Image
                    src={Sun}
                    alt={"Sun Image"}
                    className="translate-x-[30%] translate-y-[3%]"
                  ></Image>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  };

  /** Tablet and Mobile View */
  const tabletMobileView = () => {
    return (
      <div className="DesktopScreen:hidden relative min-h-screen bg-black text-white">
        <div className="fixed inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <CloudParticleBg />
          </Canvas>
        </div>

        <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
          <NavigationBar />
          <div className="m-4">
            <Typography
              variant="h4"
              gutterBottom
              className="lg:px-[6.8%] md:my-[42px] font-hackathoneCabinetGrotesk font-[600] text-hackathone-font-rocket-red"
            >
              Frequently Asked Questions (FAQS)
            </Typography>
            <section>
              <div>
                {faqData.map((item, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    className="my-8 border-2 border-hackathone-font-light-grey lg:mx-[9.8%] bg-transparent text-white rounded"
                    disableGutters
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          style={{
                            color: "yellow",
                          }}
                        />
                      }
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                    >
                      <h1
                        className="font-hackathoneSFProDisplay font-[300] text-[18px]"
                        style={{
                          color: expanded === index ? "yellow" : "white",
                        }}
                      >
                        {item.header}
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails className="">
                      <Typography>{item.text}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </section>
          </div>

          <Footer />
        </div>
      </div>
    );
  };

  return (
    <section>
      {desktopView()}
      {tabletMobileView()}
    </section>
  );
};

export default Faq;
