import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bell, Search } from "lucide-react";
import type { ReactNode } from "react";
// import "@/styles/globals.css"; // ensure your global styles are loaded

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-muted text-foreground">
      {/* NOTE: remember to remove think Top Navbar */}

      {/* Sidebar */}
      <aside className="hidden md:flex w-1/6 flex-col bg-white border-r shadow-sm p-4 space-y-4">
        <nav className="space-y-2">
          <a href="/admin" className="block p-2 rounded hover:bg-primary/10">
            Dashboard
          </a>
          <a
            href="/admin/users"
            className="block p-2 rounded hover:bg-primary/10"
          >
            Users
          </a>
          <a
            href="/admin/settings"
            className="block p-2 rounded hover:bg-primary/10"
          >
            Settings
          </a>
          {/* Add more links as needed */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-5/6 p-7 overflow-y-auto bg-red-500">
        <header className="h-16 flex items-center gap-28 bg-blue-600">
          <h1 className="text-xl font-bold tracking-wide">Welcome!</h1>

          <div className="flex-1 flex justify-between bg-blue-400">
            <div className="relative flex items-center bg-green-300 w-full max-w-2xl">
              <Input className="rounded-4xl pl-14" id="search" />
              <Label htmlFor="search" className="absolute left-3.5">
                <Search className="text-separatorGray" />
              </Label>
            </div>

            <div className="flex gap-10 bg-orange-400">
              <Bell />
              <p>avatar</p>
            </div>
          </div>
        </header>
        {children}
      </main>

      {/* NOTE: suggest Optional Footer to designer */}
      {/* <footer className="bg-background py-4 text-sm text-center text-muted-foreground border-t">
        © {new Date().getFullYear()} Rivo Admin Dashboard. All rights reserved.
      </footer> */}
    </div>
  );
}
