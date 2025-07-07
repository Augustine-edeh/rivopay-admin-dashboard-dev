import { Bell, Search } from "lucide-react";
import UserAvatar from "./UserAvatar";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="h-16 flex items-center gap-28 bg-blue-600">
      <h1 className="text-xl font-bold tracking-wide">Welcome!</h1>

      <div className="flex-1 flex justify-between bg-blue-400">
        <div className="relative hidden md:flex items-center bg-green-300 w-full max-w-2xl">
          <Input
            className="rounded-4xl pl-14"
            id="search"
            placeholder="Search..."
          />
          <Label htmlFor="search" className="absolute left-3.5">
            <Search className="text-separatorGray" />
          </Label>
        </div>

        <div className="flex items-center ml-auto gap-10 bg-orange-400">
          <div className="grid place-content-center bg-gray-400 rounded-full size-10">
            <Bell />
            <p className="sr-only">Notifications</p>
          </div>

          <div className="flex items-center gap-2.5 bg-gray-400 rounded-3xl px-2 py-1.5">
            <UserAvatar />
            <p>Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
