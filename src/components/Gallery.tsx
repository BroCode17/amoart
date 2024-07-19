import React from "react";
import BannerImg from "./BannerImg";
import HeadTitle from "./HeadTitle";
import Container from "./Container";
import GenericBanner from "./banner/GenericBanner";

const Gallery = () => {
  return (
    <div className="">
      <GenericBanner  bannerImgUrl="/images/galley.png" bannerTitle="Gallery"/>
      <div className="flex justify-center mt-20 px-10 md:px-0">
      <Container>
          <HeadTitle title="Explore My Gallery" className="text-xl p-0 m-0" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  grid-rows-4">
            <div className="first:bg-red-500">1</div>
            <div className="[&:nth-child(2n)]:row-span-2">2</div>
            <div className=" [&:nth-child(3n+3)]:bg-green-600 [&:nth-child(n+3)]:col-span-2">3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Gallery;
