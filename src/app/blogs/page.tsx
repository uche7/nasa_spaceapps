"use client";

import React from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import { motion } from "framer-motion";
import CardGrid from "./CardGrid";

const Blogs = () => {
  /** Desktop View */


  return (
    
    <>
      <div className="relative min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
          <CloudParticleBg />
        </Canvas>
      </div>
      
      
    
      <CardGrid />
      </div>
      </>
    
  );
};

export default Blogs;