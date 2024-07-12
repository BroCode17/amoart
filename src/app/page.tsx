import Image from "next/image";
import MyArtPieces from "@/components/MyArt";
import { ITC_Font, Ink_Free } from "./local-fonts/local";
import Carosal from "@/components/Carosal";
import CarosalTwo from "@/components/CarosalTwo";
import Testimonials from "@/components/Testimonials";
import FrameAnArt from "@/components/FrameAnArt";
import Uploader from "@/components/Uploader";

export default function Home() {
  return (
    <main className="">
      <header className="h-[81px] bg-black flex items-center justify-center ">
        <div className=" text-white flex justify-between w-5/6 2xl:w-4/6 items-center leading-5">
          <h1 className={`${Ink_Free.className} text-2xl`}>Amo.arte</h1>
          <div>
            <ul
              className={`flex gap-5 ${ITC_Font.className} font-normal text-sm`}
            >
              <li>Home</li>
              <li>About Artist</li>
              <li>Galley</li>
              <li>Shop</li>
              <li>Event/Exhibition</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </header>
      <section>
        <Carosal />
      </section>

      <section className="">
        <MyArtPieces />
      </section>
      <section className="mt-10 h-[500px] lg:h-[550px] border  flex justify-center  relative bg-car-image  bg-black  bg-blend-overlay bg-opacity-50">
        <CarosalTwo />
      </section>
      <section className="flex justify-center mt-10">
        <FrameAnArt />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Uploader />
      </section>
    </main>
  );
}
