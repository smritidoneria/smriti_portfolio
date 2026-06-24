"use client";



export default function Story() {
  return (
    <>
      <section
  id="story"
  className="relative h-[26vh] md:h-[90vh] overflow-hidden"
>
        <video
          autoPlay
          muted
          loop
          playsInline
          className=" absolute
          inset-0
          w-full
          h-full
          object-contain
          md:object-cover
          md:object-center"
        >
          <source src="/story.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

<div
  className="absolute bottom-[-2px] left-0 w-full h-24"
  style={{
    background:
      "linear-gradient(to bottom, transparent 0%, #000 100%)",
  }}
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
    md:pb-16
  "
>
        <div className="absolute top-10 left-6 md:top-20 md:left-20">
        <p className="text-xl md:text-5xl font-bold leading-none text-white">
             Brand
              <br />
              Impact.
            </p>
          </div>

          <h2
  className="
    relative
    top-10
    text-2xl
    sm:text-4xl
    md:text-7xl
    font-light
    leading-[0.95]
    text-white
  "
>
          PROPEERS × SMRITI DONERIA
         
          
          </h2>
        </div>
      </section>

      <section className="bg-black py-12 md:py-12">
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
  This campaign was created for ProPeers, a placement-focused platform
  helping students prepare for internships and job opportunities.

  The objective was simple: reach students actively looking for career
  guidance and placement resources. Through a highly targeted Instagram
  reel, the campaign generated significant engagement within the student
  community.
</p>

<div
  className="
    grid
    grid-cols-2
    md:flex
    gap-4
    md:gap-8
    mt-8
    md:mt-10
    text-base
    md:text-3xl
  "
>

  <span className="text-gray-400">
    • 2,090+ Likes
  </span>

  <span className="text-gray-400">
    • 7,231+ Comments
  </span>

  <span className="text-gray-400">
    • 2,506+ Saves
  </span>

  <span className="text-gray-400">
    • 4,847+ Shares
  </span>

</div>

<p
  className="
    mt-8
    md:mt-10
    text-lg
    sm:text-xl
    md:text-2xl
    text-white
    leading-[1.7]
    text-justify
  "
>
  The high number of saves and shares indicates that students found the
  content valuable enough to revisit and recommend to others, extending
  the campaign reach beyond the initial audience.


More importantly, over 7,000 comments created direct
    conversations around placements, career opportunities, and student
    concerns, helping ProPeers build visibility and engagement among a
    highly relevant audience.

</p>

        </div>
      </section>
    </>
  );
}
