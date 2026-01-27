"use client";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 text-center">
      <p className="text-white font-bold">Let&apos;s Connect</p>
      <a href="mailto:jermiahtesfaye3@gmail.com" className="text-primary hover:underline">
        jeremiahtesfaye3@gmail.com
      </a>
      <div className="flex justify-center gap-4 mt-4 text-white/70">
        <a href="#" aria-label="GitHub"><span className="material-symbols-outlined">code</span></a>
        <a href="#" aria-label="LinkedIn"><span className="material-symbols-outlined">linkedin</span></a>
      </div>
      <p className="mt-8 text-gray-400 text-sm">© 2026 Ermias Tesfaye. All rights reserved.</p>
    </footer>
  );
}
