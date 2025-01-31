import GenericBanner from "@/components/banner/GenericBanner";
import Container from "@/components/Container";
import React from "react";
import {
  Ink_Free,
  Source_Sans_Pro_400,
  Source_Sans_Pro_Bold,
  Source_Sans_Pro_SemiBold,
} from "../local-fonts/local";
import { leftPointsData, pointsData } from "../../../utils/data";
import Points from "@/components/Points";
import Image from "next/image";
import HeadTitle from "@/components/HeadTitle";
import UserForm from "@/components/UserForm";
import { cn } from "@/lib/utils";

const BrandCard = ({
  imgUrl,
  alt,
  desc,
}: {
  imgUrl: string;
  alt: string;
  desc: string;
}) => {
  return (
    <div
      className={cn(
        `h-[490px] md:h-[570px] max-md:w-full bg-green-500 ${Source_Sans_Pro_400.className}
        `
      )}
    >
      <div className="h-2/3 flex items-center border-2 px-4 hover:border-black hover:transition hover:ease-linear duration-75">
        <Image src={imgUrl} alt={alt} width={374} height={280} className="object-contain"/>
      </div>
      <h3 className={`mt-2`}>{alt}</h3>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

const page = () => {
  return (
    <div className="min-h-screen">
      <GenericBanner
        bannerImgUrl="/images/shop.png"
        bannerTitle="Consultation"
      />
      <div className="w-ful flex justify-center items-center px-1 md:px-3 xl:px-0">
        <Container className="bg-white mt-20  ">
          <div className="">
            <div className="flex gap-8 flex-col md:flex-row md:items-center">
              <div className="w-full md:flex-1 pt-5 flex flex-col gap-5 upper">
                <h2 className={`${Source_Sans_Pro_SemiBold.className}`}>
                  TRADITIONAL GHANA WEAR DESIGN SKETCHES
                </h2>

                <p className={`${Source_Sans_Pro_400.className} `}>
                  Embrace the rich cultural heritage with custom design sketches
                  tailored to traditional attire. Whether it's for special
                  occasions, cultural events or personal collections, Amo.Arte
                  works with client to ensure exact specifications are met. Each
                  design is crafted with attention to detail and authenticity.
                  combines traditional
                </p>

                <h2 className={`${Source_Sans_Pro_SemiBold.className}`}>
                  DESIGN PRINCIPLES AND VISUAL COMMUNICATIONS
                </h2>

                <p className={`${Source_Sans_Pro_400.className} `}>
                  Elevate brand identity with strategic design principles and
                  visual communications. Whether its launching a new brand or
                  revitalizing your image. Amo.Arte helps create cohesive
                  branding materials, impactful logos, and visual assets that
                  resonate with your target audience
                </p>

                <div className="flex flex-col gap-2">
                  <h2 className={`${Source_Sans_Pro_SemiBold.className}`}>
                    HOW IT WORKS:
                  </h2>
                  <p className={`${Source_Sans_Pro_400.className} `}>
                    Comprehensive consultation to delve into vision, objects and
                    specific requirements:
                  </p>
                  <ul>
                    <li className="flex flex-col">
                      <Points desc="For traditional wear designs; motifs, colors, and cultural significance." />
                      <Points desc="For branding and visual communications; explore your brand values, target audience, and desired branding identity" />
                    </li>
                  </ul>

                  <p className={`${Source_Sans_Pro_400.className} `}>
                    Based on consultation, we develop initial sketches or
                    concepts that reflect your vision:
                  </p>
                  <ul>
                    <li className="flex flex-col">
                      <Points desc="For traditional wear designs; exploring traditional patterns and incorporating your unique preferences" />
                      <Points desc="For branding and visual communications; focus on creating visuals that communicate your brand story effectively" />
                    </li>
                  </ul>
                  <p className={`${Source_Sans_Pro_400.className} `}>
                    Because we value your input throughout the creative process,
                    we ensure that designs align perfectly with your
                    expectations. Feedback is integral to refining and
                    finalizing the designs, ensuring that every detail meets
                    your exact requests and contributes to the overall success
                    of your project.
                  </p>
                </div>
              </div>
              <div className="flex justify-center w-full md:w-1/2 md:flex-row md:gap-10">
                <div className="w-full">
                  <Image
                    src="/images/brand.png"
                    alt="Fall"
                    width={400}
                    height={400}
                    // style={{
                    //   width: "100%",
                    //   height: "auto",
                    //   objectFit: "initial",
                    // }}
                    className="  w-full md:h-auto"
                  />
                  <h1
                    className={`${Source_Sans_Pro_Bold.className} self-start mt-5`}
                  >
                    This project was in collaboration with Alyssa Monet and
                    final logo was created by Alyssa Monet.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 mt-14">
            <div className="w-24 h-[.5px] bg-black"></div>
            <div>
              <HeadTitle
                title="Let's get Started!"
                className="text-md p-0 m-0"
              />
            </div>
            <div className="w-24 h-[.5px] bg-black"></div>
          </div>

          {/* FROM */}
          <div className="mt-10">
            <UserForm />
          </div>

          {/* Explore Brand */}
          <div className="mt-10">
            <HeadTitle title="Explore Our Consulation Projects"  className="text-xl p-0 m-0 flex justify-start"/>
            <div  className="mt-10 flex max-md:overflow-x-scroll md:grid md:grid-cols-3 gap-4">
              <BrandCard
                imgUrl="/images/PGLA.png"
                alt="One"
                desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
              />
              <BrandCard
                imgUrl="/images/FilmBrand.png"
                alt="Archive Film Brand Logo Digital"
                desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
              />
              <BrandCard
                imgUrl="/images/MaryTrad.png"
                alt="Mary Traditional Options Draft"
                desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default page;
