"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  const sidebarLinks = [
    { label: "Dashboard", href: "/admin", icon: "/icons/dashboard.svg" },
    {
      label: "Transactions",
      href: "/admin/transactions",
      icon: "/icons/transactions.svg",
    },
    {
      label: "Cards Management",
      href: "/admin/cards",
      icon: "/icons/card-management.svg",
    },
    { label: "Users", href: "/admin/users", icon: "/icons/users.svg" },
    { label: "Booking", href: "/admin/booking", icon: "/icons/bookings.svg" },
    {
      label: "Merchants",
      href: "/admin/merchants",
      icon: "/icons/merchants.svg",
    },
    { label: "Drivers", href: "/admin/drivers", icon: "/icons/drivers.svg" },
    { label: "Overview", href: "/admin/overview", icon: "/icons/overview.svg" },
    {
      label: "Analytics",
      href: "/admin/analytics",
      icon: "/icons/analytics.svg",
    },
    { label: "Settings", href: "/admin/settings", icon: "/icons/settings.svg" },
    {
      label: "Help and Support",
      href: "/admin/help",
      icon: "/icons/help-and-support.svg",
    },
  ];

  return (
    <aside className="hidden md:flex w-1/6 flex-col bg-darkPurple py-6 text-white space-y-10">
      <div className="mx-10">
        <h1 className="font-bold text-3xl">rivo</h1>
        <p className="text-sm">Rapid Transport System.</p>
      </div>

      <nav className="space-y-2 px-4">
        {sidebarLinks.map(({ label, href, icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 p-2 rounded-3xl transition-colors
                ${
                  isActive
                    ? "bg-white text-darkPurple"
                    : "text-white hover:bg-white hover:text-darkPurple"
                }`}
            >
              <Image src={icon} alt={label} width={20} height={20} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4">
        <button className="w-full flex items-center gap-3 p-2 rounded bg-gray-300 hover:bg-red-500/10 text-red-400 hover:text-white transition-colors">
          <Image src="/icons/logout.svg" alt="logout" width={20} height={20} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
