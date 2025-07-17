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

const Header = () => {
  const title = usePageTitleStore((state) => state.title);

  return (
    <header className="h-16 flex justify-between items-center bg-blue-600">
      <h1 className="text-xl font-bold tracking-wide capitalize">{title}</h1>

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
    </header>
  );
};

export default Header;
