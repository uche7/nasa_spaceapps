import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeroImage from "@/assets/images/general/landing-page/hero_icon.png";
import XIcon from "@/assets/images/general/landing-page/x_logo.svg"
import InstaIcon from "@/assets/images/general/landing-page/instagram.png"
import InIcon from "@/assets/images/general/landing-page/linkedin.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const navigateToWinners = () => {
    router.push('/winners');
  };


  const desktopView = () => {
    return (
      <div className="h-full py-2 flex flex-col justify-evenly w-full gap-4 text-[#F6F4F4] MobileScreen:hidden TabletScreen:hidden">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly text-[14px] gap-1 px-[5%] py-[1%] ">
          <div className="flex flex-col gap-8 lg:gap-12 items-center justify-evenly">
            <div className="">
              <a className="cursor-pointer" href="/">
                <Image width={400} src={HeroImage} alt="Hero Image" />
              </a>
              {/* <p className="w-[80%] sm:w-[62%] lg:w-[220px] text-justify leading-snug font-overpass font-normal mt-1 mb-6">
                Space Apps is funded by NASA&apos;s{" "}
                <span className="font-semibold">
                  <a
                    className="text-[#2E96F5] no-underline"
                    href="https://science.nasa.gov/earth-science"
                  >
                    Earth Science Division
                  </a>
                </span>{" "}
                through a contract with{" "}
                <a
                  className="font-semibold text-[#2E96F5] no-underline"
                  href="https://www.boozallen.com/"
                >
                  Booz Allen Hamilton
                </a>
                ,{" "}
                <a
                  className="font-semibold text-[#2E96F5] no-underline"
                  href="https://www.mindgrub.com/"
                >
                  Mindgrub
                </a>
                , and{" "}
                <a
                  className="font-semibold text-[#2E96F5] no-underline"
                  href="https://www.secondmuse.com/"
                >
                  SecondMuse
                </a>
                .
              </p> */}
            </div>

            <div className="flex gap-3 relative right-1 flex-row items-center justify-between mb-6 ">
              <a href="https://twitter.com/hack_athlone?ref_src=twsrc%5Etfw"
                target="_blank">
                <Image
                  className="hover:scale-110 w-6 h-6 ms-2 MobileScreen:w-4"
                  src={XIcon}
                  height={80}
                  width={80}
                  alt={"XIcon"}
                ></Image>
              </a>
              <a href="https://www.instagram.com/spaceappsathlone/"
                target="_blank">
                <Image
                  className="hover:scale-110 w-6 h-6 ms-2 MobileScreen:w-4 MobileScreen:h-4"
                  src={InstaIcon}
                  height={80}
                  width={80}
                  alt={"InstaIcon"}
                ></Image>
              </a>
              <a href="https://www.linkedin.com/company/spaceapps-hackathlone/"
                target="_blank">
                <Image
                  className="hover:scale-110 w-6 h-6 ms-2 MobileScreen:w-4 MobileScreen:h-4"
                  src={InIcon}
                  height={80}
                  width={80}
                  alt={"InIcon"}
                ></Image>
              </a>
              <a href="mailto:spaceappsathlone@gmail.com"
                className="ml-[4px] hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 67 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60.3 0.398438H6.7C3.015 0.398438 0.0335 3.41344 0.0335 7.09844L0 47.2984C0 50.9834 3.015 53.9984 6.7 53.9984H60.3C63.985 53.9984 67 50.9834 67 47.2984V7.09844C67 3.41344 63.985 0.398438 60.3 0.398438ZM60.3 13.7984L33.5 30.5484L6.7 13.7984V7.09844L33.5 23.8484L60.3 7.09844V13.7984Z" fill="white" />
                </svg>

              </a>
            </div>
            <hr className="lg:hidden mt-10" />
          </div>

          <div className="lg:flex lg:flex-row lg:items-start w-full  lg:justify-evenly grid grid-cols-2">
            <div className="mt-4 lg:mt-4">
              <h3 className="font-overpass font-bold text-xl tracking-snug mb-1 lg:mb-4 text-hackathone-font-rocket-red">
                Participation Kit
              </h3>
              <ul className="font-firaSans list-none leading-relaxed">
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/"
                    rel="noreferrer"
                  >
                    Challenges
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=y3LxNcd1jsk"
                    download
                    rel="noreferrer"
                  >
                    How to Register
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=37dqOg2ljMw"
                    download
                    rel="noreferrer"
                  >
                    Choose a Challenge
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=37dqOg2ljMw"
                    download
                    rel="noreferrer"
                  >
                    How to Form Teams
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=lQpLzNgRl8k"
                    download
                    rel="noreferrer"
                  >
                    Encourage Team Diversity
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=_wJP0GLNdf8"
                    download
                    rel="noreferrer"
                  >
                    Tips & Tricks
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-4 lg:mt-4 text-right lg:text-left">
              <h3 className="font-overpass font-bold text-xl tracking-snug mb-1 lg:mb-4 text-hackathone-font-rocket-red">
                HackAthlone'23
              </h3>
              <ul className="font-firaSans list-none  leading-relaxed">
                <li className="my-2">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    // href="https://www.youtube.com/watch?v=zFdhwgOyqho"
                    rel="noreferrer"
                  >
                    Glimpse
                  </a>
                </li>
                <li className="my-2">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    // href="https://www.youtube.com/watch?v=n_KqGdnlOcU"
                    rel="noreferrer"
                  >
                    Opening Ceremony
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=W3y2qN2spO4"
                    rel="noreferrer"
                  >
                    Closing Ceremony
                  </a>
                </li>
                <li className="my-2 underline">
                  <span
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red cursor-pointer"
                    onClick={navigateToWinners}
                  >
                    Winners
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 lg:mt-4">
              <h3 className="font-overpass font-bold text-xl tracking-snug mb-1 lg:mb-4 text-hackathone-font-rocket-red">
                Space Apps UL'21
              </h3>
              <ul className="font-firaSans list-none leading-relaxed">
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=n_KqGdnlOcU"
                  >
                    Opening Ceremony
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=zFdhwgOyqho"
                  >
                    Mentor Sessions
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=EjbDhhmpgEk"
                  >
                    Practice Presentations
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=CFN7ewwBYT0"
                  >
                    Closing Ceremony
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full">
          <hr className="w-[92%] mx-auto" />
          <div className="flex flex-col sm:flex-row sm:flex items-center justify-between px-[5%]">
            <p className="font-firaSans text-center py-3">
              Copyright ©2024 HackAthlone | <a
                className="underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                target="_blank"
                href="https://www.nasa.gov/about/highlights/HP_Privacy.html"
                rel="noreferrer"
              >Privacy Policy</a> |  <a
                className="underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                target="_blank"
                href="https://www.spaceappschallenge.org/legal/"
                rel="noreferrer"
              >Legal</a> | <a
                className="underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                target="_blank"
                href="mailto:spaceappsathlone@gmail.com"
                rel="noreferrer"
              >Contact</a> | <a
                className="underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                target="_blank"
                href="https://www.spaceappschallenge.org/resources/"
                rel="noreferrer"
              >Resources</a>
            </p>
            {/* <p className="font-overpass text-center py-3">
              Developed by{" "}
              <span>
                <a
                  className="font-firaSans tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                  href="https://www.linkedin.com/in/nnajiofor-uchenna-746a1b256/"
                >
                  Nnajiofor Uchenna
                </a>
              </span>
            </p> */}
          </div>
        </div>
      </div>
    );
  }

  const tabletView = () => {
    return (
      <div className="h-full py-2 flex flex-col justify-evenly w-full gap-4 text-[#F6F4F4] MobileScreen:hidden DesktopScreen:hidden">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly text-[14px] gap-1 px-[5%] py-[1%]">
          <div className="flex flex-col gap-8 items-center">
            <div className="">
              <a className="cursor-pointer" href="/">
                <Image width={300} src={HeroImage} alt="Hero Image" />
              </a>
            </div>
            <div className="flex gap-3 relative right-1 flex-row items-center justify-between">
              <a href="https://twitter.com/hack_athlone?ref_src=twsrc%5Etfw"
                target="_blank">
                <Image
                  className="hover:scale-110 w-6 h-6 ms-2 MobileScreen:w-4"
                  src={XIcon}
                  height={80}
                  width={80}
                  alt={"XIcon"}
                ></Image>
              </a>
              <a href="https://www.instagram.com/spaceappsathlone/"
                target="_blank">
                <Image
                  className="hover:scale-110 w-6 h-6 ms-2 MobileScreen:w-4 MobileScreen:h-4"
                  src={InstaIcon}
                  height={80}
                  width={80}
                  alt={"InstaIcon"}
                ></Image>
              </a>
              <a href="https://www.linkedin.com/company/spaceapps-hackathlone/"
                target="_blank">
                <Image
                  className="hover:scale-110 w-6 h-6 ms-2 MobileScreen:w-4 MobileScreen:h-4"
                  src={InIcon}
                  height={80}
                  width={80}
                  alt={"InIcon"}
                ></Image>
              </a>
              <a href="mailto:spaceappsathlone@gmail.com"
                className="ml-[4px] hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 67 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60.3 0.398438H6.7C3.015 0.398438 0.0335 3.41344 0.0335 7.09844L0 47.2984C0 50.9834 3.015 53.9984 6.7 53.9984H60.3C63.985 53.9984 67 50.9834 67 47.2984V7.09844C67 3.41344 63.985 0.398438 60.3 0.398438ZM60.3 13.7984L33.5 30.5484L6.7 13.7984V7.09844L33.5 23.8484L60.3 7.09844V13.7984Z" fill="white" />
                </svg>

              </a>
            </div>
            <hr className="lg:hidden mt-10" />
          </div>

          <div className="lg:flex lg:flex-row lg:items-start w-full  lg:justify-evenly grid grid-cols-2">
            <div className="mt-4 lg:mt-4">
              <h3 className="font-overpass font-bold text-xl tracking-snug mb-1 lg:mb-4 text-hackathone-font-rocket-red">
                Participation Kit
              </h3>
              <ul className="font-firaSans list-none leading-relaxed">
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/"
                    rel="noreferrer"
                  >
                    Challenges
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=y3LxNcd1jsk"
                    download
                    rel="noreferrer"
                  >
                    How to Register
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=37dqOg2ljMw"
                    download
                    rel="noreferrer"
                  >
                    Choose a Challenge
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=37dqOg2ljMw"
                    download
                    rel="noreferrer"
                  >
                    How to Form Teams
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=lQpLzNgRl8k"
                    download
                    rel="noreferrer"
                  >
                    Encourage Team Diversity
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=_wJP0GLNdf8"
                    download
                    rel="noreferrer"
                  >
                    Tips & Tricks
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-4 lg:mt-4 text-right lg:text-left">
              <h3 className="font-overpass font-bold text-xl tracking-snug mb-1 lg:mb-4 text-hackathone-font-rocket-red">
                HackAthlone'23
              </h3>
              <ul className="font-firaSans list-none  leading-relaxed">
                <li className="my-2">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    // href="https://www.youtube.com/watch?v=zFdhwgOyqho"
                    rel="noreferrer"
                  >
                    Glimpse
                  </a>
                </li>
                <li className="my-2">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    // href="https://www.youtube.com/watch?v=n_KqGdnlOcU"
                    rel="noreferrer"
                  >
                    Opening Ceremony
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=W3y2qN2spO4"
                    rel="noreferrer"
                  >
                    Closing Ceremony
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    onClick={navigateToWinners}
                    target="_blank"
                    // href="https://www.youtube.com/watch?v=EjbDhhmpgEk"
                    rel="noreferrer"
                  >
                    Winners
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 lg:mt-4">
              <h3 className="font-overpass font-bold text-xl tracking-snug mb-1 lg:mb-4 text-hackathone-font-rocket-red">
                Space Apps UL'21
              </h3>
              <ul className="font-firaSans list-none leading-relaxed">
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=n_KqGdnlOcU"
                  >
                    Opening Ceremony
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=zFdhwgOyqho"
                  >
                    Mentor Sessions
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=EjbDhhmpgEk"
                  >
                    Practice Presentations
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=CFN7ewwBYT0"
                  >
                    Closing Ceremony
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full">
          <hr className="w-[92%] mx-auto" />
          <div className="flex flex-col sm:flex-row sm:flex items-center justify-between px-[5%]">
            <p className="font-firaSans text-center py-3">
              Copyright ©2024 HackAthlone | <a
                className="underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                target="_blank"
                href="https://www.nasa.gov/about/highlights/HP_Privacy.html"
                rel="noreferrer"
              >Privacy Policy</a> |  <a
                className="underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                target="_blank"
                href="https://www.spaceappschallenge.org/legal/"
                rel="noreferrer"
              >Legal</a> | <a
                className="underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                target="_blank"
                href="mailto:spaceappsathlone@gmail.com"
                rel="noreferrer"
              >Contact</a> | <a
                className="underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                target="_blank"
                href="https://www.spaceappschallenge.org/resources/"
                rel="noreferrer"
              >Resources</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  const mobileView = () => {
    return (
      <div className="h-full py-2 flex flex-col justify-evenly w-full gap-4 text-[#F6F4F4] TabletScreen:hidden DesktopScreen:hidden">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly text-[14px] gap-1 px-[5%] py-[1%]">
          <div className="flex flex-col gap-8 items-center justify-evenly">
            <div className="">
              <a className="cursor-pointer" href="/">
                <Image width={180} src={HeroImage} alt="Hero Image" />
              </a>
            </div>
            <div className="flex gap-3 relative right-1 flex-row items-center justify-between">
              <a href="https://twitter.com/hack_athlone?ref_src=twsrc%5Etfw"
                target="_blank">
                <Image
                  className="hover:scale-110 w-6 h-6 ms-2 MobileScreen:w-4"
                  src={XIcon}
                  height={80}
                  width={80}
                  alt={"XIcon"}
                ></Image>
              </a>
              <a href="https://www.instagram.com/spaceappsathlone/"
                target="_blank">
                <Image
                  className="hover:scale-110 w-6 h-6 ms-2 MobileScreen:w-4 MobileScreen:h-4"
                  src={InstaIcon}
                  height={80}
                  width={80}
                  alt={"InstaIcon"}
                ></Image>
              </a>
              <a href="https://www.linkedin.com/company/spaceapps-hackathlone/"
                target="_blank">
                <Image
                  className="hover:scale-110 w-6 h-6 ms-2 MobileScreen:w-4 MobileScreen:h-4"
                  src={InIcon}
                  height={80}
                  width={80}
                  alt={"InIcon"}
                ></Image>
              </a>
              <a href="mailto:spaceappsathlone@gmail.com"
                className="ml-[4px] hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 67 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60.3 0.398438H6.7C3.015 0.398438 0.0335 3.41344 0.0335 7.09844L0 47.2984C0 50.9834 3.015 53.9984 6.7 53.9984H60.3C63.985 53.9984 67 50.9834 67 47.2984V7.09844C67 3.41344 63.985 0.398438 60.3 0.398438ZM60.3 13.7984L33.5 30.5484L6.7 13.7984V7.09844L33.5 23.8484L60.3 7.09844V13.7984Z" fill="white" />
                </svg>

              </a>
            </div>
            <hr className="lg:hidden mt-10" />
          </div>

          <div className="lg:flex lg:flex-row lg:items-start w-full  lg:justify-evenly grid grid-cols-2">
            <div className="mt-4">
              <h3 className="font-overpass font-bold text-xl tracking-snug mb-1 lg:mb-4 text-hackathone-font-rocket-red">
                Participation Kit
              </h3>
              <ul className="font-firaSans list-none leading-relaxed">
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/"
                    rel="noreferrer"
                  >
                    Challenges
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=y3LxNcd1jsk"
                    download
                    rel="noreferrer"
                  >
                    How to Register
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=37dqOg2ljMw"
                    download
                    rel="noreferrer"
                  >
                    Choose a Challenge
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=37dqOg2ljMw"
                    download
                    rel="noreferrer"
                  >
                    How to Form Teams
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=lQpLzNgRl8k"
                    download
                    rel="noreferrer"
                  >
                    Encourage Team Diversity
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=_wJP0GLNdf8"
                    download
                    rel="noreferrer"
                  >
                    Tips & Tricks
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-4 lg:mt-4 text-right lg:text-left">
              <h3 className="font-overpass font-bold text-xl tracking-snug mb-1 lg:mb-4 text-hackathone-font-rocket-red">
                HackAthlone'23
              </h3>
              <ul className="font-firaSans list-none  leading-relaxed">
                <li className="my-2">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    // href="https://www.youtube.com/watch?v=zFdhwgOyqho"
                    rel="noreferrer"
                  >
                    Glimpse
                  </a>
                </li>
                <li className="my-2">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    // href="https://www.youtube.com/watch?v=n_KqGdnlOcU"
                    rel="noreferrer"
                  >
                    Opening Ceremony
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=W3y2qN2spO4"
                    rel="noreferrer"
                  >
                    Closing Ceremony
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    onClick={navigateToWinners}
                    rel="noreferrer"
                  >
                    Winners
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 lg:mt-4">
              <h3 className="font-overpass font-bold text-xl tracking-snug mb-1 lg:mb-4 text-hackathone-font-rocket-red">
                Space Apps UL'21
              </h3>
              <ul className="font-firaSans list-none leading-relaxed">
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=n_KqGdnlOcU"
                  >
                    Opening Ceremony
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=zFdhwgOyqho"
                  >
                    Mentor Sessions
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=EjbDhhmpgEk"
                  >
                    Practice Presentations
                  </a>
                </li>
                <li className="my-2 underline">
                  <a
                    className="tracking-wide no-underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=CFN7ewwBYT0"
                  >
                    Closing Ceremony
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full">
          <hr className="w-[92%] mx-auto" />
          <div className="flex flex-col sm:flex-row sm:flex items-center justify-between px-[5%]">
            <p className="font-firaSans text-center py-3">
              Copyright ©2024 HackAthlone | <a
                className="underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                target="_blank"
                href="https://www.nasa.gov/about/highlights/HP_Privacy.html"
                rel="noreferrer"
              >Privacy Policy</a> |  <a
                className="underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                target="_blank"
                href="https://www.spaceappschallenge.org/legal/"
                rel="noreferrer"
              >Legal</a> | <a
                className="underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                target="_blank"
                href="mailto:spaceappsathlone@gmail.com"
                rel="noreferrer"
              >Contact</a> | <a
                className="underline text-[#f6f4f4] hover:text-hackathone-font-rocket-red"
                target="_blank"
                href="https://www.spaceappschallenge.org/resources/"
                rel="noreferrer"
              >Resources</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section>
      {desktopView()}
      {tabletView()}
      {mobileView()}
    </section>
  );
};

export default Footer;
