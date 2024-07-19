import React from "react";
import ImageContainerTwo from "./ImageContanierTwo";

const Card = ({imgUrl, text, flag}: {imgUrl: string; text:string, flag?: boolean}) => {
  return (
    <div className="relative h-[260px] cursor-pointer drop-shadow-md shadow-md">
     <ImageContainerTwo imgUrl={imgUrl} text={text} flag={flag}/>
      <div className="h-14 absolute w-full bg-white bg-opacity-80 bottom-0 left-0  overflow-hidden">
        <div className="flex px-5 justify-between items-center py-2">
          <div className="m-0 p-0">
            <h1 className="my-0 py-0 font-bold text-sm">US $520.29</h1>
            <p className="text-[0.675rem] ">Lorem ipsum</p>
          </div>
          <div className="bg-black text-white py-2 px-3 rounded-full cursor-pointer ">
            <div className="text-sm">BUY NOW</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
