"use client";
import GenericBanner from "@/components/banner/GenericBanner";
import Container from "@/components/Container";
import HeadTitle from "@/components/HeadTitle";
import FilterBox from "@/components/utils/FilterBox";

import React from "react";
import { shopData } from "../../../utils/data";
import Card from "@/components/Card";

const page = () => {
  return (
    <div className="min-h-dvh">
      <GenericBanner bannerImgUrl="/images/shop.png" bannerTitle="Shop" />
      <div className="flex justify-center">
      <Container className="bg-white mt-10">
        <div className="flex justify-between">
          <HeadTitle title="Buy an Art Piece" className="text-xl p-0 m-0" />
          <FilterBox />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {
                shopData.map(item => (
                    <Card imgUrl={item.url} key={item.url} text={item.url} />
                )) 
            }
        </div>
       
      </Container>
      
      </div>
    </div>
  );
};

export default page;
