"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  desc: string;
  tags?: string[];
  imgUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  desc,
  tags = [],
  imgUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDfDn0Ibw4xjHABazTXVxspn4itAWVqNllB_XZFNu2IO7FagfhoR8BV-uAlnrm8fp2T_J7O_mmZ5XLa_EgHis-0wnkX4WWjCcVNZtjV1rJZbknLyLVbGx3ndHbmkF-vZuVOUE2_xyR49qckWDxN34hJmryuGpIJV9g_M3ki4hxAnFYUr5SEzU-tDN5ZDCcGLTNR-3hthEDgSg3n3-FdADjJfT6YaIG-uvI2uhokJHCvGR6-krronksgeaeLF1TakM1I6XYaBKO5d0E"
  ,
  githubUrl
}: ProjectCardProps) {
  return (
    <motion.div
      className="flex flex-col gap-4 p-4 border border-gray-200 dark:border-[#232348] rounded-xl bg-white dark:bg-[#111122]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image */}
      <div
        className="w-full aspect-video bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />

      {/* Title & Description */}
      <div className="flex flex-col gap-2">
        <p className="text-base font-medium leading-normal text-gray-900 dark:text-white">{title}</p>
        <p className="text-sm font-normal leading-normal text-gray-500 dark:text-[#9292c9]">{desc}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs font-medium py-1 px-2.5 rounded-full bg-gray-100 text-gray-600 dark:bg-primary/20 dark:text-primary/90"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-2">
        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center h-10 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold hover:opacity-90 transition"
          >
            View Code
          </a>
        ) : (
          <button className="flex-1 flex items-center justify-center h-10 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold hover:opacity-90 transition">
            View Code
          </button>
        )}

        {/* Download button removed per request */}
      </div>
    </motion.div>
  );
}
