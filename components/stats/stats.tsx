"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      number: "130K+",
      label: "Combined Followers",
    },
    {
      number: "5M+",
      label: "Monthly Reach",
    },
    {
      number: "217K+",
      label: "Monthly Interactions",
    },
    {
      number: "20K+",
      label: "New Followers/Month",
    },
  ];

  return (
    <section id="impact" className="relative bg-black py-16 overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

<div
  className="
    relative
    z-10
    max-w-[1700px]
    mx-auto
    px-12
    md:px-10
  "
>
<p
  className="
    text-center
    text-gray-300
    tracking-[0.5em]
    md:tracking-[0.8em]
    text-lg
    md:text-2xl
    mb-12
    md:mb-24
  "
>
          IMPACT
        </p>

        <div
  className="
    grid
    grid-cols-2
    gap-y-16
    gap-x-8

    md:flex
    md:justify-between
    md:items-start

    w-full
    mt-16
    md:mt-24
  "
>
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
  className="
    text-5xl
    sm:text-6xl
    md:text-8xl
    font-bold
    text-white
  "
>
  {stat.number}
</h2>

<p
  className="
    mt-3
    text-base
    sm:text-lg
    md:text-2xl
    text-gray-400
  "
>
  {stat.label}
</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
