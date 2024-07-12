import { ITC_Font } from "@/app/local-fonts/local";
import React from "react";
import Card from "./Card";

const FrameAnArt = () => {
  return (
    <div className="w-[900px] flex max-md:px-4 flex-col gap-5">
      <div className="">
        <h1 className={`${ITC_Font.className}`}>Frame an Art</h1>
        <div className="w-3/5">
          <p className="text-sm pt-2">
            Collection of art curated by Amo-Mensah Amofa. Artwork designed as
            more than a display but meant to ignite conversations{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Card imgUrl="one" text="one" />
        <Card imgUrl="two" text="two" />
        <Card imgUrl="thr.png" text="thr" />
        <Card imgUrl="four.png" text="four" />
        <Card imgUrl="five" text="five" />
        <Card imgUrl="six" text="six" />
      </div>
    </div>
  );
};

export default FrameAnArt;
