"use client";
import { ITC_Font } from "@/app/local-fonts/local";
import React, { useLayoutEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { linkData } from "../../utils/data";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Cart from "./Cart";

gsap.registerPlugin(useGSAP);
const Header = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const init = () => {
        const t1 = gsap.timeline();
        t1.from("ul", {
          xPercent: "-100",
          duration: 1,
          delay: 0.1,
          visibility: 0,
        });
        t1.to("ul", {
          autoAlpha: 1,
        });
      };
      init();
    },
    { scope: container }
  );

  return (
    <header
      className="h-[81px] bg-black flex items-center justify-center "
      ref={container}
      id="head-main"
    >
      <div className=" text-white flex justify-between w-5/6 2xl:w-4/6 items-center leading-5">
        <Logo />
        <div className={`max-sm:hidden  ${ITC_Font.className}`}>
          <ul className={`flex gap-3 font-normal text-sm invisible items-center`}>
            {linkData.map((item, index) => (
              <Link key={index} href={item.url}>
                {item.name}
              </Link>
            ))}
            <Cart />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
