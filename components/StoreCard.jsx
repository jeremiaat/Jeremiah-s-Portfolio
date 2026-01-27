"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import useInView from "./useInView";

const MotionDiv = dynamic(() => import("./LazyMotionDiv"), { ssr: false });

export default function StoreCard({ title, desc, tags = [], image, codeSnippet = "", demoComponent }) {
  const [showCode, setShowCode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ref, isInView] = useInView();

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(codeSnippet || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore copy errors
    }
  }

  return (
    <MotionDiv
      delay={0.15}
      className="relative flex flex-col gap-4 p-4 rounded-2xl border bg-white/60 dark:bg-[#0b0b12]/60 border-gray-200 dark:border-[#212035] backdrop-blur-sm shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-350"
      onMouseEnter={() => setShowCode(true)}
      onMouseLeave={() => setShowCode(false)}
      ref={ref}
    >
      <div className="relative rounded-xl overflow-hidden">
        <div
          className="w-full aspect-video bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{title}</p>
          <p className="text-sm text-gray-600 dark:text-[#9aa0d1] mt-1">{desc}</p>
        </div>
        <div className="flex-shrink-0 hidden sm:flex items-center gap-2">
          {tags.slice(0,3).map((tag) => (
            <span key={tag} className="text-xs font-medium py-1 px-2 rounded-full bg-gray-100 text-gray-700 dark:bg-[#1a1330] dark:text-[#b9c3ff]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-2">
        <button
          onClick={() => setModalOpen(true)}
          className="flex-1 flex items-center gap-2 justify-center h-11 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold hover:brightness-95 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A2 2 0 008 11v6a2 2 0 002 2h6a2 2 0 002-2v-6a2 2 0 00-3.248-1.832zM7 7h.01" />
          </svg>
          Live Demo
        </button>

        <button
          onClick={() => { setShowCode(s => !s); if (!showCode) setTimeout(() => window.scrollBy({ top: 100, behavior: 'smooth' }), 100); }}
          className="flex-1 flex items-center gap-2 justify-center h-11 px-4 rounded-lg border border-gray-200 dark:border-[#232348] bg-white/60 dark:bg-[#0b0b12]/40 text-gray-800 dark:text-white font-semibold hover:shadow-sm transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-10l-4-4-4 4" />
          </svg>
          {showCode ? 'Hide Code' : 'View Code'}
        </button>
      </div>

      {showCode && isInView && (
        <div className="mt-3 p-3 bg-gray-50 dark:bg-[#0f1220] rounded-lg border border-gray-100 dark:border-[#1a1b2f] overflow-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-gray-500 dark:text-gray-300">Code Preview</div>
            <div className="flex items-center gap-2">
              <button onClick={copyCode} className="text-xs px-2 py-1 rounded bg-indigo-600 text-white">{copied ? 'Copied' : 'Copy'}</button>
            </div>
          </div>
          <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap"><code>{codeSnippet}</code></pre>
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          <div className="relative z-10 w-[min(900px,95%)] max-h-[85vh] overflow-auto rounded-2xl bg-white dark:bg-[#0b0b12] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title} — Demo</h3>
                <p className="text-sm text-gray-600 dark:text-[#9aa0d1]">Interactive preview</p>
              </div>
              <button onClick={() => setModalOpen(false)} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">Close</button>
            </div>
            <div className="mt-4">
              {demoComponent || <div className="p-6 text-center text-gray-500">No demo available.</div>}
            </div>
          </div>
        </div>
      )}
    </MotionDiv>
  );
}
