"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import StoreCard from "@/components/StoreCard";
import { AnimatedGradientCardDemo, ModernInputDemo, ScrollRevealDemo } from "@/components/DemoComponents";

const MotionDiv = dynamic(() => import("@/components/LazyMotionDiv"), {
  ssr: false,
});

export default function StorePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-32 max-w-5xl mx-auto px-6 flex-1">
        {/* Header Section */}
        <section className="pb-12">
          <MotionDiv delay={0.2}>
            <h1 className="text-4xl font-black text-gray-900 dark:text-white leading-tight mb-2">
              Code & Components
            </h1>
            <p className="text-[#9292c9] text-lg">
              A collection of ready-to-use components and code snippets for your projects.
            </p>
          </MotionDiv>
        </section>

        {/* Filters / Categories */}
        <section className="flex flex-wrap gap-4 mb-12">
          {["All", "React", "Next.js", "Tailwind CSS"].map((cat) => (
            <div
              key={cat}
              className="flex h-12 items-center justify-center px-4 rounded-lg cursor-pointer 
              bg-gray-100 dark:bg-[#232348] hover:bg-gray-200 dark:hover:bg-primary/30 
              text-gray-700 dark:text-white text-sm font-medium transition-colors"
            >
              {cat}
            </div>
          ))}
        </section>

        {/* Component Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Animated Gradient Card",
              desc: "A responsive card component with a subtle, animated gradient background on hover.",
              tags: ["React", "Tailwind CSS", "Framer Motion"],
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfDn0Ibw4xjHABazTXVxspn4itAWVqNllB_XZFNu2IO7FagfhoR8BV-uAlnrm8fp2T_J7O_mmZ5XLa_EgHis-0wnkX4WWjCcVNZtjV1rJZbknLyLVbGx3ndHbmkF-vZuVOUE2_xyR49qckWDxN34hJmryuGpIJV9g_M3ki4hxAnFYUr5SEzU-tDN5ZDCcGLTNR-3hthEDgSg3n3-FdADjJfT6YaIG-uvI2uhokJHCvGR6-krronksgeaeLF1TakM1I6XYaBKO5d0E",
              codeSnippet: "import { motion } from 'framer-motion';\n\nexport default function AnimatedGradientCard({ children }) {\n  return (\n    <motion.div\n      className='relative p-6 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500'\n      whileHover={{ scale: 1.05 }}\n    >\n      {children}\n    </motion.div>\n  );\n}",
            },
            {
              title: "Modern Input Field",
              desc: "A stylish form input with floating labels and validation states.",
              tags: ["Next.js", "TypeScript", "Tailwind CSS"],
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR792Baq_5VOXQ2VWJKvj8TkrZrPMBtKHU22lYc8EnKrcS7zBRXSCLd3oNX24Xm5ghewzQ0xYMeNlaaD6pe9wlfRjTWLVBSRdhfENUtWKUFOikdu833d76tphBbFKVn9gZEjx39rbQxCHHVyiMyAcakoJNBgnwyKYywG72gojMPw9-ouuc4FqbyiQytlB2TSrLFZ4_PdGH-yN_qH-ZOyoeuW8KiAQbNnc_ZPOvqfLRmxOexep0feGn_BZJQdFalV2PWsjGexumszA",
              codeSnippet: "import { useState } from 'react';\n\nexport default function ModernInput({ label, type = 'text', ...props }) {\n  const [value, setValue] = useState('');\n  const [isFocused, setIsFocused] = useState(false);\n\n  return (\n    <div className='relative'>\n      <input\n        type={type}\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n        onFocus={() => setIsFocused(true)}\n        onBlur={() => setIsFocused(!!value)}\n        className='w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors'\n        {...props}\n      />\n      <label\n        className={'absolute left-4 transition-all duration-200 ' + (isFocused || value ? 'top-0 text-xs text-blue-500' : 'top-2 text-gray-500')}\n      >\n        {label}\n      </label>\n    </div>\n  );\n}",
            },
            {
              title: "Scroll-Reveal Section",
              desc: "A reusable section wrapper that animates its children into view on scroll.",
              tags: ["Framer Motion", "React"],
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrm7Ew7hRInVd9yOjzUww-mCZfdwRPdPtNrfPWs1ig4pNV3fAkaEN9c72wYIsN4Lnna4htkz7WT-iTt3jX9LSic3E3eWLL1vm9G00yzWsiUkj9_kufh2-8biZS6vmpDy7f_ji1nv9RQT9ORYyJOcDA-G_JygeovZCVBzwDuc0apv4yV0kfIu54Lchu44eXxQZq-kDt3IAep9UyERyWHVL00T6CJz91epepuxChPDyh4C3Fo9tShwrKFPIMPNz4bOvums-gMmOznqw",
              codeSnippet: "import { motion } from 'framer-motion';\nimport { useInView } from 'react-intersection-observer';\n\nexport default function ScrollRevealSection({ children, delay = 0 }) {\n  const [ref, inView] = useInView({\n    triggerOnce: true,\n    threshold: 0.1,\n  });\n\n  return (\n    <motion.div\n      ref={ref}\n      initial={{ opacity: 0, y: 50 }}\n      animate={inView ? { opacity: 1, y: 0 } : {}}\n      transition={{ duration: 0.6, delay }}\n    >\n      {children}\n    </motion.div>\n  );\n}",
            },
          ].map((item, index) => (
            <StoreCard
              key={item.title}
              title={item.title}
              desc={item.desc}
              tags={item.tags}
              image={item.image}
              codeSnippet={item.codeSnippet}
              demoComponent={
                index === 0 ? <AnimatedGradientCardDemo /> :
                index === 1 ? <ModernInputDemo /> :
                index === 2 ? <ScrollRevealDemo /> : null
              }
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
