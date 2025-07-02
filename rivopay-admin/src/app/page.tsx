"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Redefining urban mobility...",
  "Powering financial transactions...",
  "One Tap at a time 🚀",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-[#F5F3FF] px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-[#7B48EF] mb-4">
        Rivo Admin Dashboard
      </h1>

      {/* Animated Text (no height limit) */}
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.5 }}
          className="text-[#444] text-lg md:text-xl mb-6"
        >
          {messages[currentIndex]}
        </motion.p>
      </AnimatePresence>

      <span className="px-5 py-2 rounded-full text-sm font-medium bg-[#7B48EF] text-white shadow-md">
        Coming Soon
      </span>
    </main>
  );
}
