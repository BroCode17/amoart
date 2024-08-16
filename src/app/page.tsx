"use client";
import MyArtPieces from "@/components/MyArt";
import Carosal from "@/components/Carosal";
import CarosalTwo from "@/components/CarosalTwo";
import Testimonials from "@/components/Testimonials";
import FrameAnArt from "@/components/FrameAnArt";
import LetConnect from "@/components/LetConnect";
import G from "@/components/animations/G";
import CustomSwiper from "@/components/animations/swipper/Slide";
import { useEffect } from "react";
import { updateInitState } from "@/_redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { MobileNav } from "@/components/Header";
import { setShowMobileNav } from "@/_redux/slices/headerSlice";

export default function Home() {
  return (
    <main className="w-full overflow-hidden relative">
      <section className="w-full relative">
        {/* <Carosal /> */}
        <CustomSwiper />
      </section>
      <section className="" id="#">
        <MyArtPieces />
      </section>
      <section className="mt-10  border h-[500px] lg:h-[550px]  w-full relative">
        <div className=" flex justify-center  relative bg-car-image h-full  bg-black  bg-blend-overlay bg-opacity-50 max-xl:px-2">
          <CarosalTwo />
        </div>

        <G />
      </section>
      <section className="flex justify-center mt-10">
        <FrameAnArt />
      </section>
      <section className="bg-black flex justify-center md:px-4 lg:px-0">
        <Testimonials />
      </section>

      <section className="max-md:px-1">
        <LetConnect />
      </section>
    </main>
  );
}
