"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import type { ReactNode } from "react";
import {
  HIDE_SIDEBAR_ROUTES,
  HIDE_HEADER_ROUTES,
} from "@/constants/adminLayoutRestrictions";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const shouldHideSidebar = HIDE_SIDEBAR_ROUTES.includes(pathname);
  const shouldHideHeader = HIDE_HEADER_ROUTES.includes(pathname);

  return (
    <div className="h-screen flex bg-muted text-foreground overflow-hidden">
      {/* Conditionally render sidebar */}
      {!shouldHideSidebar && <SideBar />}

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col ${
          shouldHideSidebar ? "w-full px-10" : "w-5/6 bg-white"
        }`}
      >
        {/* Conditionally render Header */}
        {!shouldHideHeader && <Header />}

        <main className="relative flex-1 px-7 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
