import { ITC_Font } from "@/app/local-fonts/local";
import React from "react";
import Card from "./Card";
import HeadTitle from "./HeadTitle";
import IntroBox from "./IntroBox";
import Container from "./Container";

const FrameAnArt = () => {
  return (
    <Container className="bg-white">
      <IntroBox
        className="text-black"
        title="Frame an Art"
        description=" Collection of art curated by Amo-Mensah Amofa. Artwork designed as
            more than a display but meant to ignite conversations"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card imgUrl="one" text="one" />
        <Card imgUrl="two" text="two" />
        <Card imgUrl="thr" text="thr" flag={true} />
        <Card imgUrl="four" text="four" flag={true}/>
        <Card imgUrl="five" text="five" />
        <Card imgUrl="six" text="six" />
      </div>
    </Container>
  );
};

export default FrameAnArt;
