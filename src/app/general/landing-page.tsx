"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import NavigationBar from "@/app/general/navigation-bar";
import HeroPage from "./hero-page";
import JoinUsPage from "./join-us-page";
import SpaceAgencies from "./space-agencies";
import GlobalCollabrators from "./global-collabrators";
import { CollabratorsSlider } from "./collabrators-slider";
import Shannon from "./shannon";
import TeamStories from "./team-stories";
import HackathoneTimeline from "./timeline";
import Instagram from "./instagram";
import Footer from "./footer";
import BackToTopButton from "../general/back-to-top"

/** The Landing Page */
const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <CloudParticleBg />
        </Canvas>
      </div>

      {/* Main contents */}
      <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
        <NavigationBar />
        <HeroPage />
        <JoinUsPage />
        <SpaceAgencies />
        <GlobalCollabrators />
        {/* <CollabratorsSlider /> */}
        <Shannon />
        <TeamStories />
        <HackathoneTimeline />
        <Instagram />
        <BackToTopButton />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
