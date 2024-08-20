  "use client"
  import React from 'react';
  import Card from './Card';
  import CardM from './CardM';
  import { motion } from "framer-motion";
  import { useRouter } from "next/navigation";
  import { cards } from "./blogs.dto";


  const CardGrid: React.FC = () => {
    return (
      <>
      <div className='p-4 '>
        <div className="hidden md:block max-w-6xl mx-auto m-4">
          <h1 className="text-left text-6xl font-bold text-hackathone-font-rocket-red text-left p-4">Blogs</h1>
      <div  className="flex flex-col gap-6 ">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
      </div>
        </div>


        <div className=" block lg:hidden max-w-6xl mx-auto m-16 flex flex-col ">
          <h1 className="text-left text-6xl font-bold text-hackathone-font-rocket-red text-center p-4">Blogs</h1>
      <div  className="flex flex-col flex  gap-6 items-center ">
            {cards.map((card, index) => (
              <CardM key={index} {...card} />
            ))}
      </div>
        </div>
      
      </div>
      </>
    );
  };

  export default CardGrid;
