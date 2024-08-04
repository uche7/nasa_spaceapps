import Aeb from "@/assets/images/general/landing-page/space-agencies/aeb.png";
import Asi from "@/assets/images/general/landing-page/space-agencies/asi.png";
import Aem from "@/assets/images/general/landing-page/space-agencies/aem.png";
import Aep from "@/assets/images/general/landing-page/space-agencies/aep.png";
import Australia from "@/assets/images/general/landing-page/space-agencies/australia.png";
import Canada from "@/assets/images/general/landing-page/space-agencies/canada.png";
import Conae from "@/assets/images/general/landing-page/space-agencies/conae.png";
import Eesa from "@/assets/images/general/landing-page/space-agencies/eesa.png";
import Isro from "@/assets/images/general/landing-page/space-agencies/isro.png";
import Jaxa from "@/assets/images/general/landing-page/space-agencies/jaxa.png";
import Nssa from "@/assets/images/general/landing-page/space-agencies/nssa.png";
import Sansa from "@/assets/images/general/landing-page/space-agencies/sansa.png";
import Turkey from "@/assets/images/general/landing-page/space-agencies/turkey.svg";
import Google from "@/assets/images/general/landing-page/collabrators/google.png";
import Microsoft from "@/assets/images/general/landing-page/collabrators/microsoft.png";
import Teams from "@/assets/images/general/landing-page/collabrators/teams.png";
import Tableau from "@/assets/images/general/landing-page/collabrators/tableau.png";
import GoDaddy from "@/assets/images/general/landing-page/collabrators/goDaddy.png";
import Planet from "@/assets/images/general/landing-page/collabrators/planet.png";
import Azure from "@/assets/images/general/landing-page/collabrators/azure.png";
import Miro from "@/assets/images/general/landing-page/collabrators/miro.png";
import Ibm from "@/assets/images/general/landing-page/collabrators/ibm.png";
import Tus1 from "@/assets/images/general/landing-page/mapping-images/tus1.jpg";
import Tus2 from "@/assets/images/general/landing-page/mapping-images/tus2.jpg";
import Tus3 from "@/assets/images/general/landing-page/mapping-images/tus3.jpg";
import Tus4 from "@/assets/images/general/landing-page/mapping-images/tus4.jpg";

export const navigationData = (Router: any) => [
  {
    text: "Home",
    route: () => Router.push("/"),
  },
  {
    text: "Blogs",
    route: () => Router.push("/blogs"),
  },
  {
    text: "FAQ's",
    route: () => Router.push("/faq"),
  },
  {
    text: "Challenges",
    route: () =>
      window.open(
        "https://www.spaceappschallenge.org/2023/challenges/",
        "_blank"
      ),
  },
];

export const countDownData = [
  {
    counts: "28,286",
    dec1: "Registered",
    dec2: "Participants",
  },
  {
    counts: "323",
    dec1: "Local Virtual",
    dec2: "Events",
  },
  {
    counts: "4,534",
    dec1: "Teams",
    dec2: "Participated",
  },
  {
    counts: "12",
    dec1: "International",
    dec2: "Space Agencies",
  },
];

export const agenciesSlider = [
  {
    img: Asi,
    route: () => window.open("https://www.asi.it/en/", "_blank"),
  },
  {
    img: Aem,
    route: () =>
      window.open(
        "https://www.iafastro.org/membership/all-members/agencia-espacial-mexicana-aem.html",
        "_blank"
      ),
  },
  {
    img: Aep,
    route: () => window.open("https://aep.gov.py/", "_blank"),
  },
  {
    img: Australia,
    route: () =>
      window.open(
        "https://www.industry.gov.au/australian-space-agency",
        "_blank"
      ),
  },
  {
    img: Canada,
    route: () => window.open("https://www.asc-csa.gc.ca/eng/", "_blank"),
  },
  {
    img: Aeb,
    route: () =>
      window.open(
        "https://www.iafastro.org/membership/all-members/brazilian-space-agency-aeb.html",
        "_blank"
      ),
  },
  {
    img: Conae,
    route: () =>
      window.open("https://www.argentina.gob.ar/ciencia/conae", "_blank"),
  },
  {
    img: Eesa,
    route: () => window.open("https://www.esa.int/", "_blank"),
  },
  {
    img: Isro,
    route: () => window.open("https://www.isro.gov.in/", "_blank"),
  },
  {
    img: Jaxa,
    route: () => window.open("https://global.jaxa.jp/", "_blank"),
  },
  {
    img: Nssa,
    route: () =>
      window.open(
        "https://www.iafastro.org/membership/all-members/national-space-science-agency-nssa.html",
        "_blank"
      ),
  },
  {
    img: Sansa,
    route: () => window.open("https://www.sansa.org.za/", "_blank"),
  },
  {
    img: Turkey,
    route: () => window.open("https://tua.gov.tr/en", "_blank"),
  },
];

