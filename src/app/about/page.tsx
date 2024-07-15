import AboutMe from "@/components/AboutMe";
import HeadTitle from "@/components/HeadTitle";
import React from "react";

const page = () => {
  return (
    <div className="min-h-lvh ml flex flex-col">
      <div className="bg-soft h-96 flex items-center justify-center w-full border border-red-600 relative">
        <div className="w-[920px]">
          <div className="bg-white h-5/6 w-[280px] -ml-10">
            {/* Image */}
            hello
          </div>
          <div className="z-10 bg-[#3678F6] absolute top-1/2 right-1/2 transform translate-x-1/3 -translate-y-1/2">
            <HeadTitle title="Amo-Mensah Amofa" />
          </div>
        </div>
      </div>

      <AboutMe />
    </div>
  );
};

export default page;
