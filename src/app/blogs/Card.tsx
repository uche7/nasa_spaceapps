import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => (

  <li className="flex p-4 w-full sm:w-1/2 lg:w-1/3">
      <motion.button
  whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }}
  whileTap={{ scale: 0.9 }}>
    <div className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
      <div className="card_image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="p-4 bg-gradient-to-bl from-pink-400 to-orange-200">
        <h2 className="text-white text-lg font-bold mb-2">{title}</h2>
        <p className="text-white text-sm mb-4">{description}</p>
        <button className="btn text-white py-2 px-4 rounded bg-transparent border border-white hover:bg-white hover:text-black">
          Read More
        </button>
      </div>
    </div>
    </motion.button>
  </li>
  
);

export default Card;
