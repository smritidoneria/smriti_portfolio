"use client";



export default function About() {
  return (
    <>
  <section
  id="about"
  className="relative h-[27.6vh] md:h-[90vh] overflow-hidden"
>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
          absolute
          inset-0
          w-full
          h-full
 
          md:object-cover
          md:object-center
        "
        >
          <source src="/about-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

<div
  className="absolute bottom-0 left-0 w-full h-20 md:h-64"
  style={{
    background:
      "linear-gradient(to bottom, transparent 0%, #000 100%)",
  }}
/>

<div
  className="
    absolute
    bottom-[-2px]
    left-0
    w-full
    h-8
    bg-black
    z-30
  "
/>

<div
  className="
    relative
    z-10
    h-full
    flex
    flex-col
    justify-end
    px-6
    md:px-20
    pb-10
    md:pb-12
  "
>
        <div className="absolute top-10 left-6 md:top-20 md:left-20">
        <p className="text-2xl md:text-5xl font-bold leading-none text-white">
              About
              <br />
              Me.
            </p>
          </div>

          <h2
  className="
    bottom-[-2px]
    text-xl
    sm:text-4xl
    md:text-6xl
    md: bottom-[-4px]
    font-light
    leading-[0.95]
    text-white
    max-w-6xl
  "
>
            Building Careers.
            <br />
            Creating Impact.
          </h2>
        </div>
      </section>

      <section className="bg-black -mt-20  pb-10 py-20 md:py-22">
      <div className="w-full px-6 md:px-20">
      <p
  className="
    text-lg
    sm:text-xl
    md:text-2xl
    
    text-white
    leading-[1.7]
    w-full
    text-justify
  "
>
            I am Smriti Doneria — a Software Engineer at Microsoft and a Tech &
            Career content creator helping students and early professionals
            navigate jobs, internships, and career growth in India.
          Through <span className="text-gray-400">@smritidoneria</span> and{" "}
            <span className="text-gray-400">@smriti.codes</span>, I create content
            at the intersection of technology and real-world career
            opportunities, reaching a combined audience of 130k+ followers and
            5M+ monthly reach.
            </p>

        </div>
      </section>
    </>
  );
}
