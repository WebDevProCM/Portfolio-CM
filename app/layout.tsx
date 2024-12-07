import React from "react";
import {Fjalla_One, Bebas_Neue, Roboto_Serif, Lora} from "next/font/google";
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

const roboto = Roboto_Serif({
  subsets: ["latin"],
  weight: "700",
  display: "auto",
  variable: '--font-roboto_serif'
})

const lora = Lora({
  subsets: ["latin"],
  display: "auto",
  weight: "400",
  variable: "--font-lora"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fjalla.variable} ${bebas.variable} ${roboto.variable} ${lora.variable}`}>
      <body className="relative overflow-x-hidden">
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
