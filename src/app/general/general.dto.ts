import Aeb from "@/assets/images/general/landing-page/space-agencies/aeb_w.png";
import Aeb_O from "@/assets/images/general/landing-page/space-agencies/aeb_round.png";
import Asi from "@/assets/images/general/landing-page/space-agencies/asi.png";
import Asi_O from "@/assets/images/general/landing-page/space-agencies/asi_round.png";
import Aem from "@/assets/images/general/landing-page/space-agencies/aem_w.png";
import Aem_O from "@/assets/images/general/landing-page/space-agencies/aem_round.png";
import Aep from "@/assets/images/general/landing-page/space-agencies/aep1.png";
import Aep_O from "@/assets/images/general/landing-page/space-agencies/aep_round.png";
import Australia from "@/assets/images/general/landing-page/space-agencies/australia_w.png";
import Australia_O from "@/assets/images/general/landing-page/space-agencies/australia_round.png";
import Canada from "@/assets/images/general/landing-page/space-agencies/canada_w.png";
import Canada_O from "@/assets/images/general/landing-page/space-agencies/canada_round.png";
import Conae from "@/assets/images/general/landing-page/space-agencies/conae.png";
import Conae_O from "@/assets/images/general/landing-page/space-agencies/conae_round.png";
import Eesa from "@/assets/images/general/landing-page/space-agencies/eesa.png";
import Eesa_O from "@/assets/images/general/landing-page/space-agencies/eesa_round.png";
import Isro from "@/assets/images/general/landing-page/space-agencies/isro_w.png";
import Isro_O from "@/assets/images/general/landing-page/space-agencies/isro_round.png";
import Jaxa from "@/assets/images/general/landing-page/space-agencies/jaxa.png";
import Jaxa_O from "@/assets/images/general/landing-page/space-agencies/jaxa_round.png";
import Nssa from "@/assets/images/general/landing-page/space-agencies/nssa_w.png";
import Nssa_O from "@/assets/images/general/landing-page/space-agencies/nssa_round.png";
import Sansa from "@/assets/images/general/landing-page/space-agencies/sansa.png";
import Sansa_O from "@/assets/images/general/landing-page/space-agencies/sansa_round.png";
import Turkey from "@/assets/images/general/landing-page/space-agencies/tsa_w.png";
import Turkey_O from "@/assets/images/general/landing-page/space-agencies/turkish_round.png";
import Cst from "@/assets/images/general/landing-page/space-agencies/cst_w.png";
import Cst_O from "@/assets/images/general/landing-page/space-agencies/cst_round.png";
import Ssa from "@/assets/images/general/landing-page/space-agencies/spanish_w.svg";
import Ssa_O from "@/assets/images/general/landing-page/space-agencies/spanish.jpg";
import Google from "@/assets/images/general/landing-page/collabrators/google.png";
import Mindgrub from "@/assets/images/general/landing-page/collabrators/mindgrub.png";
import Booz from "@/assets/images/general/landing-page/collabrators/booz.png";
import Tableau from "@/assets/images/general/landing-page/collabrators/tableau.png";
import GoDaddy from "@/assets/images/general/landing-page/collabrators/goDaddy.png";
import Planet from "@/assets/images/general/landing-page/collabrators/planet.png";
import Azure from "@/assets/images/general/landing-page/collabrators/azure.png";
import Miro from "@/assets/images/general/landing-page/collabrators/miro.png";
import SecondMuse from "@/assets/images/general/landing-page/collabrators/muse.png";
import Tus1 from "@/assets/images/general/landing-page/mapping-images/tus1.jpg";
import Tus2 from "@/assets/images/general/landing-page/mapping-images/tus2.jpg";
import Tus3 from "@/assets/images/general/landing-page/mapping-images/tus3.jpg";
import Tus4 from "@/assets/images/general/landing-page/mapping-images/tus4.jpg";
import Antriksh from "@/assets/images/general/landing-page/team_section/antriksh.png";
import Arthemis from "@/assets/images/general/landing-page/team_section/arthemis_go.png";
import Cococrunch from "@/assets/images/general/landing-page/team_section/cococrunch.png";
import HelpKelp from "@/assets/images/general/landing-page/team_section/help-kelp.png";
import IDontThink from "@/assets/images/general/landing-page/team_section/idontthink.png";
import Ms from "@/assets/images/general/landing-page/collabrators/ms.png";
import HackathloneChallenge from "@/assets/images/general/landing-page/hackathlone_challenge.jpg";
import Machine from "@/assets/images/general/landing-page/machine.jpg";
import GloablCollabSection from "@/assets/images/general/landing-page/gloabl_collab_section.jpg";
import AppleEye from "@/assets/images/general/landing-page/apple-eye.jpg";
import Office from "@/assets/images/general/landing-page/office.jpg";
import Robotics from "@/assets/images/general/landing-page/robotics.jpg";
// Get the current date in Irish time and format it
const currentDateInIrishTime = new Date(
  new Date().toLocaleString("en-US", {
    timeZone: "Europe/Dublin",
  })
);

