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
    <main className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-white to-slate-100 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
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
          className="text-gray-500 text-lg md:text-xl mb-6"
        >
          {messages[currentIndex]}
        </motion.p>
      </AnimatePresence>

      <span className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-600">
        Coming Soon
      </span>
    </main>
  );
}
