"use client";

export default function Audience() {
  const accounts = [
    {
      handle: "@smritidoneria",
      description:
        "Jobs · Internships · Career Growth · AI · Tech",
      followers: "125K+",
      reach: "4M+",
      videos: "120+",
    },
    {
      handle: "@smriti.codes",
      description:
        "AI · Coding · Developers · Tech Tools · DSA",
      followers: "25K+",
      reach: "1M+",
      videos: "50+",
    },
  ];

  const demographics = [
    {
      title: "Age Group",
      value: "18–28 Years",
    },
    {
      title: "Gender",
      value: "60% Male",
      sub: "40% Female",
    },
    {
      title: "Profile",
      value: "Students &",
      sub: "Early Professionals",
    },
    {
      title: "Location",
      value: "Tier 1 & 2 Cities",
      sub: "Delhi · Bangalore · Mumbai",
    },
  ];

  return (
    <section
  id="audience"
  className="relative bg-[#f5f5f5] py-16 md:py-22 overflow-hidden"
>
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[180px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)",
        }}
      />

<div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-20">
<p className="text-sm md:text-xl tracking-[0.4em] md:tracking-[0.8em] text-gray-500 mb-6 md:mb-8">
          AUDIENCE
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black mb-4 md:mb-6">
        The Community.
        </h2>

        <p
  className="
    text-base
    sm:text-lg
    md:text-xl
    text-gray-600
    mb-12
    md:mb-12
    max-w-3xl
    leading-relaxed
    text-justify
  "
>
          An audience of students, developers, and early professionals actively
          looking for career opportunities, tech tools, AI, coding resources,
          and industry insights.
        </p>

        {/* Accounts */}
        <div className="grid md:grid-cols-2 gap-10">
          {accounts.map((account) => (
            <div
              key={account.handle}
              className="
                bg-white
                rounded-3xl
                p-6
                md:p-6
                border
                border-black/5
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl md:text-3xl font-black text-black">
                {account.handle}
              </h3>

              <p className="mt-3 md:mt-4 text-base md:text-xl text-gray-600 leading-relaxed">
                {account.description}
              </p>

              <div className="grid grid-cols-3 mt-8 md:mt-12 gap-6">
                <div>
                <h4 className="text-3xl md:text-5xl font-black text-black">
                    {account.followers}
                  </h4>

                  <p className="text-sm md:text-base text-gray-500 mt-2">
                    Followers
                  </p>
                </div>
                <div>
    <h4 className="text-3xl md:text-5xl font-black text-black">
      {account.videos}
    </h4>

    <p className="text-sm md:text-base text-gray-500 mt-2">
      Videos Published
    </p>
  </div>

                <div>
                <h4 className="text-3xl md:text-5xl font-black text-black">
                    {account.reach}
                  </h4>

                  <p className="text-sm md:text-base text-gray-500 mt-2">
                    Monthly Reach
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demographics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-12">
          {demographics.map((item) => (
            <div
              key={item.title}
              className="
                bg-black
                rounded-2xl
                p-8
                border
                border-black/5
                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              "
            >
              <p className="text-sm md:text-base text-white mb-3 md:mb-4">
                {item.title}
              </p>

              <h3 className="text-sm md:text-2xl font-black text-white leading-tight">
                {item.value}
              </h3>

              {item.sub && (
                <p className="text-sm md:text-lg text-white mt-2 md:mt-3 leading-relaxed">
                  {item.sub}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}