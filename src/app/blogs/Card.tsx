"use client"
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "@/assets/images/general/landing-page/hero_icon.png";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  slug: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description,slug }) => (

  <>
     
 
    <div className="rounded-lg shadow-lg flex flex-row overflow-hidden flex justify-between ">
      <div className="card_image">
        <img src={imageSrc} alt={title} width={400} height={400} />
      </div>
      <div className="p-4  bg-transparent flex flex-col flex justify-around w-1/3">
     
      <Image
        src="/assets/images/general/landing-page/hero_icon.png" // Image path relative to `public`
        alt="Hero Icon"
        width={90} // specify the width
        height={90} // specify the height
        // for loading the image faster, usually used for above-the-fold images
      />
     
      <div className=''>
        <h2 className="text-hackathone-font-rocket-red text-2xl font-bold mb-2">{title}</h2>
        <p className="text-white text-sm mb-4">{description}</p>
        <a href={`/blogs/${slug}`} className="btn text-white py-2 px-4 rounded bg-transparent border border-white hover:text-black">
          Read More
        </a>
        </div>
      </div>
    </div>
  </>


  
);

export default Card;
