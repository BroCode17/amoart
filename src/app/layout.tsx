import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReduxProvider } from "@/components/Provider";
import { ToastProvider } from "./shop/_components/toast";
import CartModal from "@/components/CartList";
import { CartProvider } from "@/components/context/CartContext";


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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <ReduxProvider>
          <ToastProvider>
            <Header />
            <CartModal />
            {children}
            <Footer />
          </ToastProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
