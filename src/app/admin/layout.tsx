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
  const hideHeaderRoutes = [
    "/admin/analytics/total-revenue",
    "/admin/settings",
  ];

  const shouldHideSidebar = hideSidebarRoutes.includes(pathname);

  const shouldHideHeader = hideHeaderRoutes.includes(pathname);

  return (
    <div className="h-screen flex bg-muted text-foreground">
      {/* NOTE: Suggestion: set height to h-screen and give overflow-hidden to overall parent container  */}

      {/* Conditionally render sidebar */}
      {!shouldHideSidebar && <SideBar />}

      {/* Main Content */}
      {/* NOTE: consider having a p-7 instead of px-7 for the main content */}
      <div
        className={`
          flex-1 flex flex-col
          ${shouldHideSidebar ? "w-full px-10" : "w-5/6 bg-white"}
        `}
      >
        {/* Conditionally render Header */}
        {!shouldHideHeader && <Header />}

        <main className="relative flex-1 bg- red-500 px-7 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
