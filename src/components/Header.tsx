import { ITC_Font } from "@/app/local-fonts/local";
import React from "react";
import Logo from "./Logo";
import { linkData } from "../../utils/data";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[81px] bg-black flex items-center justify-center ">
      <div className=" text-white flex justify-between w-5/6 2xl:w-4/6 items-center leading-5">
        <Logo />
        <div>
          <ul
            className={`flex gap-3 ${ITC_Font.className} font-normal text-sm`}
          >
            {
              linkData.map((item, index) => (
                <Link href={item.url}>{item.name}</Link>
              ))
            }
           
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
