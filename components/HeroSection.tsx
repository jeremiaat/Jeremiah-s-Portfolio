"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-24">
      <div className="flex flex-col-reverse gap-10 md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          className="flex flex-col gap-6 md:gap-8 flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-[-0.033em]">
            Ermias Tesfaye | Front-End Developer
          </h1>
          <p className="text-[#9292c9] text-base md:text-lg leading-normal">
            I design and build modern, high-performance web applications with React, Next.js, and Tailwind CSS. 
            Focused on animations, usability, and beautiful UI/UX.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="projects"
              className="px-5 py-3 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold hover:opacity-90 transition"
            >
              View Projects
            </a>
            <Link
              href="/store"
              className="px-5 py-3 h-12 rounded-lg bg-white/10 text-white font-bold hover:bg-white/20 transition"
            >
              Visit Store
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="w-full md:w-2/5 aspect-square rounded-xl bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/f4/68/85/f46885e6d7a060daff9553de4d8c636a.jpg')",
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </section>
  );
}
