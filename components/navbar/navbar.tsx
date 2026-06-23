"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Impact", href: "#impact" },
    { label: "About", href: "#about" },
    { label: "Audience", href: "#audience" },
    { label: "Content", href: "#content" },
    { label: "Brands", href: "#brands" },
    { label: "Brand Story", href: "#story" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="
  fixed
  top-0
  left-0
  w-full
  z-50
  py-4
  bg-black

"
      >
        {/* Desktop */}
        <div className="hidden md:flex w-full justify-end pr-20 gap-20">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 text-xl font-light hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex md:hidden justify-end px-6">
          <button
            onClick={() => setOpen(true)}
            className="text-white"
          >
            <Menu size={34} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black
              z-[100]
              flex
              flex-col
            "
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                className="text-white"
              >
                <X size={34} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center items-center gap-8">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="
                    text-white
                    text-4xl
                    font-semibold
                  "
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}