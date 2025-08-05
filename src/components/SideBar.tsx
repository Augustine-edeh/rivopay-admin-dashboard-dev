"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants/sidebarLinks";

import LogoutButton from "./side-bar/LogoutButton";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-1/6 flex-col bg-darkPurple py-6 text-white space-y-10">
      {/* Logo */}
      <div className="mx-10">
        <div className="flex items-center gap-2 mb-1">
          <Image src="/rivo-logo.svg" alt="logo" width={40} height={40} />
          <h1 className="font-bold text-3xl">rivo</h1>
        </div>
        <p className="text-sm">Rapid Transport System.</p>
      </div>

      {/* Nav Links */}
      <nav className="space-y-2 px-4 flex-grow">
        {sidebarLinks.map(({ label, href, icon, activeIcon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className={`group flex items-center gap-3 p-2 rounded-3xl transition-colors
              ${
                isActive
                  ? "bg-white text-darkPurple"
                  : "text-white hover:bg-white hover:text-darkPurple focus:bg-white focus:text-darkPurple"
              }`}
            >
              <div className="relative size-5">
                {/* Inactive icon */}
                <Image
                  src={icon}
                  alt={`${label} icon`}
                  fill
                  className={`transition-opacity duration-200 ${
                    isActive
                      ? "opacity-0"
                      : "group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0"
                  }`}
                />
                {/* Active icon */}
                <Image
                  src={activeIcon}
                  alt={`${label} active icon`}
                  fill
                  className={`transition-opacity duration-200 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100"
                  }`}
                />
              </div>
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <LogoutButton />
    </aside>
  );
};

export default SideBar;
