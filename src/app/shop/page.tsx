"use client";
import GenericBanner from "@/components/banner/GenericBanner";
import Container from "@/components/Container";
import HeadTitle from "@/components/HeadTitle";
import FilterBox from "@/components/utils/FilterBox";

import React, { useEffect, useState } from "react";
import { shopData } from "../../../utils/data";
import Card from "@/components/Card";
import { useGetAllProductQuery } from "@/_redux/services/productApi";
import { formatCurrency, formatNumber } from "@/components/utils/formatters";

const page = () => {
  const [product, setProduct] = useState([]);
  const { data, isSuccess, isLoading, isError } = useGetAllProductQuery("");

  useEffect(() => {
    if (isSuccess) {
      setProduct(data.data);
    }
  }, [data, isSuccess]);

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
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error</div>}

            {isSuccess &&
              product.map((item, index) => {
                const amout = formatCurrency(item.price / 100);
                return (
                  <Card
                    key={index}
                    id={item._id}
                    image={item.image}
                    description={item.description}
                    price={amout}
                    title={item.name}
                    flag={false}
                  />
                );
              })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default page;
