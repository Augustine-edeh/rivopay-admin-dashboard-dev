"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import type { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  // Defined routes that shouldn't have a sidebar
  const hideSidebarRoutes = ["/admin/analytics/total-revenue"];

  // Defined routes that shouldn't have a Header
  const hideHeaderRoutes = ["/admin/analytics/total-revenue"];

  const shouldHideSidebar = hideSidebarRoutes.includes(pathname);

  const shouldHideHeader = hideHeaderRoutes.includes(pathname);

  return (
    <div className="min-h-screen flex bg-muted text-foreground">
      {/* NOTE: Suggestion: set height to h-screen and give overflow-hidden to overall parent container  */}

      {/* Conditionally render sidebar */}
      {!shouldHideSidebar && <SideBar />}

      {/* Main Content */}
      {/* NOTE: consider having a p-7 instead of px-7 for the main content */}
      <main
        className={`
          flex-1 flex flex-col overflow-y-auto
          ${shouldHideSidebar ? "w-full px-10" : "w-5/6 px-7 bg-red-500"}
        `}
      >
        {/* Conditionally render Header */}
        {!shouldHideHeader && <Header />}

        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
