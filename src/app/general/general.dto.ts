import Aeb from "@/assets/images/general/landing-page/space-agencies/aeb_w.png";
import Asi from "@/assets/images/general/landing-page/space-agencies/asi.png";
import Aem from "@/assets/images/general/landing-page/space-agencies/aem_w.png";
import Aep from "@/assets/images/general/landing-page/space-agencies/aep1.png";
import Australia from "@/assets/images/general/landing-page/space-agencies/australia_w.png";
import Canada from "@/assets/images/general/landing-page/space-agencies/canada_w.png";
import Conae from "@/assets/images/general/landing-page/space-agencies/conae.png";
import Eesa from "@/assets/images/general/landing-page/space-agencies/eesa.png";
import Isro from "@/assets/images/general/landing-page/space-agencies/isro_w.png";
import Jaxa from "@/assets/images/general/landing-page/space-agencies/jaxa.png";
import Nssa from "@/assets/images/general/landing-page/space-agencies/nssa_w.png";
import Sansa from "@/assets/images/general/landing-page/space-agencies/sansa.png";
import Turkey from "@/assets/images/general/landing-page/space-agencies/tsa_w.png";
import Cst from "@/assets/images/general/landing-page/space-agencies/cst_w.png";
import Ssa from "@/assets/images/general/landing-page/space-agencies/spanish_w.png";
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
import Antriksh from "@/assets/images/general/landing-page/team_section/antriksh.png"
import Arthemis from "@/assets/images/general/landing-page/team_section/arthemis_go.png"
import Cococrunch from "@/assets/images/general/landing-page/team_section/cococrunch.png"
import HelpKelp from "@/assets/images/general/landing-page/team_section/help-kelp.png"
import IDontThink from "@/assets/images/general/landing-page/team_section/idontthink.png"

// Get the current date in Irish time and format it
const currentDateInIrishTime = new Date(
  new Date().toLocaleString("en-US", {
    timeZone: "Europe/Dublin",
  })
);

// Format the date as '27th August 2024'
const options = {
  day: "numeric" as const,   // Use 'numeric' for the day
  month: "long" as const,    // Use 'long' for the full month name
  year: "numeric" as const,  // Use 'numeric' for the year
};
const formattedDate = currentDateInIrishTime.toLocaleString("en-IE", options);

const day = currentDateInIrishTime.getDate();
const getOrdinalSuffix = (day: number) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
const dayWithSuffix = day + getOrdinalSuffix(day);
const currentDate = formattedDate.replace(day.toString(), dayWithSuffix);

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
        "https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/",
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
  {
    img: Cst,
    route: () => window.open("https://www.cst.gov.sa", "_blank"),
  },
  {
    img: Ssa,
    route: () => window.open("https://www.aee.gob.es/", "_blank"),
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
    img: HelpKelp,
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
    img: Cococrunch,
    text: `“Initially, we struggled with hard coding from scratch, but a mentor's advice to focus on product design improved our teamwork. While the event was challenging, it offered valuable learning experiences, though better communication and more diverse food options could enhance future hackathons.”`,
    author: "Cococrunch",
  },
  {
    img: Arthemis,
    text: `“It was a wonderful experience, 3 days of brain storming, networking,
     and hacking. I would definitely want to be a part of the next one and more to come.
     The tutors and instructors were very helpful and worked hard too as well.
     Happy to be a part of it”`,
    author: "Artemis Go",
  },
  {
    img: IDontThink,
    text: `“Great Event, run very well with lots of opportunities to gain experience
     and make connections. Great experience for similar events in the future.
     Provided food and drinks and made sure everyone was satisfied!”`,
    author: "IdontThink",
  },
  {
    img: Antriksh,
    text: `“Great first hackathon. Mentors and organisers were very kind and helpful, providing key insights and suggestions to our project. I believe the lunch could’ve been improved for both the days. While dinner was great, lunch was just rolls and sandwiches. The guy who took the photographs was great as well! Shoutout to him!”`,
    author: "Team Antriksh",
  },
];

export const events = [
  {
    date: currentDate,
    title: "2024 Challenges are out",
    subtitle: "Explore and choose the one that fits you the best!",
    content: `Register for a Local Event near you or 
    our Universal Event (please note you MUST be 
    registered for a Local Event or Universal Event to participate).`,
    slug: '0',
  },
  {
    date: "4th October 2024:",
    title: "Day 1",
    subtitle: "Assemble at TU Shannon & Start problem-solving with your team",
    content: `Get ready for the NASA Space Apps Challenge!
     Check your Space Apps Messages, review the Participant`,
    slug: '1',
  },
  {
    date: "5th October 2024:",
    title: "Day 2",
    subtitle: "Connect with industry experts: Get tips and feedback for your project",
    content: `At 9:00 a.m. (local time) teams may begin 
    working on their hackathon projects. Project submission
    opens at 9:00 a.m.`,
    slug: '2',
  },
  {
    date: "6th October 2024:",
    title: "Day 3",
    subtitle: "Get ready to present your project & Get a chance to win the challenge",
    content: ` The hackathon ends at 11:59 p.m. (local time). 
 All projects must be submitted to the NASA Space
 Apps Challenge website by this deadline.`,
    slug: '3',
  },
];