import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500']
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
      <body className={`${inter.className} border-pink-600 border-2 `}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
