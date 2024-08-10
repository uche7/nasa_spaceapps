"use client"
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  slug: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description,slug }) => (

  <li className="flex p-4 w-full sm:w-1/2 lg:w-1/3 hover:scale-105 transition-transform duration-300">
     
 
    <div className="rounded-lg shadow-lg flex flex-col overflow-hidden">
      <div className="card_image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="p-4 bg-hackathone-font-martin-red">
        <h2 className="text-white text-lg font-bold mb-2">{title}</h2>
        <p className="text-white text-sm mb-4">{description}</p>
        <a href={`/blogs/${slug}`} className="btn text-white py-2 px-4 rounded bg-transparent border border-white hover:text-black">
          Read More
        </a>
      </div>
    </div>

  </li>
  
);

export default Card;
