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
      image: "https://i.imgur.com/QpmXELP.png",
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
    }, {
      image: "https://i.imgur.com/HVoh2n4.png",
      tags: [{ name: "Technology" }],
      title: "Here\'s How to Register for SpaceApps 2023!",
      summary:
        'Register for NASA\'s SpaceApps Challenge 2023 at TU Shannon, Ireland. Explore the website, find the local event (HackAthlone), choose individual or team registration, access resources, and prepare for an exciting cosmic adventure in space exploration.',
        points: [
          "The NASA SpaceApps Challenge 2023 is gearing up for an exciting cosmic adventure, and you're invited! Whether you're an aspiring space scientist, a data wizard, a game developer, or a creative storyteller, this year's hackathon has something for everyone. If you're ready to join the global SpaceApps community and make your mark in space exploration, follow these simple steps to register for the event.",
          "Step 1: Visit the SpaceApps Website ",
          "First things first, open your web browser and head over to the official SpaceApps Challenge website. You can do this by typing 'SpaceApps Challenge' into your preferred search engine or by directly entering the URL: https://www.spaceappschallenge.org/",
          "Step 2: Explore the Local Events ",
          "Once you're on the SpaceApps website, take a moment to explore the available options. You'll find a variety of resources, including information about past challenges, inspirational stories, and more. But right now, we're here for SpaceApps 2023, so let's dive in!",
          "Step 3: Search for 2023 Local Events",
          "To participate in SpaceApps 2023, you'll want to find a local event near you. These events serve as the launchpad for your SpaceApps journey. Click on the 'Find a Local Event' or similar link to begin your search.",
          "Step 4: Choose HackAthlone (TU Shannon, Ireland) ",
          "As you search for local events, you'll come across various locations around the world. However, if you're looking for the Athlone event in Ireland, you're in the right place! Look for 'HackAthlone, or simply 'Athlone' in the list of events. This event is hosted at TU Shannon (Technological University Shannon) and promises an exciting experience in space innovation and collaboration.",
          "Step 5: Sign Up ",
          "Once you've found the Athlone event, it's time to secure your spot. Click on the event to access its dedicated page. There, you'll find all the details you need about Athlone's SpaceApps event, including dates, schedules, and more.",
          "Step 6: Register as an Individual or Team ",
          "Now, it's registration time! Choose whether you want to participate as an individual or as part of a team. If you're planning to collaborate with friends or fellow enthusiasts, team registration is the way to go. Otherwise, you can register as an individual and join or form a team later.",
          "Step 7: Access Resources and Challenges ",
          "Congratulations! You're now officially registered for SpaceApps 2023, Athlone. This means you'll have access to a wealth of resources, including datasets, tools, mentorship, and more to help you prepare for the hackathon. Additionally, you can explore the list of exciting challenges that await your innovation and problem-solving skills.",
          'Step 8: Get Ready for the Cosmic Adventure ',
          "With your registration complete, you're one step closer to an incredible cosmic adventure. Stay tuned for updates from the Athlone event organizers, connect with fellow participants, and start brainstorming your hackathon ideas. Remember, SpaceApps is not just a competition; it's an opportunity to learn, collaborate, and contribute to space science and exploration.",
          "So, whether you're a seasoned space enthusiast or a newcomer with a passion for discovery, SpaceApps 2023 is your chance to shine. Register today, and get ready to reach for the stars at TU Shannon's HackAthlone event. The cosmos is waiting for your brilliant ideas and solutions!",
          
        ],
      author: "Shaiv Mehrotra",
      date: "Aug 24, 2023",
      slug: "2",
    }, {
      image: "https://i.imgur.com/YqPwz7l.png",
      tags: [{ name: "Technology" }],
      title: "Navigating the SpaceApps Hackathon Challenges",
      summary:
        'Explore NASA\'s SpaceApps Challenge 2023 with 31 unique challenges across four domains: Space Exploration, Creative, Data Science, and Game Development. Tailor your cosmic journey by selecting challenges based on difficulty and your passion.',
        points: [
        
        
          
        ],
      author: "Shaiv Mehrotra",
      date: "Aug 24, 2023",
      slug: "3",
    },{
      image: "https://i.imgur.com/pk4xjMf.png",
      tags: [{ name: "Technology" }],
      title: "Seven Reasons to Choose Space Apps Athlone",
      summary:
        'Space Apps Athlone promises NASA\'s Open Data, expert networking, 48-hour innovation in top-notch facilities, a hardware toolkit, sustained meals, and exciting prizes, including a NASA trip—an opportunity to elevate your career. Join the space exploration!',
        points: [
         
          
        ],
      author: "Shaiv Mehrotra & Sneha",
      date: "Sep 13, 2023",
      slug: "4",
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
<div className="flex justify-center items-center">
       <div className="p-4 sm:p-6 md:p-8    w-full md:w-3/5">
  <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4">
    {blog.title}
  </h2>

  <div className=" mb-6 ">
  <img 
  src={blog.image} 
  width={1200}  // Increase these values as needed
  height={1200} 
  className=""
  alt="Blog Image"
/>
    <p className="text-base md:text-lg text-white mt-2 ">
      {blog.author} - {blog.date}
    </p>
    <p className="text-lg md:text-xl text-white mt-8 ">
      {blog.summary}
    </p>
  </div>

  <ul className="list-none space-y-12  ">
    {blog.points.map((point, index) => (
      <li
        key={`event-point-${index}`}
        className="text-lg md:text-xl text-white-300  "
      >
        {point}
      </li>
    ))}
  </ul>
</div>
</div>

    <Footer />
   
      </div>
    </div>
  );
};

export default BlogPage;
