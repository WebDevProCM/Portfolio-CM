import React from "react";
import {Fjalla_One, Bebas_Neue} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "My Portfolio",
  description: "Discover about me",
};

const fjalla = Fjalla_One({
  subsets: ['latin'],
  weight: "400",
  display: 'swap',
  variable: '--font-fjalla_one',
}) 
const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: "400",
  display: 'swap',
  variable: '--font-bebas_neue',
}) 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fjalla.variable} ${bebas.variable}`}>
      <body className="relative">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
