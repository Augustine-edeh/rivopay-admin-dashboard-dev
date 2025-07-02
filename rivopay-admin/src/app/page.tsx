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
    <main className="relative h-screen w-full flex flex-col items-center justify-center bg-[#F5F3FF] px-4 text-center overflow-hidden">
      {/* Background SVG blob */}
      <svg
        className="absolute top-[-100px] left-[-100px] w-[500px] md:w-[700px] opacity-20 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#7B48EF"
          d="M49.9,-61.3C64.2,-49.5,74.7,-32.3,75.3,-15.7C75.9,0.9,66.5,16.9,56.4,30.8C46.3,44.7,35.5,56.4,21.6,64.7C7.8,73,-9.2,78,-25.2,72.3C-41.1,66.6,-56.1,50.3,-65.7,32.5C-75.3,14.7,-79.5,-4.7,-72.4,-20.3C-65.3,-35.9,-46.9,-47.7,-30.2,-58.2C-13.5,-68.7,1.5,-77.8,17.7,-76.4C33.9,-75.1,50.3,-63.1,49.9,-61.3Z"
          transform="translate(100 100)"
        />
      </svg>

      <h1 className="text-4xl md:text-5xl font-bold text-[#7B48EF] mb-4 z-10">
        Rivo Admin Dashboard
      </h1>

      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.5 }}
          className="text-[#444] text-lg md:text-xl mb-6 z-10"
        >
          {messages[currentIndex]}
        </motion.p>
      </AnimatePresence>

      <span className="px-5 py-2 rounded-full text-sm font-medium bg-[#7B48EF] text-white shadow-md z-10">
        Coming Soon
      </span>
    </main>
  );
}
