"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "Student Registration System",
    desc: "Java MVC app for managing students with DB persistence.",
    tags: ["Java", "MVC", "Database"],
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfDn0Ibw4xjHABazTXVxspn4itAWVqNllB_XZFNu2IO7FagfhoR8BV-uAlnrm8fp2T_J7O_mmZ5XLa_EgHis-0wnkX4WWjCcVNZtjV1rJZbknLyLVbGx3ndHbmkF-vZuVOUE2_xyR49qckWDxN34hJmryuGpIJV9g_M3ki4hxAnFYUr5SEzU-tDN5ZDCcGLTNR-3hthEDgSg3n3-FdADjJfT6YaIG-uvI2uhokJHCvGR6-krronksgeaeLF1TakM1I6XYaBKO5d0E",
    githubUrl: "https://github.com/jeremiaat/StudentRegistrationSystem"
  },
  {
    title: "Personal Finance Management System",
    desc: "Track income, expenses, and financial records.",
    tags: ["Web App", "Finance", "Tracking"],
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfDn0Ibw4xjHABazTXVxspn4itAWVqNllB_XZFNu2IO7FagfhoR8BV-uAlnrm8fp2T_J7O_mmZ5XLa_EgHis-0wnkX4WWjCcVNZtjV1rJZbknLyLVbGx3ndHbmkF-vZuVOUE2_xyR49qckWDxN34hJmryuGpIJV9g_M3ki4hxAnFYUr5SEzU-tDN5ZDCcGLTNR-3hthEDgSg3n3-FdADjJfT6YaIG-uvI2uhokJHCvGR6-krronksgeaeLF1TakM1I6XYaBKO5d0E",
    githubUrl: "https://github.com/jeremiaat/Personal-Finance-Management-System"
  },
  {
    title: "AI Translation Bot",
    desc: "Automated text translation service / bot.",
    tags: ["AI", "Translation", "Bot"],
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfDn0Ibw4xjHABazTXVxspn4itAWVqNllB_XZFNu2IO7FagfhoR8BV-uAlnrm8fp2T_J7O_mmZ5XLa_EgHis-0wnkX4WWjCcVNZtjV1rJZbknLyLVbGx3ndHbmkF-vZuVOUE2_xyR49qckWDxN34hJmryuGpIJV9g_M3ki4hxAnFYUr5SEzU-tDN5ZDCcGLTNR-3hthEDgSg3n3-FdADjJfT6YaIG-uvI2uhokJHCvGR6-krronksgeaeLF1TakM1I6XYaBKO5d0E",
    githubUrl: "https://github.com/jeremiaat/Translation-bot"
  },
  {
    title: "Bookstore Management System",
    desc: "Manage books, users, and orders.",
    tags: ["Management", "Books", "Orders"],
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfDn0Ibw4xjHABazTXVxspn4itAWVqNllB_XZFNu2IO7FagfhoR8BV-uAlnrm8fp2T_J7O_mmZ5XLa_EgHis-0wnkX4WWjCcVNZtjV1rJZbknLyLVbGx3ndHbmkF-vZuVOUE2_xyR49qckWDxN34hJmryuGpIJV9g_M3ki4hxAnFYUr5SEzU-tDN5ZDCcGLTNR-3hthEDgSg3n3-FdADjJfT6YaIG-uvI2uhokJHCvGR6-krronksgeaeLF1TakM1I6XYaBKO5d0E",
    githubUrl: "https://github.com/jeremiaat/books-store"
  },
  {
    title: "Real-Time Chat Application",
    desc: "Messaging system with client/server logic.",
    tags: ["Chat", "Real-Time", "Client/Server"],
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfDn0Ibw4xjHABazTXVxspn4itAWVqNllB_XZFNu2IO7FagfhoR8BV-uAlnrm8fp2T_J7O_mmZ5XLa_EgHis-0wnkX4WWjCcVNZtjV1rJZbknLyLVbGx3ndHbmkF-vZuVOUE2_xyR49qckWDxN34hJmryuGpIJV9g_M3ki4hxAnFYUr5SEzU-tDN5ZDCcGLTNR-3hthEDgSg3n3-FdADjJfT6YaIG-uvI2uhokJHCvGR6-krronksgeaeLF1TakM1I6XYaBKO5d0E",
    githubUrl: "https://github.com/jeremiaat/Chat-App"
  },
  {
    title: "Beautiful Animals Website",
    desc: "UI-focused site for browsing animal content.",
    tags: ["Web", "UI", "Animals"],
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfDn0Ibw4xjHABazTXVxspn4itAWVqNllB_XZFNu2IO7FagfhoR8BV-uAlnrm8fp2T_J7O_mmZ5XLa_EgHis-0wnkX4WWjCcVNZtjV1rJZbknLyLVbGx3ndHbmkF-vZuVOUE2_xyR49qckWDxN34hJmryuGpIJV9g_M3ki4hxAnFYUr5SEzU-tDN5ZDCcGLTNR-3hthEDgSg3n3-FdADjJfT6YaIG-uvI2uhokJHCvGR6-krronksgeaeLF1TakM1I6XYaBKO5d0E",
    githubUrl: "https://github.com/jeremiaat/Animal-Website"
  },
  {
    title: "Loan Prediction System",
    desc: "Predict loan eligibility using data logic / ML concepts.",
    tags: ["ML", "Prediction", "Data"],
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfDn0Ibw4xjHABazTXVxspn4itAWVqNllB_XZFNu2IO7FagfhoR8BV-uAlnrm8fp2T_J7O_mmZ5XLa_EgHis-0wnkX4WWjCcVNZtjV1rJZbknLyLVbGx3ndHbmkF-vZuVOUE2_xyR49qckWDxN34hJmryuGpIJV9g_M3ki4hxAnFYUr5SEzU-tDN5ZDCcGLTNR-3hthEDgSg3n3-FdADjJfT6YaIG-uvI2uhokJHCvGR6-krronksgeaeLF1TakM1I6XYaBKO5d0E",
    githubUrl: "https://github.com/jeremiaat/Loan-prediction"
  },
  {
    title: "Portfolio Website",
    desc: "Your personal developer portfolio frontend.",
    tags: ["Portfolio", "Frontend", "Developer"],
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfDn0Ibw4xjHABazTXVxspn4itAWVqNllB_XZFNu2IO7FagfhoR8BV-uAlnrm8fp2T_J7O_mmZ5XLa_EgHis-0wnkX4WWjCcVNZtjV1rJZbknLyLVbGx3ndHbmkF-vZuVOUE2_xyR49qckWDxN34hJmryuGpIJV9g_M3ki4hxAnFYUr5SEzU-tDN5ZDCcGLTNR-3hthEDgSg3n3-FdADjJfT6YaIG-uvI2uhokJHCvGR6-krronksgeaeLF1TakM1I6XYaBKO5d0E",
    githubUrl: "https://github.com/jeremiaat/MyPortfolioWebsite"
  },
  {
    title: "Orbit Web Project",
    desc: "Web platform experiment / UI system.",
    tags: ["Web", "Platform", "UI"],
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfDn0Ibw4xjHABazTXVxspn4itAWVqNllB_XZFNu2IO7FagfhoR8BV-uAlnrm8fp2T_J7O_mmZ5XLa_EgHis-0wnkX4WWjCcVNZtjV1rJZbknLyLVbGx3ndHbmkF-vZuVOUE2_xyR49qckWDxN34hJmryuGpIJV9g_M3ki4hxAnFYUr5SEzU-tDN5ZDCcGLTNR-3hthEDgSg3n3-FdADjJfT6YaIG-uvI2uhokJHCvGR6-krronksgeaeLF1TakM1I6XYaBKO5d0E",
    githubUrl: "https://github.com/jeremiaat/Orbit"
  },
  {
    title: "Node.js Backend Playground",
    desc: "Backend API experiments and services.",
    tags: ["Node.js", "Backend", "API"],
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfDn0Ibw4xjHABazTXVxspn4itAWVqNllB_XZFNu2IO7FagfhoR8BV-uAlnrm8fp2T_J7O_mmZ5XLa_EgHis-0wnkX4WWjCcVNZtjV1rJZbknLyLVbGx3ndHbmkF-vZuVOUE2_xyR49qckWDxN34hJmryuGpIJV9g_M3ki4hxAnFYUr5SEzU-tDN5ZDCcGLTNR-3hthEDgSg3n3-FdADjJfT6YaIG-uvI2uhokJHCvGR6-krronksgeaeLF1TakM1I6XYaBKO5d0E",
    githubUrl: "https://github.com/jeremiaat/JS-Backend"
  }
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web Apps", "UI Kits", "CLI Tools", "Open Source"];

  const filterMap: Record<string, string[]> = {
    All: [],
    "Web Apps": ["react", "next", "next.js", "vue", "vue.js", "node", "node.js", "express", "django", "flask"],
    "UI Kits": ["figma", "design system", "storybook", "ui", "design", "css-in-js"],
    "CLI Tools": ["cli", "python", "click", "bash", "shell"],
    "Open Source": []
  };

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => {
      const tags = (project.tags || []).map(t => t.toLowerCase());
      if (activeFilter === "Open Source") {
        return !!project.githubUrl || tags.some(t => t.includes("open"));
      }
      const keywords = filterMap[activeFilter] || [];
      return keywords.some(k => tags.some(t => t.includes(k)));
    });

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-200 min-h-screen">
      <Navbar />

      <main className="pt-32 max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-4 py-8">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">My Projects</p>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">A collection of my work, from full-stack applications to UI components.</p>
          </div>
        </div>
        <div className="flex gap-2 p-1 flex-wrap mb-8">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 cursor-pointer transition-colors ${
                activeFilter === filter
                  ? "bg-primary/20 dark:bg-primary/30"
                  : "bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20"
              }`}
            >
              <p className={`text-sm font-medium leading-normal ${
                activeFilter === filter
                  ? "text-primary dark:text-white"
                  : "text-slate-700 dark:text-slate-300"
              }`}>
                {filter}
              </p>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              desc={project.desc}
              tags={project.tags}
              imgUrl={project.imgUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
