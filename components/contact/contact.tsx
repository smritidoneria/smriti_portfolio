"use client";

export default function Contact() {
    return (
      <section
  id="contact"
  className="bg-white text-black py-16 md:py-40"
>
<div className="px-6 md:px-16">
  
          {/* Top */}
          <div className="text-center mb-16 md:mb-32">
          <p className="tracking-[0.4em] md:tracking-[0.8em] text-gray-500 text-sm md:text-xl mb-4 md:mb-8">
              CONTACT
            </p>
  
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black leading-[0.95]">
              Let us work
              <br />
              together.
            </h2>
          </div>
  
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
  
            {/* Left */}
            <div className="hidden md:block space-y-8 text-3xl text-gray-600">
  
              <a
                href="#"
                className="block hover:text-black transition"
              >
                About
              </a>
  
              <a
                href="#"
                className="block hover:text-black transition"
              >
                Content
              </a>
  
              <a
                href="#"
                className="block hover:text-black transition"
              >
                Brand Stories
              </a>
  
              <a
                href="#"
                className="block hover:text-black transition"
              >
                Contact
              </a>
  
            </div>
  
            {/* Center */}
            <div>
  
            <h3 className="text-3xl md:text-6xl font-black mb-4 md:mb-6">
                FOR BRANDS
              </h3>
  
              <div className="w-full h-px bg-black/20 mb-8" />
  
              <p className="text-gray-500 tracking-[0.3em] mb-4">
                EMAIL
              </p>
  
              <a
                href="mailto:hello@smritidoneria.com"
                className="text-lg md:text-3xl font-medium break-all hover:opacity-70 transition"
              >
                smritidoneria@gmail.com
              </a>
  
              <div className="mt-8 md:mt-16">
  
                <p className="text-gray-500 tracking-[0.3em] mb-4">
                  INSTAGRAM
                </p>
  
                <p className="text-lg md:text-3xl font-medium">
                  @smritidoneria
                  @smriti.codes
                </p>
  
              </div>
  
            </div>
  
            {/* Right */}
            <div className="text-left md:text-right">
  
              <p className="tracking-[0.4em] text-gray-500 mb-8">
                LOCATION
              </p>
  
              <p className="text-xl md:text-3xl leading-relaxed">
                Agra,
                <br />
                India
              </p>
  
            </div>
  
          </div>
  
          {/* Bottom */}
          <div
  className="
    mt-16
    md:mt-32
    border-t
    border-black/10
    pt-6
    md:pt-12
    flex
    flex-col
    md:flex-row
    gap-4
    justify-between
    items-center
  "
>
  
            <p className="text-sm md:text-2xl text-gray-500 items-center justify-between">
              © 2026 Smriti Doneria
            </p>
  
           
  
          </div>
  
        </div>
      </section>
    );
  }