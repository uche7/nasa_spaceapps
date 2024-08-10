  "use client"
  import React from 'react';
  import Card from './Card';
  import { motion } from "framer-motion";
  import { useRouter } from "next/navigation";
  import { cards } from "./blogs.dto";


  const CardGrid: React.FC = () => {
    return (
      <div className="font-quicksand text-gray-800 p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-left text-6xl font-normal text-white">BLOGS</h1>
          <ul className="flex flex-wrap list-none p-0">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </ul>
        </div>
      
      </div>
    );
  };

  export default CardGrid;
