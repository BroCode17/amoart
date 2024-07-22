
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Amofa",
  description: "Making art essay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 


  return (
    <html lang="en" className="">
      <body className={`${inter.className}`}>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
