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

const CardM: React.FC<CardProps> = ({ imageSrc, title, description,slug }) => (

  <>
     
 
    <div className="rounded-lg shadow-lg flex flex-col overflow-hidden  items-center">
      <div className="card_image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="p-4  bg-transparent flex flex-col flex justify-around w-full">
     
     
     
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

export default CardM;
