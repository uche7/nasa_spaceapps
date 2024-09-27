import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { SFProDisplay, CabinetGrotesk } from "@/utils/custom-fonts";

export const metadata: Metadata = {
  title: "NASA SpaceApps 2024",
  description: "HackAthlone - Nasa Space Apps Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>HackAthlone 2024</title>
        <meta name="title" content="HackAthlone 2024" />
        <meta
          name="description"
          content="✨ Come join us in the world's largest hackathon! 🚀 Register now before Oct 4!"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hackathlone.com/" />
        <meta property="og:title" content="HackAthlone 2024" />
        <meta
          property="og:description"
          content="✨ Come join us in the world's largest hackathon! 🚀 Register now before Oct 4!"
        />
        <meta property="og:image" content="/favicon.ico" />

        {/* Twitter */}
        <meta property="twitter:card" content="/favicon.ico" />
        <meta property="twitter:url" content="https://www.hackathlone.com/" />
        <meta property="twitter:title" content="HackAthlone 2024" />
        <meta
          property="twitter:description"
          content="✨ Come join us in the world's largest hackathon! 🚀 Register now before Oct 4!"
        />
        <meta property="twitter:image" content="/favicon.ico" />
      </Head>
      <body className={`${SFProDisplay.variable} ${CabinetGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
