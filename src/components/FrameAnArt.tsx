import { ITC_Font } from "@/app/local-fonts/local";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import HeadTitle from "./HeadTitle";
import IntroBox from "./IntroBox";
import Container from "./Container";
import { useGetAllProductQuery } from "@/_redux/services/productApi";
import { formatCurrency } from "./utils/formatters";

const FrameAnArt = () => {
  const [product, setProduct] = useState([]);
  const { data, isSuccess, isLoading, isError } = useGetAllProductQuery("");

  useEffect(() => {
    if (isSuccess) {
      setProduct(data.data);
    }
  }, [data, isSuccess]);
  return (
    <Container className="bg-white">
      <IntroBox
        className="text-black"
        title="Frame an Art"
        description=" Collection of art curated by Amo-Mensah Amofa. Artwork designed as
            more than a display but meant to ignite conversations"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error</div>}

        {isSuccess &&
          product.slice(0,6).map((item, index) => {
            const amout = formatCurrency(item.price / 100);
            return (
              <Card
                key={index}
                image={item.image}
                description={item.description}
                price={amout}
                flag={false}
              />
            );
          })}
      </div>
    </Container>
  );
};

export default FrameAnArt;
