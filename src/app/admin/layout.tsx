import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-muted text-foreground">
      {/* NOTE: Suggestion: set height to h-screen and give overflow-hidden to overall parent container  */}

      {/* SideBar */}
      <SideBar />

      {/* Main Content */}
      {/* NOTE: consider having a p-7 instead of px-7 for the main content */}
      <main className="flex-1 flex flex-col w-5/6 px-7 overflow-y-auto bg-red-500">
        <Header />

        {children}
      </main>
    </div>
  );
}
