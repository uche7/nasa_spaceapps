'use client'
import React from 'react';
import { useParams } from 'next/navigation'; // Use `useParams` from `next/navigation`
import { cards } from '../blogs.dto'; // Adjust the import path based on your structure

const BlogPage: React.FC = () => {
  const { slug } = useParams(); // Get the slug from the dynamic route

  // Find the card data based on the slug
  const card = cards.find((c) => c.slug === slug);

  if (!card) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="p-4">
      <img src={card.imageSrc} alt={card.title} className="w-full h-auto" />
      <h1 className="text-4xl font-bold mt-4">{card.title}</h1>
      <p className="mt-2">{card.description}</p>
    </div>
  );
};

export default BlogPage;
