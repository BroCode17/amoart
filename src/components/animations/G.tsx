"use client";
import React, { useRef } from "react";
import "./styles.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable, ScrollTrigger } from "gsap/all";
import { galleryCarouselImages, shopData } from "../../../utils/data";
import ImageContainerTwo from "../ImageContanierTwo";

gsap.registerPlugin(useGSAP, Draggable, ScrollTrigger);

const G = () => {
  const container = useRef<HTMLInputElement>(null);

  useGSAP(() => {
    const images = gsap.utils.toArray(".item");

    const imageSize = images.length;
    const total = images.length;
  
    const degree = 360 / total;

    const init = () => {
      const timeline = gsap.timeline();
      images.forEach((image, index) => {
        const sign = Math.floor((index / 2) % 2) ? 1 : -1;
        const value = Math.floor((index + 4) / 4) * 4;
        const rotation = index > imageSize - 3 ? 0 : sign * value;

        gsap.set(image!, {
          rotation: rotation,
          scale: 0.5,
        });

        timeline.from(
          image,
          {
       
            x: () =>
              index % 2
                ? window.innerWidth + image.clientWidth * 4
                : -window.innerWidth - image.clientWidth * 4,
            y: () => window.innerHeight - image.clientHeight,
            rotation: index % 2 ? 200 : -200,
            scale: 4,
            autoAlpha: 1,
            ease: "power4.out",
            duration: 1,
            delay: 0.20 * Math.floor(index / 2),
          },
          0
        );

        let rotationAngle = index * degree;
        timeline.to(
          image,
          {
            scale: 1,
            duration: 0,
          },
          0.15 * (imageSize / 2 - 1) + 1
        );

        timeline.to(
          image,
          {
            transformOrigin: "center 200vh",
            rotation:
              index > imageSize / 2
                ? -degree * (imageSize - index)
                : rotationAngle,
            duration: 1,
            ease: "power1.out",
          },
          0.15 * (imageSize / 2 - 1) + 1
        );
      });
    };

    const draggable = () => {
      let start = 0;
      Draggable.create(".items", {
        type: "rotation",

        onDragStart: function () {
          start = this.rotation;
        },
        onDragEnd: function () {
          const rotation = this.rotation;
          const offset = Math.abs(rotation - start);
          if (rotation > start) {
            if (rotation - start < degree / 2) {
              gsap.to(".items", {
                rotation: `-=${offset}`,
              });
            } else {
              gsap.to(".items", {
                rotation: `+=${2 * degree - offset}`,
              });
            }
          } else {
            if (Math.abs(rotation - start) < degree / 2) {
              gsap.to(".items", {
                rotation: `+=${offset}`,
              });
            } else {
              gsap.to(".items", {
                rotation: `-=${2 * degree - offset}`,
              });
            }
          }
        },
      });
    };

    init();
    draggable();

   
  },[]),
    { scope: container };

  return (
    <div className="container">
      <div className="center">
        <div className="items" ref={container}>
            {/* <div className="item"> 
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/original/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg"
              />
            </div>
          </div> */} 
          {shopData.map((item, index) => (
            <div className="item" key={index}>
              <div className="card">
                <ImageContainerTwo imgUrl={item.url} text={item.url} />
              </div>
            </div>
          ))}
          {/* <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/original/aWh8R6jeAbmiB4TsF6CjYFrUsI8.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/original/zxVEkxgreRkFkh1rBK85T2JyxFY.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/original/vKEBse3BPU7crfAjdPNaC6WePnO.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/bCj4EfuehAlgBwVd3diyWyhuuau.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/original/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/original/aWh8R6jeAbmiB4TsF6CjYFrUsI8.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/original/zxVEkxgreRkFkh1rBK85T2JyxFY.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/original/vKEBse3BPU7crfAjdPNaC6WePnO.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg"
              />
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="image"
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/bCj4EfuehAlgBwVd3diyWyhuuau.jpg"
              />
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default G;
