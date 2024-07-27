"use client";

import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

type MobileImage = {
  src: string;
  alt: string;
  speed: number;
};

const MobileImages: MobileImage[] = [
  { src: "/assets/images/iphone_01.png", alt: "iPhone1", speed: 10 },
  { src: "/assets/images/iphone_02.png", alt: "iPhone2", speed: 20 },
  { src: "/assets/images/iphone_03.png", alt: "iPhone3", speed: 10 },
  { src: "/assets/images/iphone_04.png", alt: "iPhone4", speed: 20 },
  { src: "/assets/images/iphone_05.png", alt: "iPhone5", speed: 10 },
];

const MobilesSection = () => {
  return (
    <section className="bg-[#e9e9e9] dark:bg-gray-900" id="about">
      <ParallaxProvider>
        <div className="flex gap-10 mx-auto justify-center align-middle max-w-[1600px]">
          {MobileImages.map(({ src, alt, speed }) => (
            <Parallax key={alt} speed={speed}>
              <Image src={src} alt={alt} width={279} height={576} />
            </Parallax>
          ))}
        </div>
      </ParallaxProvider>
    </section>
  );
};

export default MobilesSection;
