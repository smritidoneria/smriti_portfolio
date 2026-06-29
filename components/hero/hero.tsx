"use client";

import { motion } from "framer-motion";
import { generalSans } from "@/lib/fonts";
import Navbar from "@/components/navbar/navbar";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#080808] text-white">
      <Navbar />

      {/* Background Face */}
      <div className="absolute inset-0 bg-[#050505]">
  <div
    className="hidden md:block absolute inset-0"
    style={{
      background: `
        radial-gradient(
          circle at 50% 35%,
          rgba(59,130,246,0.22) 0%,
          rgba(59,130,246,0.10) 25%,
          transparent 65%
        )
      `,
      filter: "blur(80px)",
    }}
  />
</div>
      {/* <div
        className="absolute inset-0 bg-center bg-cover opacity-10"
        style={{
          backgroundImage: "url('/face-bg.png')",
        }}
      /> */}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.9)_100%)]" />

      {/* Main Content */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="text-center">
          {/* Huge Name */}
          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: [1, 1, 0],
              scale: [0.9, 1, 1],
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.4, 1],
            }}
            className={`
              ${generalSans.className}
              absolute
              left-1/2
              top-[40%]
              -translate-x-1/2
              whitespace-nowrap
              text-[4rem]
              sm:text-[5rem]
              md:text-[12rem]
              lg:text-[12rem]
              xl:text-[14rem]
              font-black
              leading-none
              tracking-[-0.01em]
              text-white
              z-40
            `}
          >
            Smriti Doneria
          </motion.h1>

          {/* Desktop Image */}
          <motion.img
            src="/smriti.png"
            alt="Smriti"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 1.2,
              ease: "easeOut",
            }}
            className="
    hidden md:block
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2
    h-[90vh]
    object-contain
    z-30
  "
          />

{/* <div
  className="
    block md:hidden
    absolute
    left-1/2
    -translate-x-1/2
    bottom-[20%]
    w-[75%]
    h-[60vh]
    z-20
  "
  style={{
    background:
      "radial-gradient(circle, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0.18) 40%, transparent 75%)",
    filter: "blur(80px)",
  }}
/> */}

          {/* Mobile Image */}
          {/* Mobile Image */}
          <motion.img
            src="/smriti1.png"
            alt="Smriti"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 1.2,
            }}
            className="
            block md:hidden
            absolute
            bottom-[-25%]
            left-1/2
            -translate-x-1/2
            w-[80%]
            max-w-none
            h-[110vh]
            object-contain
            z-30
            "
          />
          {/* Shadow Layer 1 */}
          <div
            className="
    block md:hidden
    absolute

    left-1/2
    -translate-x-1/2
    w-[120%]
 
h-[55vh]
bottom-[-5%]
    z-20
  "
  style={{
    background: `
      radial-gradient(
        ellipse at center,
        rgba(0,0,0,1) 0%,
        rgba(0,0,0,0.95) 30%,
        rgba(0,0,0,0.7) 60%,
        transparent 100%
      )
    `,
    filter: "blur(40px)",
  }}
          />

          {/* Shadow Layer 2 */}
          <div
            className="
    block md:hidden
    absolute
    bottom-0
    left-0
    w-full
    h-32
    bg-black
    z-40
  "
          />

          {/* Headline */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 2.6,
              duration: 0.8,
            }}
            className="
 absolute

/* Mobile */
left-10
top-25
text-left
max-w-[80%]

/* Desktop */
md:left-10
md:top-1/2
md:-translate-y-1/2
md:max-w-md

lg:left-16
z-40
  "
          >
            <div className="ml-0 md:ml-10 lg:ml-20">
              <p
                className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-400"
              >
                Tech Educator /
                <br />
                Content Creator.
              </p>

              <div className="h-12 md:h-30" />

              <h2
                className="text-4xl
sm:text-4xl
md:text-5xl
lg:text-5xl
xl:text-7xl font-bold leading-none"
              >
                Smriti
                <br />
                Doneria
              </h2>

              <p
  className="
  mt-6
  max-w-[320px]
  text-base
  leading-7
  text-gray-300
  text-justify

  md:hidden
  "
>
Helping students and developers
navigate internships, placements, software
engineering, and long-term career growth.
</p>

              <p
                className=" hidden md:block mt-6 text-lg
sm:text-xl
md:text-2xl
lg:text-2xl text-gray-300"
              >
                SDE at Microsoft
              </p>
            </div>
          </motion.div>

          {/* Followers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className=" hidden md:block absolute
left-1/2
bottom-32
-translate-x-1/2
text-center

md:left-auto
md:right-10
md:top-[25%]
md:bottom-auto
md:translate-x-0
md:text-right

lg:right-20 z-50"
          >
            <div className="space-y-6 mt-30 right-14 ">
              <div>
                <p className="text-lg md:text-2xl lg:text-3xl text-gray-400 ">
                  @smritidoneria
                </p>
                <p className="text-base md:text-xl lg:text-2xl font-medium">
                  100K+ Followers
                </p>
              </div>

              <div>
                <p className="text-3xl text-gray-400">@smriti.codes</p>
                <p className="text-2xl font-medium">15K+ Followers</p>
              </div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="absolute
            right-6
bottom-14
text-right





md:left-auto
md:right-10
md:bottom-16
md:translate-x-0
md:text-right

lg:right-20 z-50"
          >
            <h3
              className="text-xl
sm:text-2xl
md:text-2xl
lg:text-3xl leading-tight font-light"
            >
              Building Careers.
              <br />
              Sharing Knowledge.
              <br />
              Creating Impact.
            </h3>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 3,
              duration: 0.8,
            }}
            className="absolute
bottom-4
left-1/2
flex
flex-col
sm:flex-row
-translate-x-1/2
gap-3
w-[90%]
sm:w-auto"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
