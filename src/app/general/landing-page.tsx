"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import NavigationBar from "@/app/general/navigation-bar";
import HeroPage from "./hero-page";
import JoinUsPage from "./join-us-page";
import CountDownPage from "./count-down-page";
import SpaceAgencies from "./space-agencies";
import { AgenciesSlider } from "./agencies-slider";
import GlobalCollabrators from "./global-collabrators";
import { CollabratorsSlider } from "./collabrators-slider";
import Shannon from "./shannon";
import TeamStories from "./team-stories";
import HackathoneTimeline from "./timeline";
import Instagram from "./instagram";
import Footer from "./footer";

/** The Landing Page */
const LandingPage = () => {
  const targetDate = "2024-10-04T18:00:00";
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
        <CountDownPage targetDate={targetDate} />
        <SpaceAgencies />
        <AgenciesSlider />
        <GlobalCollabrators />
        <CollabratorsSlider />
        <Shannon />
        <TeamStories />
        <HackathoneTimeline />
        <Instagram />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
