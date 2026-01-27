"use client";

import { motion } from "framer-motion";

interface ContactCardProps {
  title: string;
  desc: string;
  icon: string;
  link: string;
  linkText: string;
}

export default function ContactCard({
  title,
  desc,
  icon,
  link,
  linkText
}: ContactCardProps) {
  return (
    <motion.div
      className="flex flex-col gap-4 p-6 border border-gray-200 dark:border-[#232348] rounded-xl bg-white dark:bg-[#111122]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg">
        <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
      </div>

      {/* Title & Description */}
      <div className="flex flex-col gap-2">
        <p className="text-base font-medium leading-normal text-gray-900 dark:text-white">{title}</p>
        <p className="text-sm font-normal leading-normal text-gray-500 dark:text-[#9292c9]">{desc}</p>
      </div>

      {/* Link */}
      <a
        href={link}
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
      >
        <span>{linkText}</span>
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </a>
    </motion.div>
  );
}
