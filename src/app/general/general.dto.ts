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

export const MapLogos = [
  { src: Tus1 },
  { src: Tus2 },
  { src: Tus3},
  { src: Tus4 },
];