export const collabratorsSlider = [
  {
    img: Google,
    route: () => window.open("https://about.google/", "_blank"),
  },
  {
    img: Microsoft,
    route: () =>
      window.open("https://www.microsoft.com/en-in/about/", "_blank"),
  },
  {
    img: Teams,
    route: () =>
      window.open(
        "https://www.microsoft.com/en-US/microsoft-teams/group-chat-software",
        "_blank"
      ),
  },
  {
    img: Tableau,
    route: () => window.open("https://www.tableau.com/", "_blank"),
  },
  {
    img: GoDaddy,
    route: () => window.open("https://www.godaddy.com/en-in", "_blank"),
  },
  {
    img: Planet,
    route: () => window.open("https://www.planet.com/", "_blank"),
  },
  {
    img: Azure,
    route: () => window.open("https://azure.microsoft.com/en-in/", "_blank"),
  },
  {
    img: Miro,
    route: () => window.open("https://miro.com/", "_blank"),
  },
  {
    img: Ibm,
    route: () => window.open("https://www.ibm.com/in-en", "_blank"),
  },
];

export const MapLogos = [
  { src: Tus1 },
  { src: Tus2 },
  { src: Tus3 },
  { src: Tus4 },
];

export const Stories = [
  {
    text: `“I teamed up with people from different backgrounds, 
    but we all had the same interests, which are sharing experiences 
    and ideas. It was a good experience to hear different perspectives
    and ideas regarding our challenge 'Ocean Garden' which we focusing
    on the seaweed kelp. The discussion around was fun and enjoyable.
    Furthermore, one of our passionate member even cooked a kelp dish
    to prove that it is edible and pull more attentions from public crowd.
    However, without discussion as a team, I found that we were working
    on collecting resources from internet and designing web application aimless.
    I hope we could meet up before the event starts so that we could lay out 
    our strategies and have a more solid approach towards the challenge.”`,
    author: "Help Kelp, Help Ourselves",
  },

  {
    text: `“We were positively challenged by the SpaceApps hackathon and were
     very warmly supported throughout the whole event! The organizing team did 
     an incredible job by providing food and shelter to everybody. Everyone was
     nice and helpful to the maximum with all kinds of technical or comfort requests.
     The pizzas and coffee again proved to be invaluable resources for brain
     activity :) Last but not least, the mentors had made an incredible impact
     on our project and others, too. Fermi Paradox team is grateful for this
     opportunity, we hope that next year there will be more attendees,
     more fun and more great ideas!”`,
    author: "Fermi Paradox",
  },
  {
    text: `“It was a wonderful experience, 3 days of brain storming, networking,
     and hacking. I would definitely want to be a part of the next one and more to come.
     The tutors and instructors were very helpful and worked hard too as well.
     Happy to be a part of it”`,
    author: "Athermis GO!",
  },
  {
    text: `“Great Event, run very well with lots of opportunities to gain experience
     and make connections. Great experience for similar events in the future.
     Provided food and drinks and made sure everyone was satisfied!”`,
    author: "IdontThink",
  },
  {
    text: `“Great Experience, kudos to the organizers & looking forward to next year's event.”`,
    author: "Team Antriksh",
  },
];

export const events = [
  {
    date: "18th July 2024",
    title: "Registration opens!",
    content: `Register for a Local Event near you or 
    our Universal Event (please note you MUST be 
    registered for a Local Event or Universal Event to participate).`,
  },
  {
    date: "4th October 2024",
    title: "Hackathon Begins!",
    content: `Get ready for the NASA Space Apps Challenge!
     Check your Space Apps Messages, review the Participant
      Guides and challenges, and connect with your Local
       Event Lead and teammates. Tune in to the Welcome 
       to Space Apps kick off video at 5:00 p.m. EST, 
       featuring messages from the GO Team and special guests`,
  },
  {
    date: "5th October 2024",
    title: "First day of the hackathon",
    content: `At 9:00 a.m. (local time) teams may begin 
    working on their hackathon projects. Project submission
    opens at 9:00 a.m. Teams will be able to edit and
    submit their projects until 11:59 p.m. (local time)
       on October 6. Experts from NASA, Space Agency Partners,
        and industry will be available in Space Apps Connect
         to answer questions about the Challenge Statements
          and data. We know you’ll be working with your team 
          tirelessly to create your project during the hackathon.
           Don’t forget to take breaks, stay hydrated,
            and balance your hard work with fun!`,
  },
  {
    date: "6th October 2024",
    title: "Hackathon Ends!",
    content: ` The hackathon ends at 11:59 p.m. (local time). 
 All projects must be submitted to the NASA Space
 Apps Challenge website by this deadline. Teams 
 must submit their projects in accordance with 
  the time of the Local Event location for which
   the team is registered. *If your team is registered 
   for the Universal Event, your project must be submitted 
   in accordance with the local time of the person who
    created the team (Team Lead). You did it! Pat yourself
     on the back for making it through the hackathon. What an achievement!`,
  },
];
