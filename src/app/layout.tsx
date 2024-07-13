import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SFProDisplay, CabinetGrotesk } from "@/utils/custom-fonts";

export const metadata: Metadata = {
  title: "Nasa SpaceApp",
  description: "Nasa SpaceApp",
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
