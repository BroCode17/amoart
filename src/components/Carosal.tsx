"use client";
import React, { useState } from "react";
import Image from "next/image";
import carosal from "../../public/images/carosal.jpeg";
import { Button } from "./ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { imagesArray } from "../../utils/data";

const Carosal = () => {
  const [currSlide, setCurrSlide] = useState(0);

  const nextSlide = () => {
    setCurrSlide((prev) => (prev === imagesArray.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrSlide((prev) => (prev === 0 ? imagesArray.length - 1 : prev - 1));
  };

  const switchToIndex = (idx: number) => {
    setCurrSlide(idx)
  }
  return (
    <div className="w-full relative">
      {/* <Image src={carosal} 
         alt='Carosaul'
         style={{
            width: '100%',
            height: '24rem',
            objectFit: 'cover'
         }}
        /> */}

      <div className="flex overflow-hidden relative">
        {imagesArray.map((item, index) => (
          <div
            className="flex-shrink-0 w-full h-96 transition-transform ease-linear duration-500"
            key={index}
            style={{ transform: `translateX(-${currSlide * 100}%)` }}
          >
            <Image
              src={item.url}
              alt="Carosaul"
              style={{
                width: "100%",
                height: "24rem",
                objectFit: "cover",
              }}
              className="w-full bg-blend-multiply"
            />
          </div>
        ))}

        <div className=" z-10 flex w-full bottom-0">
          {/* Indicator */}
          <div className="absolute left-0 right-0 bottom-4">
            <div className="flex items-center justify-center gap-2">
              {imagesArray.map((_, index) => (
                <div key={index} className={`w-3 h-3 rounded-full bg-black border border-white ${currSlide === index && 'p-2 bg-opacity-100'} transition-transform ease-linear duration-700 bg-opacity-50 cursor-pointer`}
                onClick={() => switchToIndex(index)}
                />
              ))
              }
            </div>
          </div>

          <div className="absolute bottom-10 right-10 lg:right-[250px] bg-opacity-20 border-gray-400 bg-black">
            <Button className="bg-transparent border rounded-none font-bold  hover:bg-black">
              Explore my Gallery
            </Button>
          </div>

          <div className="absolute bottom-10 left-10 lg:left-[250px] bg-opacity-20 border-gray-400 bg-black  rounded-full">
            <Button
              className="bg-transparent border w-10 rounded-full font-bold  hover:bg-black hover:text-white"
              onClick={prevSlide}
            >
              <FaChevronLeft />
            </Button>

            <Button
              className="bg-transparent border w-10 rounded-full font-bold  hover:bg-black hover:text-white ml-6"
              onClick={nextSlide}
            >
              <FaChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosal;
