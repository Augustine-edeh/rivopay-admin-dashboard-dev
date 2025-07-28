import Image from "next/image";
import type { ReactNode } from "react";

// import { motion } from "framer-motion";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-darkPurple flex justify-between items-center px-8 py-2">
        <div className="flex items-center gap-2">
          <Image
            src="/rivo-logo.svg"
            alt="Rivo Logo"
            width={40}
            height={40}
            className=""
            priority
          />
          <div className="font-bold text-white text-3xl">rivo</div>
        </div>

        {/* Pulsing element */}
        <div className="size-12 rounded-full bg-gray-50" />

        {/* <motion.div
          className="size-12 rounded-full bg-gray-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div> */}
      </header>

      <main className="flex-1 flex flex-col justify-center items-center w-full p-6">
        {children}
      </main>

      <footer className="bg-lightPurple px-8 py-6 space-y-[7px]">
        <p className="font-bold">rivo</p>

        <div>
          <p>Super Admin Panel. You’re in control. Manage users, monitor</p>
          <p> performance, and keep operations seamless from your dashboard.</p>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
