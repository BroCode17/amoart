import { ITC_Font } from "@/app/local-fonts/local";
import React from "react";

const Testimonials = () => {
  return (
    <div className="text-white bg-black max-md:px-4 flex flex-col gap-5 justify-center">
      <div className="">
        <h1 className={`${ITC_Font.className}`}>Testimonials</h1>
        <div className="w-3/5">
          <p className="text-sm pt-2">
            Collection of art curated by Amo-Mensah Amofa. Artwork designed as
            more than a display but meant to ignite conversations{" "}
          </p>
        </div>
      </div>
      <div className="h-96">
      <div className="bg-[#BCBCBC] h-full w-full">
            Tell me something
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
