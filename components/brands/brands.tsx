"use client";

import Image from "next/image";

const brands = [
  "/propeers.png",
  "/polaris.webp",
  "/vu.jpeg",
  "/naukri.png",
  "/vidya.png",
];

export default function Brands() {
  return (
    <section
  id="brands"
  className="bg-black py-10 md:py-15 overflow-hidden"
>
<div className="px-6 md:px-16">

<p
  className="
    text-sm
    md:text-2xl
    text-center
    text-gray-300
    tracking-[0.4em]
    md:tracking-[0.8em]
    mb-10
    md:mb-24
  "
>
  BRANDS
</p>
        

       

      
      </div>

      <div className="relative mt-8 md:mt-24 overflow-hidden">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-10 md:w-40 bg-gradient-to-r from-black to-transparent z-10" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-10 md:w-40 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex w-max items-center gap-10 md:gap-28 animate-marquee">

          {[...brands, ...brands, ...brands].map((logo, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                opacity-70
                hover:opacity-100
                hover:scale-110
                transition-all
                duration-500
              "
            >
              <Image
                src={logo}
                alt="brand"
                width={500}
                height={3000}
                className="
  h-16
  md:h-40
  w-auto
  object-contain
"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}