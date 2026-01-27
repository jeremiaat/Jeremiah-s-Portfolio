"use client";

import LazyMotionDiv from "./LazyMotionDiv";

export default function SkillsSection() {
  const skills = ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "UI/UX"];
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6">
      <LazyMotionDiv delay={0.1}>
        <h2 className="text-3xl font-bold text-white mb-6">Core Skills</h2>
      </LazyMotionDiv>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <LazyMotionDiv key={skill} delay={0.1}>
            <span className="bg-white/10 text-white px-3 py-1 rounded-full">{skill}</span>
          </LazyMotionDiv>
        ))}
      </div>
    </section>
  );
}
