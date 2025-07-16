"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Bell, ChevronLeft, ChevronRight } from "lucide-react";
import UserAvatar from "./UserAvatar";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

const notifications = Array(5).fill({
  name: "Adekanye Similoluwa",
  message:
    "Can we schedule a meeting for 2pm tomorrow via zoom. Please do confirm your availability.",
  time: "2h ago",
});

const Header = () => {
  const title = usePageTitleStore((state) => state.title);

  return (
    <header className="h-16 flex justify-between items-center bg-blue-600">
      <h1 className="text-xl font-bold tracking-wide capitalize">{title}</h1>

      <div className="flex justify-center items-center gap-10 bg-dashboardLightGrayBG px-5 py-3 rounded-lg">
        <div className="hover:bg-[#B3B3B35C] border border-separatorGray hover:border-transparent rounded-full transition-colors duration-150">
          <ChevronLeft color="#737373" />
        </div>
        <p>July 2025</p>
        <div className="hover:bg-[#B3B3B35C] border border-separatorGray hover:border-transparent rounded-full transition-colors duration-150">
          <ChevronRight />
        </div>
      </div>

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
          <div className="px-4 py-3 border-b text-sm font-medium flex justify-between items-center">
            <span>Notification</span>
            <button className="text-xs text-muted-foreground hover:underline">
              Mark all as read
            </button>
          </div>

          {/* NOTE: use actual bg-color for 'today' element */}
          <p className="px-4 py-3 bg-red-400">Today</p>

          <div className="max-h-72 overflow-y-auto divide-y">
            {notifications.map((n, idx) => (
              <div
                key={idx}
                className={`flex gap-3 p-4 hover:bg-muted ${
                  idx === 1 || idx === 3 ? "bg-[#553A6B33]" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-muted-foreground/20 flex items-center justify-center text-muted-foreground">
                  <UserAvatar className="size-8" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">{n.name}</p>
                  <p className="text-muted-foreground text-xs leading-snug">
                    {n.message}
                  </p>
                </div>
                <span className="ml-auto text-xs text-muted-foreground whitespace-nowrap">
                  {n.time}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center border-t">
            <button className="w-full text-sm py-2 text-muted-foreground hover:underline">
              View all notifications
            </button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
