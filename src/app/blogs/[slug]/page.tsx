'use client'
import React from 'react';
import { useParams } from 'next/navigation'; // Use `useParams` from `next/navigation`
import { cards } from '../blogs.dto'; // Adjust the import path based on your structure
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import NavigationBar from "../../general/navigation-bar";
import Footer from "../../general/footer";
import { point } from 'leaflet';
interface Tag {
  name: string;
}
interface Blog {
  image: string;
  tags: Tag[];
 
  title: string;
  summary: string;
  points: string[];
  author: string;
  date: string;
  slug: string;
  
}

const BlogPage: React.FC = () => {
  const { slug } = useParams(); // Get the slug from the dynamic route

  // Find the card data based on the slug
  const card = cards.find((c) => c.slug === slug);

  if (!card) {
    return <div>Blog not found</div>;
  }
 const blogs: Blog[] = [
    {
      image: "./blog1.png",
      tags: [{ name: "Technology" }],
      title: "The Importance of Diversity in Space Exploration",
      summary:
        "Valuing diverse perspectives, backgrounds, talents, and experiences amplifies our comprehension of the universe and nurtures a just and equitable future for everyone, making space exploration more successful and inclusive.",
        points: [
          "Space exploration is one of the most important endeavors of our time. It has the potential to transform our understanding of the universe, and help us develop new technologies that can benefit humanity as a whole. But to reach its full potential, space exploration must be inclusive and diverse.",
          "Diversity in spatial analysis is important for many different reasons. First, it can bring a broader perspective on the challenges of spatial exploration. With teams of scientists, engineers and astronauts, we are able to think critically and solve problems in new and innovative ways.",
          "Second, the diversity of space exploration helps us to be an inclusive and equitable society. Seeing people from all walks of life represented in the space program sends the message that everyone has a place in the future of space exploration. This can inspire young people from all walks of life to pursue careers in STEM fields, helping us build a more just and equitable world.",
          "Ultimately, diverse spatial exploration is just the right thing to do. No one group of people has a monopoly on knowledge or skills. If we want to reach our full potential in the space, we need to attract the talents and insights of people from all walks of life.",
          "There are many ways to increase diversity in spatial exploration. We can start by ensuring that our educational institutions provide opportunities for students from all backgrounds to study STEM subjects. We can also work to increase visibility for women and minorities in the space program, fostering a welcoming and inclusive environment.",
          "By diversifying space exploration, we can help ensure that it is more successful, fairer, and more representative of the world in which we live.",
          "Here are some specific examples of how diversity has helped advance space exploration:",
          "In the early days of the space program, women were excluded from many important roles. However, many women, such as Catherine Johnson and Margaret Hamilton, were able to make important contributions. Their work contributed to the success of the Apollo mission.",
          "In recent years, there has been a growing movement to increase the number of people of color in the space program. This group has been able to bring more diversity to the program, as well as help inspire young people of color to pursue careers in STEM fields. There is also a growing movement to increase the number of people with disabilities in the space program. This movement is important because it shows that people with disabilities can be as successful as anyone else in the space.",
          "These are just a few examples of how diversity has helped advance space exploration. As we explore the universe, it is important to continuously increase the diversity of the spatial system. This will help us reach our full potential in the space, and help create an inclusive and equitable society.",
          
        ],
      author: "Mitrashi Das",
      date: "Aug 04, 2023",
      slug: "card-grid-layout-1",
    }]
    const blog = blogs.find((b) => b.slug === slug);

 
    if (!blog) {
      return <div>Blog not found</div>;
    }
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <CloudParticleBg />
        </Canvas>
      </div>
      <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
       <NavigationBar />

        <div
    className='mx-auto max-w-[75%]'
    >

      <h2 className="text-4xl xs:text-5xl lg:text-6xl font-extrabold font-firaSans tracking-wider mb-2">
      {blog.title}
      </h2>
      <div className="mt-3 mb-8">
        <p className="max-w-full text-md  leading-snug font-overpass font-bold tracking-wide text-white">
        {blog.author} - {blog.date}
        </p>
        <p className="max-w-full text-md  leading-snug font-overpass font-bold tracking-wide text-white">
        {blog.summary}
        </p>
      </div>

      <ul style={{ listStyleType: 'none' }} className="mt-5 space-y-10 mt-10 max-w-full text-md md:text-xl text-base leading-snug font-overpass font-normal tracking-wide text-white">
      {blog.points.map((point, index) => (
              <li
                key={`event-point-${index}`}
                className="text-white pl-1 tracking-wider my-3 text-justify"
              >
                {point}
              </li>
            ))}
    </ul>
    </div>
   
      </div>
    </div>
  );
};

export default BlogPage;
