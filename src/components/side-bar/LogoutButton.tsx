import { Button } from "../ui/button";
import Image from "next/image";

const LogoutButton = () => {
  return (
    <div className="border-t border-white/20 pt-6 px-4 mt-auto">
      <Button
        variant="ghost"
        title="Log out"
        className="group w-full justify-start gap-3 text-red-400 hover:bg-red-50 hover:text-red-700 focus:bg-red-50 focus:text-red-700 transition-colors"
      >
        <div className="relative size-5">
          {/* Default logout icon */}
          <Image
            src="/icons/logout.svg"
            alt="logout"
            fill
            className="transition-opacity duration-200 group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0"
          />
          {/* Active logout icon */}
          <Image
            src="/icons/logout-active.svg"
            alt="logout active"
            fill
            className="opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100"
          />
        </div>
        Log out
      </Button>
    </div>
  );
};

export default LogoutButton;
