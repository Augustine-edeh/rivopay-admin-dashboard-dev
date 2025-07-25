"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

const messages = [
  "Redefining urban mobility...",
  "Powering financial transactions...",
  "One Tap at a time 🚀",
];

const AdminComingSoon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center bg-[#F5F3FF] px-4 text-center overflow-hidden">
      {/* Top-left floating blob */}
      <motion.svg
        className="absolute top-[-150px] left-[-150px] w-[500px] md:w-[700px] opacity-20 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <path
          fill="#7B48EF"
          d="M49.9,-61.3C64.2,-49.5,74.7,-32.3,75.3,-15.7C75.9,0.9,66.5,16.9,56.4,30.8C46.3,44.7,35.5,56.4,21.6,64.7C7.8,73,-9.2,78,-25.2,72.3C-41.1,66.6,-56.1,50.3,-65.7,32.5C-75.3,14.7,-79.5,-4.7,-72.4,-20.3C-65.3,-35.9,-46.9,-47.7,-30.2,-58.2C-13.5,-68.7,1.5,-77.8,17.7,-76.4C33.9,-75.1,50.3,-63.1,49.9,-61.3Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      {/* Bottom-right floating blob */}
      <motion.svg
        className="absolute bottom-[-150px] right-[-150px] w-[400px] md:w-[600px] opacity-10 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <path
          fill="#7B48EF"
          d="M51.4,-59.8C66.1,-50.7,76.6,-33.4,74.9,-18.2C73.2,-2.9,59.2,10.4,48.6,24.5C38,38.6,30.8,53.5,18.5,58.5C6.1,63.5,-11.3,58.6,-25.9,50.6C-40.5,42.6,-52.4,31.5,-60.1,16.9C-67.8,2.3,-71.2,-15,-65.2,-29.1C-59.2,-43.2,-43.8,-54.1,-28,-61.6C-12.2,-69.1,3.9,-73.1,18.5,-68.9C33.1,-64.6,46.2,-52.2,51.4,-59.8Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      {/* Thematic icon (Finance/Tech) */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 z-10"
      >
        <Image
          src="/rivo-logo.svg" // from public dir
          alt="Rivo Logo"
          width={80}
          height={80}
          className="mx-auto"
          priority
        />
      </motion.div>

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
};

export default AdminComingSoon;
