"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const CustomBlur = ({ src }: { src: any }) => {
  // const buffer = await fs.readFile(`./public${src}`)
  // const {base64} = await getPlaiceholder(buffer)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="min-h-svh">
      <p>Static </p>
     
      <div className="relative h-[250px] w-[300px]" ref={ref}>
      {!inView && (
        <div className="flex justify-center items-center h-full">
          <div className="w-12 h-12 border-4 border-soft border-dotted rounded-full animate-spin"></div>
        </div>
      )}
        <Image
          src={src}
          alt="Blur"
          fill
          sizes="100vw"
          className={`object-cover bg-soft ${
            inView ? "opacity-100" : "opacity-0"
          } transition`}
        />
      </div>
    </div>
  );
};
