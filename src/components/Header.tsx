"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Bell } from "lucide-react";
import UserAvatar from "./UserAvatar";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import NotificationPanel from "./header/NotificationPanel";
// import Image from "next/image";

const Header = () => {
  const title = usePageTitleStore((state) => state.title);

  return (
    <header className="sticky top-0 px-7 py-3 flex items-center bg-blue-600">
      <h1 className="text-xl font-bold tracking-wide capitalize">{title}</h1>

      <div className="flex items-center gap-4 ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative flex items-center cursor-pointer bg-dashboardLightGrayBG hover:bg-dashboardCardGray rounded-full p-1.5">
              <UserAvatar className="size-9" />
              <Bell
                fill="#BF2B2B"
                color="#BF2B2B"
                size={10}
                className="absolute top-0 right-0"
              />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-[350px] p-0 shadow-lg rounded-lg"
          >
            <NotificationPanel />
          </DropdownMenuContent>
        </DropdownMenu>

        {/* <button className="w-full flex items-center gap-2 p-2 rounded-3xl text-muted-foreground hover:underline hover:text-darkPurple transition-colors">
          <Image src="/icons/logout.svg" alt="logout" width={20} height={20} />
          <span>Log out</span>
        </button> */}
      </div>
    </header>
  );
};

export default Header;
