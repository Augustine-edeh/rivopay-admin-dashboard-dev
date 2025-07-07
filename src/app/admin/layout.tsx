import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-muted text-foreground">
      {/* NOTE: remember to remove think Top Navbar */}

      {/* SideBar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 w-5/6 p-7 overflow-y-auto bg-red-500">
        <Header />

        {children}
      </main>
    </div>
  );
}
