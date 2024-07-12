import { cn } from "@/lib/utils";
import ImageContainer from "./ImageContainer";
import Row2Image from "./Row2Imge";
import { ITC_Font } from "@/app/local-fonts/local";



const MyArtPieces = () => {
  return (
    <section className=" flex justify-center mt-10">
      <div className="grid  grid-cols-3 h-[600px] grid-rows-3 gap-3 w-[900px]">
        <Row2Image text="For Your Eyes Only" imgUrl={'brothers'} />
        <div className="col-span-2 pt-5">
          <h1 className={`pl-5 font-bold text-[30px] ${ITC_Font.className}`}>My Art Pieces</h1>
          <div className="pl-2 text-sm mt-3 w-[90%]">
            <p className="text-justify">
              Collection of art curated by Amo-Mensah Amofa. Artwork designed as
              more than a display but meant to ignite conversations that
              resonate within. Pieces formed as an expression to explore the
              depths of human emotion and connection. Behind every canvas is a
              story to tell and hear, where emotions find their voice
            </p>
          </div>
        </div>
        <Row2Image text="Fall of Man" imgUrl="fall" color="black" />
        <Row2Image text="Move with Me" imgUrl="oneman" />
        <div className="bg-pink-500 relative">
          <ImageContainer text="House of Blue" imgUrl="blue"/>
          <span className={`absolute bottom-5 left-5  text-white font-bold text-sm ${ITC_Font.className}`}>
            &quot;House of Blue&quot;
          </span>
        </div>
      </div>
    </section>
  );
};

export default MyArtPieces;
