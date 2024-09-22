'use client'
import React from 'react';
import { useParams, useRouter } from 'next/navigation'; // Use `useParams` from `next/navigation`
import { cards } from '../blogs.dto'; // Adjust the import path based on your structure
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import NavigationBar from "../../general/navigation-bar";
import Footer from "../../general/footer";
import Tooltip from "../../general/tooltip"
import { Paper, Typography, IconButton } from "@mui/material";
import { point } from 'leaflet';
import Image from 'next/image';

interface Tag {
  name: string;
}
interface Blog {
  image: string;
  tags: Tag[];

  title: string;
  summary: string;
  // points: string[];
  points: React.ReactNode[];
  author: string;
  date: string;
  slug: string;

}

const BlogPage: React.FC = () => {
  const { slug } = useParams(); // Get the slug from the dynamic route

  // Find the card data based on the slug
  const card = cards.find((c) => c.slug === slug);

  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/blogs');
    }
  }

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
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Space exploration is one of the most important endeavors of our time. It has the potential to transform our understanding of the universe, and help us develop new technologies that can benefit humanity as a whole. But to reach its full potential, space exploration must be inclusive and diverse.Diversity in spatial analysis is important for many different reasons. First, it can bring a broader perspective on the challenges of spatial exploration. With teams of scientists, engineers and astronauts, we are able to think critically and solve problems in new and innovative ways.",

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Second, the diversity of space exploration helps us to be an inclusive and equitable society. Seeing people from all walks of life represented in the space program sends the message that everyone has a place in the future of space exploration. This can inspire young people from all walks of life to pursue careers in STEM fields, helping us build a more just and equitable world. Ultimately, diverse spatial exploration is just the right thing to do. No one group of people has a monopoly on knowledge or skills. If we want to reach our full potential in the space, we need to attract the talents and insights of people from all walks of life. There are many ways to increase diversity in spatial exploration. We can start by ensuring that our educational institutions provide opportunities for students from all backgrounds to study STEM subjects. We can also work to increase visibility for women and minorities in the space program, fostering a welcoming and inclusive environment. By diversifying space exploration, we can help ensure that it is more successful, fairer, and more representative of the world in which we live.",

        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Here are some specific examples of how diversity has helped advance space exploration: In the early days of the space program, women were excluded from many important roles. However, many women, such as Catherine Johnson and Margaret Hamilton, were able to make important contributions. Their work contributed to the success of the Apollo mission. In recent years, there has been a growing movement to increase the number of people of color in the space program. This group has been able to bring more diversity to the program, as well as help inspire young people of color to pursue careers in STEM fields. There is also a growing movement to increase the number of people with disabilities in the space program. This movement is important because it shows that people with disabilities can be as successful as anyone else in the space. These are just a few examples of how diversity has helped advance space exploration. As we explore the universe, it is important to continuously increase the diversity of the spatial system. This will help us reach our full potential in the space, and help create an inclusive and equitable society.",

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
        <strong className='text-hackathone-font-rocket-red'>Step 1: Visit the SpaceApps Website </strong>,
        <span>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}First things first, open your web browser and head over to the official SpaceApps Challenge website. You can do this by typing 'SpaceApps Challenge' into your preferred search engine or by directly entering the URL: <a className="hover:text-red-500" href="https://www.spaceappschallenge.org/" >https://www.spaceappschallenge.org/</a></span>,
        <strong className='text-hackathone-font-rocket-red'>Step 2: Explore the Local Events </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Once you're on the SpaceApps website, take a moment to explore the available options. You'll find a variety of resources, including information about past challenges, inspirational stories, and more. But right now, we're here for SpaceApps 2023, so let's dive in!",
        <strong className='text-hackathone-font-rocket-red'>Step 3: Search for 2023 Local Events</strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0To participate in SpaceApps 2023, you'll want to find a local event near you. These events serve as the launchpad for your SpaceApps journey. Click on the 'Find a Local Event' or similar link to begin your search.",
        <strong className='text-hackathone-font-rocket-red'>Step 4: Choose HackAthlone (TU Shannon, Ireland) </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0As you search for local events, you'll come across various locations around the world. However, if you're looking for the Athlone event in Ireland, you're in the right place! Look for 'HackAthlone, or simply 'Athlone' in the list of events. This event is hosted at TU Shannon (Technological University Shannon) and promises an exciting experience in space innovation and collaboration.",
        <strong className='text-hackathone-font-rocket-red'>Step 5: Sign Up </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Once you've found the Athlone event, it's time to secure your spot. Click on the event to access its dedicated page. There, you'll find all the details you need about Athlone's SpaceApps event, including dates, schedules, and more.",
        <strong className='text-hackathone-font-rocket-red'>Step 6: Register as an Individual or Team </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Now, it's registration time! Choose whether you want to participate as an individual or as part of a team. If you're planning to collaborate with friends or fellow enthusiasts, team registration is the way to go. Otherwise, you can register as an individual and join or form a team later.",
        <strong className='text-hackathone-font-rocket-red'>Step 7: Access Resources and Challenges </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Congratulations! You're now officially registered for SpaceApps 2023, Athlone. This means you'll have access to a wealth of resources, including datasets, tools, mentorship, and more to help you prepare for the hackathon. Additionally, you can explore the list of exciting challenges that await your innovation and problem-solving skills.",
        <strong className='text-hackathone-font-rocket-red'>Step 8: Get Ready for the Cosmic Adventure </strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0With your registration complete, you're one step closer to an incredible cosmic adventure. Stay tuned for updates from the Athlone event organizers, connect with fellow participants, and start brainstorming your hackathon ideas. Remember, SpaceApps is not just a competition; it's an opportunity to learn, collaborate, and contribute to space science and exploration.",
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
        "Are you gearing up for SpaceApps Athlone 2024 and wondering how to find the perfect team to tackle NASA's latest cosmic challenges?",
        "You’re in the right place!",
        "This guide will walk you through strategies and support available at the hackathon to help you form your dream team, join an existing one, or even embark on a solo space adventure.",
        <strong className='text-hackathone-font-rocket-red'>1. Team Size Flexibility</strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0One of the great aspects of SpaceApps Athlone is the flexibility in team sizes. Whether you’re flying solo or collaborating with up to five others, the hackathon encourages diverse teams with fresh ideas.",
        "You can form a team of 1 to 6 participants, allowing for a wide range of collaborations.",
        <strong className='text-hackathone-font-rocket-red'>2. Solo or Team Participation</strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0At SpaceApps Athlone, you have the freedom to choose how you want to participate. Dive into the challenges on your own, or team up with fellow space enthusiasts to combine skills and ideas.",
        <strong className='text-hackathone-font-rocket-red'>3. Registering Your Team</strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0If you decide to form a team, the team leader will need to register it on the SpaceApps platform. This step will create a hub for your collective efforts, making it easier to stay organized and focused.",
        <strong className='text-hackathone-font-rocket-red'>4. Team Joining Opportunities</strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Not up for leading a team? No problem! Team joining typically starts in late September, when registered teams become visible on the SpaceApps platform. Browse through the teams and join one that aligns with your interests and goals.",
        <strong className='text-hackathone-font-rocket-red'>5. Dedicated Chat Platform</strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0SpaceApps Athlone offers a designated chat platform, making it easy to connect with other participants. Whether you’re building a team, discussing challenges, or forming alliances, this platform is an essential resource.",
        <strong className='text-hackathone-font-rocket-red'>6. Seek Organizers’ Assistance</strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0If you’re feeling uncertain about how to find or create a team, don’t hesitate to reach out to the organizing team. They’re there to help you navigate the hackathon’s landscape and ensure you have a stellar experience.",
        <strong className='text-hackathone-font-rocket-red'>7. Cross-College Collaboration</strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0SpaceApps encourages diverse teams! Collaborate with participants from different colleges and universities, fostering cross-institutional cooperation and bringing a variety of perspectives to your team.",
        <strong className='text-hackathone-font-rocket-red'>8. Inclusion of Online Participants</strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Space knows no boundaries, and neither does SpaceApps Athlone! Online participants are welcome to form or join teams, ensuring the hackathon transcends geographical limitations and brings together talent from all over the world.",
        <strong className='text-hackathone-font-rocket-red'>9. Engage in Pitchfest</strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0At the start of the hackathon, don’t miss the Pitchfest event. Team leaders will take the stage to share their challenge goals, project ideas, and the kind of talent they’re looking for. It’s the perfect opportunity to find like-minded individuals to join your team.",
        <strong className='text-hackathone-font-rocket-red'>10. Icebreaking Sessions</strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Immediately following the Pitchfest, get ready for the icebreaking session. This is your chance to socialize, network, and meet potential teammates. Your cosmic crew could be just a conversation away!",
        <strong className='text-hackathone-font-rocket-red'>11. Color-Coded ID Cards</strong>,
        "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0To make team formation even easier, participants will receive color-coded ID cards. These stickers will represent your domain or expertise, helping others quickly identify your skills and interests. In SpaceApps Athlone 2024, forming teams, joining forces, and networking are key to your cosmic journey. Whether you’re a seasoned participant or a first-timer, there are countless opportunities to connect, collaborate, and embark on this extraordinary adventure together.",
        "Get ready to meet your cosmic crew and take on the universe!",
        "Join us from October 4th to 6th, 2024, at TU Shannon.",
        "Ignite your creativity, innovate with technology, and explore the cosmos.",
        "See you there! 🚀🌌 #SpaceApps2024 #TeamFormation #CosmicCrew #HackAthlone"

      ],
      author: "Shaiv Mehrotra",
      date: "Aug 24, 2023",
      slug: "3",
    }, {
      image: "https://i.imgur.com/pk4xjMf.png",
      tags: [{ name: "Technology" }],
      title: "Seven Reasons to Choose Space Apps Athlone",
      summary:
        'Are you ready to embark on an incredible journey of innovation and discovery at Space Apps Athlone 2024? The countdown has started, and we’re excited to reveal the amazing opportunities waiting for you at this year’s hackathon. From access to NASA’s Open Data to the chance to win a trip to witness a rocket launch, Space Apps Athlone is packed with possibilities to ignite your creativity and take your career to new heights.',
      points: [
        "1. NASA’s Open Data: Fuel Your Imagination",
        "Space Apps Athlone gives participants exclusive access to NASA’s Open Data. Imagine having the vast resources of NASA—satellite imagery, astronomical data, and a treasure trove of cosmic information—right at your fingertips. With this wealth of data, the possibilities are as limitless as the universe itself. Whether you’re creating a cutting-edge app or conducting groundbreaking research, NASA’s Open Data is your launchpad to success.",

        "2. Networking and Collaboration: Connect with the Best",
        "One of the biggest advantages of participating in Space Apps Athlone is the chance to network and collaborate with industry leaders, experts, and researchers. You’ll have the opportunity to connect with some of the brightest minds in aerospace and technology, forging valuable connections that could open doors to exciting future opportunities.",

        "3. State-of-the-Art Facilities: 48 Hours of Innovation",
        "For 48 exhilarating hours, you’ll have access to the TU Shannon Engineering Building—a hub of innovation and creativity. Here, you can work closely with your team in an environment designed to spark inspiration and innovation. It’s the perfect setting for brainstorming, prototyping, and turning your visionary ideas into reality.",

        "4. Hackshop, Hacklab, and Mentorship: Your Toolkit for Success",
        "At Space Apps Athlone, we’re committed to helping you succeed. Our Hackshop is stocked with a variety of hardware, electronics, and materials to bring your projects to life. The Hacklab offers space to tackle challenges related to hardware, electronics, mechanical engineering, and material science. Plus, you’ll have access to mentorship from experienced professionals who will guide you every step of the way.",

        "5. Meals & Beverages: Stay Energized",
        "We know that innovation requires fuel, so we provide meals and beverages throughout the 48-hour hackathon. Stay energized and focused as you work towards your goals. Whether it’s a midnight snack or a quick coffee break, we’ve got you covered.",

        "6. Prizes, Awards, and More: Reach for the Stars",
        "Space Apps Athlone offers participants the chance to win cash prizes, awards, and exclusive hackathon merchandise. But the excitement doesn’t stop there. The grand prize is a fully funded trip to NASA to witness a rocket launch in person—an experience that’s truly out of this world!",

        "7. Portfolio Boost: Elevate Your Career",
        "Participating in Space Apps Athlone is not just about the competition; it’s about gaining valuable experience that can set you apart in the job market. Add this prestigious hackathon to your portfolio and showcase your skills, teamwork, and problem-solving abilities to future employers and collaborators.",

        "Space Apps Athlone is more than just an event—it’s a launchpad for your dreams and aspirations. With NASA’s Open Data, top-notch facilities, mentorship, and incredible prizes, you have everything you need to succeed. Join us in exploring the cosmos, pushing the boundaries of technology, and making history at Space Apps Athlone 2024. Your journey to the stars begins here!"

      ],
      author: "Shaiv Mehrotra & Sneha",
      date: "Sep 13, 2023",
      slug: "4",
    }, {
      image: "https://i.imgur.com/NqvBau2.jpeg",
      tags: [{ name: "Technology" }],
      title: "Hacking the Night Away: Unveiling the Thrills of SpaceApps Athlone 2024",
      summary:
        'Are you ready to embark on a journey of innovation, sleepless nights, and boundless camaraderie? Look no further than SpaceApps Athlone 2024, a hackathon experience that will leave you exhilarated and inspired. Picture a weekend filled with coding, problem-solving, and networking with like-minded individuals from around the globe, all set against the backdrop of NASA’s International Space Apps Challenge.',
      points: [
        "Hackathon Fever: More Than Just Coding",
        "Hackathons like SpaceApps Athlone are a breed of their own, where participants, fondly called hackers, gather to create, innovate, and push their limits. It’s an electrifying atmosphere where ideas come to life, and dreams turn into projects. Whether you’re engrossed in lines of code or passionately crafting innovative solutions, this hackathon is for you.",

        "The All-Nighter",
        "Imagine this: it’s midnight, and you’re deep into your project, surrounded by fellow hackers intensely working on their own. Cups of coffee and energy drinks are scattered across the tables, fueling the night’s creativity. Sleep may become a distant memory, but the adrenaline keeps you going, whether you’re coding or applying your unique skills to other aspects of the project.",

        "Teamwork Makes the Dream Work",
        "Hackathons are as much about collaboration as they are about competition. You’ll find yourself part of a diverse team, each member bringing unique skills to the table. Together, you’ll tackle challenges, brainstorm solutions, and create something incredible. It’s a bonding experience like no other, where coding and non-coding talents unite to achieve common goals.",

        "Global Connections",
        "In the world of hackathons, geographical borders fade away. SpaceApps Athlone is your chance to connect with fellow hackers from different corners of the world. Discuss ideas, share experiences, and make lifelong friends. This hackathon’s global reach mirrors the likes of PennApps and HackMIT, making it one of the most significant and prestigious hackathons worldwide, proudly hosted by NASA.",

        "Eating, Sleeping, and Hacking",
        "At SpaceApps Athlone, the line between work and leisure blurs. You’ll see hackers working with laptops perched on makeshift desks, cozy corners occupied by brainstorming teams, and maybe even a hackathon-inspired pillow fort. Seasoned hackers often come prepared with sleeping bags, ensuring they can grab a few hours of rest before diving back into their code or project tasks.",

        "The SpaceApps Experience",
        "Imagine all of this taking place against the backdrop of NASA’s International Space Apps Challenge, the biggest hackathon in the world. SpaceApps Athlone is a global event that challenges participants to solve real-world problems with the help of NASA’s open data. It’s an opportunity to make a tangible impact on issues ranging from space exploration to climate change.",

        "Why SpaceApps Athlone?",
        "SpaceApps Athlone shares the spirit of innovation with renowned hackathons like PennApps and HackMIT. It’s a hub of creativity, learning, and collaboration. Participants don’t just code; they shape the future.",

        "As the countdown to SpaceApps Athlone 2024 begins, get ready to immerse yourself in an unforgettable hackathon experience. It’s a whirlwind of creativity, camaraderie, and project development that you won’t want to miss. So, mark your calendars, pack your bags (don’t forget that sleeping bag!), and get set to hack the night away. Join us from October 5th and 6th, 2024, at TU Shannon. Let’s reach for the stars together! 🚀🌌",

        "#SpaceApps2024 #HackAthlone #InnovationUnleashed"

      ],
      author: "Shaiv Mehrotra",
      date: "Sep 13, 2023",
      slug: "5",
    }, {
      image: "https://i.imgur.com/K803F8Z.jpeg",
      tags: [{ name: "Technology" }],
      title: "Decoding the SpaceApps Challenge 2023: How Projects Soar to Victory",
      summary:
        'As you gear up for the exhilarating journey of SpaceApps Athlone 2024, you might be curious about how your project will be judged and what criteria will guide the selection of the winners. We’ve established a transparent and comprehensive judging process to ensure that every participant understands what it takes to achieve stellar success.',
      points: [
        "Understanding the Judging Process",
        "Before diving into the specific criteria, let’s clarify the overall judging process. At SpaceApps Athlone, fairness and equity are at the core of how we recognize the brilliance of each project. Here’s a breakdown of how the judging unfolds:",

        "1. Challenge Domains: The hackathon covers various challenge domains, each focusing on different aspects of space exploration and technology. Teams compete within these domains, ensuring that projects are evaluated within a context that considers their unique themes and objectives.",
        "2. Selection of Top Teams: In each challenge domain, top-performing teams are selected based on the number of participants within that domain. This ensures that projects are assessed within the framework of their specific domains, promoting diversity and fairness.",
        "3. Choosing the Winners: From the top teams within each challenge domain, the ultimate winners are chosen. This careful process ensures that excellence is recognized within each domain, offering a level playing field for all teams.",

        "The Core Judging Criteria",
        "Now, let’s delve into the heart of the matter—the judging criteria. While we won’t reveal the exact scoring details, these criteria offer a clear roadmap for your project’s evaluation. They are designed to provide a holistic assessment, covering various dimensions to recognize technical expertise, creativity, and innovation.",

        "• Impact: We assess how your project can make a significant difference. Does it tackle a critical problem in an inventive way? Will it inspire and benefit a large audience?",
        "• Creativity: Innovation is at the core of SpaceApps. We look for projects that bring fresh, imaginative approaches to the challenges. Are you pushing the boundaries of what’s possible?",
        "• Validity: Does your solution hold up scientifically? Is it feasible in the real world? We ensure that projects are built on a strong foundation.",
        "• Relevance: Is your project directly responsive to the challenge it was submitted for? How complete, technically feasible, and user-friendly is your solution?",
        "• Presentation: Communication is key. We evaluate how effectively your team tells the story of your project. Can you clearly and persuasively explain the challenge, the solution, and its importance?",

        "Celebrating Diversity and Inclusion",
        "SpaceApps Athlone is all about celebrating diversity and innovation in all its forms. Our judging criteria are crafted to provide an inclusive platform where every team can shine. Whether you’re engineering cutting-edge software, crafting inspiring artwork, or devising ingenious solutions, our criteria ensure that your project is evaluated fairly and comprehensively.",

        "Whether you’re a technical genius, a creative visionary, or a blend of both, know that these criteria are designed to assess projects in their entirety. The SpaceApps Challenge 2024 is about pushing boundaries, unleashing creativity, and embracing the spirit of exploration. Your journey to the stars begins here, and our judging process is your roadmap to cosmic recognition.",

        "As we approach the event, stay tuned for more updates. In the meantime, keep fueling your imagination, sharpening your skills, and preparing to launch your project into the cosmic arena of SpaceApps Athlone 2024. This is a journey like no other, and together, we’ll make it truly stellar! 🚀🌌",

        "At SpaceApps Athlone, every idea has the potential to change the world, and our judging process ensures that every spark of genius is acknowledged and celebrated! 🌟🌠 #SpaceApps2024 #CosmicRecognition #JudgingCriteria #HackAthlone"

      ],
      author: "Shaiv Mehrotra",
      date: "Sep 13, 2023",
      slug: "6",
    }, {
      image: "https://i.imgur.com/GHqELEK.jpeg",
      tags: [{ name: "Technology" }],
      title: "Navigating Your Way to NASA SpaceApps Challenge at TU Shannon in Athlone",
      summary:
        'Ready to embark on an exciting journey of innovation and exploration? The NASA SpaceApps Challenge is coming to TU Shannon in Athlone, and it’s an event you won’t want to miss. This year’s challenge offers participants the option to join in person or remotely, but we highly recommend attending in person to fully immerse yourself in the hackathon experience. Imagine brainstorming with your team, coding through the night, and collaborating with like-minded space enthusiasts—all under one roof. To help you get there, we’ve put together a handy guide on how to reach TU Shannon’s engineering building from major cities like Dublin, Limerick, Cork, and Galway.',
      points: [
        "Getting There: Your Options",
        "There are three major ways to reach TU Shannon: by bus, train, or driving. Let’s explore these options to make your journey as smooth as possible.",

        "1. Taking the Bus: Your Best Bet",
        "• From Dublin, Limerick, Cork, or Galway: Several bus services connect these cities to Athlone, including Citylink, Aircoach, and Bus Éireann.",
        "• Dublin to Athlone: The 763 (Timetable) and 706/706X (Timetable) routes are ideal.",
        "• Galway to Athlone: Use the 706/706X (Timetable).",
        "• Limerick to Athlone: The Route 72 (Timetable) is available.",
        "• Cork to Athlone: Travel via Galway using Route 51 (Timetable) or via Dublin with Route 704X (Timetable).",
        "• Final Steps: Buses drop you off at a central location in Athlone. From there, follow signs leading to TU Shannon’s engineering building.",
        "Pro tip: Book your bus tickets in advance to save both time and money, especially since it’s a weekend event!",

        "2. Opt for the Train: Comfortable and Budget-Friendly",
        "• From Major Cities: Irish Rail offers train services to Athlone from cities like Dublin, Limerick, and Galway.",
        "• Booking: Pre-book your tickets here (https://www.irishrail.ie/) for a comfortable journey.",
        "• From the Train Station: The station is approximately 3 kilometers from TU Shannon’s engineering building. Consider taking a cab or bus (Route ATH1 or A1) from the station to the venue.",

        "3. Driving: Flexibility and Convenience",
        "• Travel by Car: Enjoy the flexibility of driving to Athlone, with ample parking available at TU Shannon’s engineering building.",
        "• Navigation: Use Google Maps to find the best route to TU Shannon.",

        "In Conclusion",
        "Remember, you’re not alone in this journey! Volunteers will be on hand to assist you if you face any issues. The NASA SpaceApps Challenge at TU Shannon in Athlone promises to be an unforgettable experience. Whether you’re traveling from Dublin, Limerick, Cork, Galway, or any other city, you have several convenient transportation options at your disposal. Plan ahead, book your tickets in advance, and get ready to embark on a journey of innovation, collaboration, and exploration. We can’t wait to see you there!",

        "Join us from October 5th and 6th, 2024, at TU Shannon. Let’s reach for the stars together! 🚀🌌",
        "#SpaceApps2024 #HackAthlone"

      ],
      author: "Shaiv Mehrotra",
      date: "Sep 13, 2023",
      slug: "7",
    }, {
      image: "https://i.imgur.com/fO5GbMO.jpeg",
      tags: [{ name: "Technology" }],
      title: "Navigating the SpaceApps Hackathon Challenges: A Guide to Choosing Your Path",
      summary:
        'Are you prepared to embark on a stellar journey of creativity, data analysis, game development, and space exploration? The NASA SpaceApps Challenge 2024 has arrived, bringing with it a constellation of exciting challenges. With 31 unique challenges across four diverse domains, it’s time to plot your course among the stars. In this blog, we’ll guide you on how to select the perfect challenge for your adventure.',
      points: [
        "A Universe of Domains: Diverse Challenges Await",

        "The SpaceApps Hackathon 2024 presents a wide array of challenges spread across various domains:",

        "• Space Exploration: Delve into the mysteries of the cosmos, unravel celestial phenomena, and tackle real-world challenges related to space travel.",
        "• Creative: Tap into your artistic side with challenges that invite storytelling, visualizations, and content creation focused on space and science.",
        "• Data Science: Immerse yourself in data analytics and visualization, uncovering insights from space-related datasets to contribute to groundbreaking discoveries.",
        "• Game Development: For gaming enthusiasts, these challenges let you create interactive experiences and educational games centered around space and science themes.",
        "• Climate: Address challenges focused on climate science, sustainability, and environmental awareness, making a tangible impact on our planet.",
        "• Art: Combine science and creativity by taking on challenges that encourage artistic expressions inspired by space and scientific concepts.",
        "• Open Science: Dive into open science projects, contributing to collaborative research and discoveries.",

        "Difficulty Levels: Tailored to Your Experience",

        "Each challenge comes with a difficulty level to help you find the one that matches your skills and experience:",

        "• Beginner: Perfect for those new to the field or looking to get started. These challenges often include step-by-step guidance.",
        "• Intermediate: For participants with some experience who seek a moderate challenge that requires a bit more expertise.",
        "• Advanced: Designed for seasoned experts, these challenges pose complex problems that demand deep knowledge and innovative solutions.",

        "How to Choose Your Challenge",

        "With so many challenges to explore, how do you select the right one? Here’s a guide:",

        "1. Register: Start by registering for the SpaceApps Hackathon. Once registered, you’ll have access to the full list of challenges.",
        "2. Explore: Take your time to read through the challenge descriptions, understanding the problem statement, goals, and expected outcomes.",
        "3. Filter by Domain: Focus on the domain that aligns with your interests and skills—whether it’s space exploration, creative, data science, or game development.",
        "4. Filter by Difficulty: Select a challenge based on your expertise. Beginners should start with easier challenges to build confidence.",
        "5. Follow Your Passion: Choose a challenge that truly excites you. Passion drives creativity, so pick one that resonates with your interests.",
        "6. Team or Solo: Decide if you want to work solo or with a team. Some challenges may require diverse skills, making teamwork essential.",
        "7. Expand Your Horizons: Don’t limit yourself—explore multiple challenges across different domains and difficulty levels to broaden your experience.",

        "By following these steps, you’ll be well-equipped to select a challenge that aligns with your skills, passions, and goals. Remember, the SpaceApps Hackathon isn’t just a competition—it’s an opportunity to learn, collaborate, and contribute to space science and exploration.",

        "Whether you’re a budding astronomer or a seasoned space enthusiast, there’s a challenge waiting for you. Gear up for your cosmic journey at the SpaceApps Hackathon 2024, and may the stars guide your path."

      ],
      author: "Shaiv Mehrotra",
      date: "Sep 13, 2023",
      slug: "8",
    }, {
      image: "https://i.imgur.com/PPjAUbl.jpeg",
      tags: [{ name: "Technology" }],
      title: "How Hackathons Fuel Personal Growth and Prepare You for Life's Challenges",
      summary:
        'Hackathons are not just about coding and competition; they are transformative experiences that mold individuals into resilient, innovative thinkers ready to tackle real-world challenges. Whether you\'re a seasoned developer or a newcomer to the tech scene, participating in a hackathon like SpaceApps Athlone can significantly impact your personal growth and readiness for future endeavors.',
      points: [
        "Embracing the Challenge",

        "Hackathons immerse participants in an intensive, fast-paced environment where creativity and problem-solving skills are put to the test. The challenges presented often require thinking outside the box, collaborating effectively within a team, and managing time under pressure. These experiences nurture adaptability and the ability to thrive in dynamic situations—essential qualities in both professional and personal life.",

        "Learning through Collaboration",

        "One of the most valuable aspects of hackathons is the opportunity to collaborate with diverse individuals—engineers, designers, domain experts, and more—who bring unique perspectives to the table. Teamwork not only enhances technical skills but also fosters interpersonal communication, empathy, and leadership qualities. These collaborative efforts mirror real-world project dynamics, where success hinges on collective innovation and mutual support.",

        "Rapid Prototyping and Innovation",

        "At hackathons, participants often move swiftly from ideation to prototype development. This rapid iteration cycle cultivates a mindset of experimentation and risk-taking. Iterative problem-solving teaches resilience in the face of setbacks and the importance of persistence—a trait crucial for navigating challenges in any professional field.",

        "Networking and Mentorship",

        "Hackathons provide unparalleled networking opportunities with industry professionals, mentors, and potential employers. Engaging with experienced mentors not only enhances technical skills but also offers insights into career pathways and industry trends. Building a network of peers and mentors can open doors to future collaborations, job opportunities, and continued learning beyond the hackathon.",

        "Confidence and Presentation Skills",

        "Presenting a project to judges and peers at the culmination of a hackathon requires clear communication and the ability to articulate complex ideas concisely. This experience boosts confidence in public speaking and enhances presentation skills—valuable assets in job interviews, client meetings, and professional conferences.",

        "Personal Reflection and Growth",

        "Beyond technical skills and career benefits, hackathons encourage personal reflection and growth. Participants often discover new passions, expand their horizons, and gain a deeper understanding of their strengths and areas for development. These self-discoveries foster a growth mindset and a lifelong commitment to learning and innovation.",

        "Conclusion",

        "Participating in a hackathon like SpaceApps Athlone is not just about coding—it's about embracing challenges, collaborating with diverse teams, innovating rapidly, and growing personally and professionally. The skills and experiences gained from hackathons prepare individuals to navigate the complexities of the modern world, equipping them with resilience, creativity, and a passion for continuous improvement."

      ],
      author: "Shaiv Mehrotra",
      date: "Sep 13, 2023",
      slug: "9",
    }, {
      image: "https://i.imgur.com/FLcz4Qn.jpeg",
      tags: [{ name: "Technology" }],
      title: "Mastering SpaceApps Athlone: Tips for a Stellar Hackathon Experience",
      summary:
        'Hackathons are not just about coding and competition; they are transformative experiences that mold individuals into resilient, innovative thinkers ready to tackle real-world challenges. Whether you\'re a seasoned developer or a newcomer to the tech scene, participating in a hackathon like SpaceApps Athlone can significantly impact your personal growth and readiness for future endeavors.',
      points: [
        "Team Up: Collaborate for Galactic Success",

        "• Break the Ice: As you step into the hackathon, take the initiative to engage with your fellow participants. Use ice-breakers, pitch a small idea, or showcase your skills. It’s all about making connections and finding like-minded space enthusiasts.",

        "• Pre-Hackathon Team Formation: If you already have a team in mind or want to form one before the event, go for it! Collaborating with a diverse group can amplify your problem-solving capabilities.",

        "• Leverage Your Proficiencies: Once in a team, identify your strengths and contribute accordingly. Whether it’s coding, design, research, or presentation skills, take on a role that aligns with your talents.",

        "Network: Forge Cosmic Connections",

        "• Engage with Fellow Participants: Hackathons are more than just coding marathons; they’re opportunities to build connections that can last a lifetime. Engage with fellow participants, discuss project ideas, and share your experiences. These interactions can lead to valuable collaborations.",

        "• Connect with Mentors: Seek guidance from mentors who can offer insights, technical expertise, and advice on problem-solving. Their experience can be invaluable in steering your project in the right direction.",

        "• Expand Your LinkedIn Universe: Don’t miss the chance to grow your professional network. During the hackathon, connect with people on LinkedIn, and send personalized messages sharing your experiences and the connections you’ve forged.",

        "Solution Demo: Shine with Your Innovation",

        "• Showcase Your Solution: When presenting your project, take the opportunity to highlight the innovation behind your solution. Whether it’s a working prototype, a practical demo, or a simulation, a visually compelling presentation can leave a lasting impression.",

        "• Proof of Concept: Aim to develop a proof of concept. Having an institution validate the value of your proposed solution can add credibility and impact to your project.",

        "Time Management: Hackathon Hours Are Precious",

        "• Manage Your Time Effectively: Time flies during a hackathon. Prioritize tasks, set realistic goals, and allocate time wisely. Stay organized to ensure you make the most of every coding minute.",

        "Final Presentations: Shine Bright on Stage",

        "• Perfect Your Pitch: As the hackathon concludes, practice your pitch rigorously. Plan the timing of your presentation carefully, and remember that not everyone on your team needs to speak. Use a structured approach to organize your thoughts early in the hack.",

        "Seek SME Validation: Tap into Mentor Resources",

        "• Utilize Mentor Hours: Don’t hesitate to leverage mentor hours to consult with experts in your project’s field. Their feedback and guidance can be instrumental in refining your solution.",

        "Hackshop: Secure Your Components Early",

        "• Battling for Resources: In a hackathon where electronic components are limited, especially those in high demand, it’s essential to secure them as soon as possible. Visit the Hackshop early to avoid potential bottlenecks.",

        "Ethical Considerations: The Universal Code of Conduct",

        "• Uphold Ethical Standards: Remember to maintain ethical standards throughout the hackathon. Respect your teammates, mentors, and fellow participants. Be inclusive, collaborative, and always prioritize the integrity of your work.",

        "As you embark on your hackathon journey at SpaceApps Athlone 2024, keep these tips in mind. They’ll not only enhance your experience but also elevate the impact of your projects. Get ready to ignite your creativity, innovate with technology, and explore new horizons. We can’t wait to see your aspirations come to life!"
      ],
      author: "Shaiv Mehrotra",
      date: "Sep 13, 2023",
      slug: "10",
    }

  ]
  const blog = blogs.find((b) => b.slug === slug);


  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <div className="relative min-h-screen bg-black text-slate-50">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <CloudParticleBg />
        </Canvas>
      </div>
      <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
        <NavigationBar />
        {/* laptop view */}
        <div className="hidden lg:block mx-24 my-16 pl-2">

          <Tooltip text="Back to Blogs">
            <IconButton
              variant="contained"
              size="large"
              color="primary"
              onClick={handleBack}
              className="mr-4 text-white hover:text-hackathone-font-rocket-red TabletScreen:hidden MobileScreen:hidden mb-8"
              edge="start"
              sx={{
                width: '4.5rem',
                height: '4.5rem',
                fontSize: '6rem',
                transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.3)',
                },
              }}
              aria-label="back to home"
            >
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="#EAFE07" />
                <path d="M50 76L54.5825 71.4175L36.4475 53.25L76 53.25L76 46.75L36.4475 46.75L54.5825 28.5825L50 24L24 50L50 76Z" fill="black" />
              </svg>
            </IconButton>
          </Tooltip>

          <div className="">

            <img
              src={blog.image}
              width={1200}  // Increase these values as needed
              height={1200}
              className="lg:float-right w-1/2 h-auto ml-16 mb-10 rounded-lg"
              alt="Blog Image"
            />
          </div>
          <div className="font-hackathoneCabinetGrotesk">
            <h2 className="text-4xl md:text-5xl font-bold  mb-4 text-white font-hackathoneSFProDisplay">
              {blog.title}
            </h2>
            <p className="text-base md:text-2xl  mt-2 text-hackathone-font-rocket-red mb-10">
              {blog.author} - {blog.date}
            </p>
            <p className="text-xl md:text-xl text-slate-50 mt-8 ">
              {blog.summary}
            </p>
            <br />
            <ul className="list-none space-y-8 ">
              {blog.points.map((point, index) => (
                <li
                  key={`event-point-${index}`}
                  className="text-xl md:text-xl text-slate-50 "
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Mobile view */}
        <div className="block lg:hidden mx-8 my-12 flex flex-col ">
          <Tooltip text="Back to Blogs">
            <IconButton
              variant="contained"
              size="large"
              color="primary"
              onClick={handleBack}
              className="mr-4 text-white hover:text-hackathone-font-rocket-red mb-8"
              edge="start"
              sx={{
                width: '3.5rem',
                height: '3.5rem',
                fontSize: '4rem',
                transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.2)',
                },
              }}
              aria-label="back to home"
            >
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="#EAFE07" />
                <path d="M50 76L54.5825 71.4175L36.4475 53.25L76 53.25L76 46.75L36.4475 46.75L54.5825 28.5825L50 24L24 50L50 76Z" fill="black" />
              </svg>
            </IconButton>
          </Tooltip>
          <img
            src={blog.image}
            width={1200}  // Increase these values as needed
            height={1200}
            className="w-auto h-auto mb-8 rounded-lg"
            alt="Blog Image"
          />

          <div className="font-hackathoneCabinetGrotesk">
            <h2 className="text-4xl md:text-5xl font-semibold  mb-4 text-slate-50">
              {blog.title}
            </h2>
            <p className="text-base md:text-2xl  mt-2 text-hackathone-font-rocket-red mb-10">
              {blog.author} - {blog.date}
            </p>
            <p className="text-base md:text-lg text-slate-50 mt-8 ">
              {blog.summary}
            </p>
            <br />
            {/* <ul className="list-none space-y-4">
              {blog.points.map((point, index) => (
                <li
                  key={`event-point-${index}`}
                  className="text-base md:text-lg text-slate-50"
                >
                  {point}
                </li>
              ))}

            </ul> */}
            <ul className="list-none space-y-4">
              {blog.points.map((point, index) => (
                <li
                  key={`event-point-${index}`}
                  className="text-base md:text-lg text-slate-50"
                >
                  {typeof point === 'string' ? point : <>{point}</>}  {/* Handle JSX wrapping */}
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
