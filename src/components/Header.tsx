"use client";

import { Bell, ChevronLeft, ChevronRight } from "lucide-react";
import UserAvatar from "./UserAvatar";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";

import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import { Button } from "./ui/button";

const Header = () => {
  const title = usePageTitleStore((state) => state.title);

  return (
    // <header className="h-16 flex items-center gap-28 bg-blue-600">
    //   <h1 className="text-xl font-bold tracking-wide">{title}</h1>

    //   <div className="flex-1 flex justify-between bg-blue-400">
    //     <div className="relative hidden md:flex items-center bg-green-300 w-full max-w-2xl">
    //       <Input
    //         className="rounded-4xl pl-14 bg-dashboardLightGrayBG hover:bg-dashboardCardGray"
    //         id="search"
    //         placeholder="Search..."
    //       />
    //       <Label htmlFor="search" className="absolute left-3.5">
    //         <Search className="text-separatorGray" />
    //       </Label>
    //     </div>

    //     <div className="flex items-center ml-auto gap-10 bg-orange-400">
    //       <div className="grid place-content-center bg-dashboardLightGrayBG hover:bg-dashboardCardGray rounded-full size-10">
    //         <Bell />
    //         <p className="sr-only">Notifications</p>
    //       </div>

    //       <div className="flex items-center gap-2.5 bg-dashboardLightGrayBG hover:bg-dashboardCardGray rounded-3xl px-4 py-1">
    //         <UserAvatar />
    //         <p>Admin</p>
    //       </div>
    //     </div>
    //   </div>
    // </header>

    <header className="h-16 flex justify-between items-center bg-blue-600">
      <h1 className="text-xl font-bold tracking-wide capitalize">{title}</h1>

      <div className="flex justify-center items-center gap-10 bg-dashboardLightGrayBG px-5 py-3 rounded-lg">
        <div className="bg-transparent hover:bg-[#B3B3B35C] border border-separatorGray hover:border-transparent rounded-full transition-colors duration-150">
          <ChevronLeft color="#737373" />
        </div>
        <p>July 2025</p>

        <div className="bg-transparent hover:bg-[#B3B3B35C] border border-separatorGray hover:border-transparent rounded-full transition-colors duration-150">
          <ChevronRight />
        </div>
      </div>

      <div className="relative flex items-center bg-red-500 dashboardLightGrayBG hover:bg-dashboardCardGray rounded-full">
        <UserAvatar className="size-9" />
        <Bell
          fill="#BF2B2B"
          color="#BF2B2B"
          size={10}
          className="absolute top-0 right-0"
        />
      </div>
    </header>
  );
};

export default Header;
