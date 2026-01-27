import { motion } from "framer-motion";
import { useState } from "react";

// Animated Gradient Card Demo
export function AnimatedGradientCardDemo() {
  return (
    <motion.div
      className="relative p-6 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 shadow-lg"
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="text-white font-bold">Hello World!</h3>
      <p className="text-white/80">Hover to see the gradient animation</p>
    </motion.div>
  );
}

// Modern Input Field Demo
export function ModernInputDemo() {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(!!value)}
        className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors bg-transparent"
        placeholder="Type something..."
      />
      <label
        className={`absolute left-4 transition-all duration-200 ${
          isFocused || value ? "top-0 text-xs text-blue-500" : "top-2 text-gray-500"
        }`}
      >
        Floating Label
      </label>
    </div>
  );
}

// Scroll-Reveal Section Demo
export function ScrollRevealDemo() {
  const [, inView] = useState(true); // Simplified for demo

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg shadow-md"
    >
      <h3 className="text-blue-800 dark:text-blue-200 font-bold">Scroll Reveal Demo</h3>
      <p className="text-blue-600 dark:text-blue-300">This animates into view when scrolled!</p>
    </motion.div>
  );
}
