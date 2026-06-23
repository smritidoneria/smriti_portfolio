"use client";

import { useEffect } from "react";
import Script from "next/script";

const reels = [
  {
    url: "https://www.instagram.com/reel/DZJ4BGlyjZl/",
  },
  {
    url: "https://www.instagram.com/reel/DTfWGDBkvGG/",
  },
  {
    url: "https://www.instagram.com/reel/DY9h48VSNAP/",
  },
  {
    url: "https://www.instagram.com/reel/DYRoNwJSy7q/",
  },
  {
    url: "https://www.instagram.com/reel/DWLQMOqEnz-/",
  },
  {
    url: "https://www.instagram.com/reel/DWGGp94DUev/",
  },
  {
    url: "https://www.instagram.com/reel/DWvTT8Lkriv/",
  },
  {
    url: "https://www.instagram.com/reel/DWIrVkxEqm-/",
  },
];

export default function Content() {
  useEffect(() => {
    const processEmbeds = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    processEmbeds();

    const timer = setTimeout(processEmbeds, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
      />

      <section id="content" className="bg-black py-16 md:py-40 overflow-hidden">
        <div className="px-5 md:px-16">
          {/* Section Label */}
          <p className="text-sm md:text-xl tracking-[0.4em] md:tracking-[0.8em] text-gray-200 mb-4 md:mb-6">
            CONTENT
          </p>

          {/* Heading */}
          <h2
            className="
    text-4xl
    sm:text-5xl
    md:text-8xl
    font-black
    text-white
    leading-[0.95]
  "
          >
            Content that
            <br />
            actually performs.
          </h2>

          {/* Description */}
          <p
            className="
    mt-5
    md:mt-8
    text-base
    md:text-2xl
    text-gray-400
    max-w-3xl
    text-justify
  "
          >
            A showcase of my highest-performing content across placements,
            internships, AI, coding, and career growth.
          </p>

          {/* Reel Row */}
          <div className="relative mt-10 md:mt-24 overflow-hidden">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 h-full w-8 md:w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

            {/* Right Fade */}
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 md:gap-10 overflow-x-auto scrollbar-hide pb-8">
              {reels.map((reel) => (
                <div
                  key={reel.url}
                  className="
min-w-[300px]
    max-w-[300px]
    md:min-w-[340px]
    md:max-w-[340px]
    flex-shrink-0
    group
    transition-all
    duration-500
    hover:scale-[1.03]
    md:hover:-translate-y-4
  "
                >
                  <div
                    className="
    relative
    rounded-[24px]
    overflow-hidden
    border
    border-blue-500/10
    bg-[#050505]
    h-[540px]
    md:h-auto
    transition-all
    duration-700
    group-hover:border-blue-400/40
    group-hover:shadow-[0_0_60px_rgba(59,130,246,0.35)]
  "
                  >
                    <div className="h-full overflow-hidden">
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={reel.url}
                        data-instgrm-version="14"
                      ></blockquote>
                    </div>
                  </div>
                
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
