import { ITC_Font } from "@/app/local-fonts/local";
import React from "react";
import ImageContainer from "./ImageContainer";
import ImageContainerTwo from "./ImageContanierTwo";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Button } from "./ui/button";

const CarosalTwo = () => {
  return (
    <div className="w-[900px] text-white flex flex-col gap-5 justify-center max-md:px-4">
      <div className="">
        <h1 className={`${ITC_Font.className} text-xl`}>Gallery Carousel</h1>
        <div className="w-3/5">
          <p className="text-sm pt-2">
            Collection of art curated by Amo-Mensah Amofa. Artwork designed as
            more than a display but meant to ignite conversations{" "}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-1 items-center justify-between gap-3">
          <Button className="bg-transparent border w-10 rounded-full fon</divt-bold  hover:bg-white hover:text-black">
            <FaChevronLeft />
          </Button>
          <div className=" ">
            <ImageContainerTwo imgUrl="lad" text="lady" />
          </div>
          <div className="h-[300px] max-md:h-[320px] lg:h-[400px]">
          <ImageContainerTwo imgUrl="emb" text="lady" />
          </div>
          <div className="">
            <ImageContainerTwo imgUrl="chal" text="lady" />
          </div>
          <Button className="bg-transparent border w-10 rounded-full font-bold  hover:bg-white hover:text-black">
            <FaChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarosalTwo;
