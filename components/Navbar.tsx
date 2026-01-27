"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full bg-background-dark/80 backdrop-blur-sm z-50 flex justify-between items-center py-4 px-6 md:px-12">
      <div className="flex items-center gap-3 text-primary">
        <Link href="/">
          <h1 className="font-bold text-xl text-white">Ermias Tesfaye</h1>
        </Link>
      </div>
      <nav className="hidden md:flex gap-6 text-white">
        <a href="/projects" className="hover:text-primary">Projects</a>
        <a href="/store" className="hover:text-primary">Store</a>
        <a href="/get-in-touch" className="hover:text-primary">Get In Touch</a>
      </nav>
      <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
