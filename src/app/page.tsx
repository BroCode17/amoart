'use client'
import { useState } from "react";
import Image from "next/image";
import MyArtPieces from "@/components/MyArt";
import { ITC_Font, Ink_Free } from "./local-fonts/local";
import Carosal from "@/components/Carosal";
import CarosalTwo from "@/components/CarosalTwo";
import Testimonials from "@/components/Testimonials";
import FrameAnArt from "@/components/FrameAnArt";
import Uploader from "@/components/Uploader";
import { imagesArray } from "../../utils/data";
import C from "@/components/C";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import ExploreMoreBtn from "@/components/ExploreMoreBtn";
import LetConnect from "@/components/LetConnect";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNave";

export default function Home() {
  const [showMobileNave, setShowMobileNave] = useState(false);
  return (
    <main className="w-full overflow-hidden">
      <MobileNav show={showMobileNave} />
      <section className="">
        <Carosal />
      </section>

      <section className="">
        <MyArtPieces />
      </section>
      <section className="mt-10 h-[500px] lg:h-[550px] border  flex justify-center  relative bg-car-image  bg-black  bg-blend-overlay bg-opacity-50">
        <CarosalTwo />
      </section>
      <section className="flex justify-center mt-10">
        <FrameAnArt />
      </section>
      <section className="bg-black flex justify-center">
        <Testimonials />
      </section>

      <section>
        <LetConnect />
      </section>
  
    </main>
  );
}
