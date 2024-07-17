import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className={`${SFProDisplay.variable} ${CabinetGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