// Format the date as '27th August 2024'
const options = {
  day: "numeric" as const, // Use 'numeric' for the day
  month: "long" as const, // Use 'long' for the full month name
  year: "numeric" as const, // Use 'numeric' for the year
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
    imgOrigin: Asi_O,
    route: () => window.open("https://www.asi.it/en/", "_blank"),
  },
  {
    img: Aem,
    imgOrigin: Aem_O,
    route: () =>
      window.open(
        "https://www.iafastro.org/membership/all-members/agencia-espacial-mexicana-aem.html",
        "_blank"
      ),
  },
  {
    img: Aep,
    imgOrigin: Aep_O,
    route: () => window.open("https://aep.gov.py/", "_blank"),
  },
  {
    img: Australia,
    imgOrigin: Australia_O,
    route: () =>
      window.open(
        "https://www.industry.gov.au/australian-space-agency",
        "_blank"
      ),
  },
  {
    img: Canada,
    imgOrigin: Canada_O,
    route: () => window.open("https://www.asc-csa.gc.ca/eng/", "_blank"),
  },
  {
    img: Aeb,
    imgOrigin: Aeb_O,
    route: () =>
      window.open(
        "https://www.iafastro.org/membership/all-members/brazilian-space-agency-aeb.html",
        "_blank"
      ),
  },
  {
    img: Conae,
    imgOrigin: Conae_O,
    route: () =>
      window.open("https://www.argentina.gob.ar/ciencia/conae", "_blank"),
  },
  {
    img: Eesa,
    imgOrigin: Eesa_O,
    route: () => window.open("https://www.esa.int/", "_blank"),
  },
  {
    img: Isro,
    imgOrigin: Isro_O,
    route: () => window.open("https://www.isro.gov.in/", "_blank"),
  },
  {
    img: Jaxa,
    imgOrigin: Jaxa_O,
    route: () => window.open("https://global.jaxa.jp/", "_blank"),
  },
  {
    img: Nssa,
    imgOrigin: Nssa_O,
    route: () =>
      window.open(
        "https://www.iafastro.org/membership/all-members/national-space-science-agency-nssa.html",
        "_blank"
      ),
  },
  {
    img: Sansa,
    imgOrigin: Sansa_O,
    route: () => window.open("https://www.sansa.org.za/", "_blank"),
  },
  {
    img: Turkey,
    imgOrigin: Turkey_O,
    route: () => window.open("https://tua.gov.tr/en", "_blank"),
  },
  {
    img: Cst,
    imgOrigin: Cst_O,
    route: () => window.open("https://www.cst.gov.sa", "_blank"),
  },
  {
    img: Ssa,
    imgOrigin: Ssa_O,
    route: () => window.open("https://www.aee.gob.es/", "_blank"),
  },
];

export const collabratorsSlider = [
  {
    img: Booz,
    route: () =>
      window.open(
        "https://www.boozallen.com/",
        "_blank"
      ),
  },

  {
    img: Mindgrub,
    route: () =>
      window.open("https://mindgrub.com/", "_blank"),
  },
  {
    img: SecondMuse,
    route: () => window.open("https://www.secondmuse.com/", "_blank"),
  },

  // {
  //   img: Tableau,
  //   route: () => window.open("https://www.tableau.com/", "_blank"),
  // },
  // {
  //   img: GoDaddy,
  //   route: () => window.open("https://www.godaddy.com/en-in", "_blank"),
  // },
  // {
  //   img: Planet,
  //   route: () => window.open("https://www.planet.com/", "_blank"),
  // },
  // {
  //   img: Azure,
  //   route: () => window.open("https://azure.microsoft.com/en-in/", "_blank"),
  // },
  // {
  //   img: Miro,
  //   route: () => window.open("https://miro.com/", "_blank"),
  // },
  // {
  //   img: Ibm,
  //   route: () => window.open("https://www.ibm.com/in-en", "_blank"),
  // },
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
    on the seaweed kelp.”`,
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

export const events = (Router: any) => [
  {
    date: currentDate,
    title: "2024 Challenges are out",
    subtitle: "Explore and choose the one that fits you the best!",
    content: `Register for a Local Event near you or 
    our Universal Event (please note you MUST be 
    registered for a Local Event or Universal Event to participate).`,
    route: () =>
      window.open(
        "https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/",
        "_blank"
      ),
  },
  {
    date: "4th October 2024:",
    title: "Day 1",
    subtitle: "Assemble at TU Shannon & Start problem-solving with your team",
    content: `Get ready for the NASA Space Apps Challenge!
     Check your Space Apps Messages, review the Participant`,
    route: () => Router.push("/timeline#day-1"),
  },
  {
    date: "5th October 2024:",
    title: "Day 2",
    subtitle:
      "Connect with industry experts: Get tips and feedback for your project",
    content: `At 9:00 a.m. (local time) teams may begin 
    working on their hackathon projects. Project submission
    opens at 9:00 a.m.`,
    route: () => Router.push("/timeline#day-2"),
  },
  {
    date: "6th October 2024:",
    title: "Day 3",
    subtitle:
      "Get ready to present your project & Get a chance to win the challenge",
    content: ` The hackathon ends at 11:59 p.m. (local time). 
 All projects must be submitted to the NASA Space
 Apps Challenge website by this deadline.`,
    route: () => Router.push("/timeline#day-3"),
  },
];

export const shannonData = [
  {
    img: HackathloneChallenge,
  },
  {
    img: Machine,
  },
  {
    img: GloablCollabSection,
  },
  {
    img: AppleEye,
  },
  {
    img: Office,
  },
  {
    img: Robotics,
  },
];
