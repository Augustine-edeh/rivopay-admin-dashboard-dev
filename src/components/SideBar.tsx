"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

const SideBar = () => {
  const pathname = usePathname();

  const sidebarLinks = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: "/icons/dashboard.svg",
      activeIcon: "/icons/dashboard-active.svg",
    },
    {
      label: "Wallet",
      href: "/admin/wallet",
      icon: "/icons/wallet.svg",
      activeIcon: "/icons/wallet-active.svg",
    },
    {
      label: "Assigned Cards",
      href: "/admin/cards",
      icon: "/icons/assigned-cards.svg",
      activeIcon: "/icons/assigned-cards-active.svg",
    },
    {
      label: "Transactions",
      href: "/admin/transactions",
      icon: "/icons/transactions.svg",
      activeIcon: "/icons/transactions-active.svg",
    },
    {
      label: "Merchants",
      href: "/admin/merchants",
      icon: "/icons/merchants.svg",
      activeIcon: "/icons/merchants-active.svg",
    },
    {
      label: "Merchants Request",
      href: "/admin/merchants/request",
      icon: "/icons/merchant-request.svg",
      activeIcon: "/icons/merchant-request-active.svg",
    },
    {
      label: "Drivers",
      href: "/admin/drivers",
      icon: "/icons/drivers.svg",
      activeIcon: "/icons/drivers-active.svg",
    },
    {
      label: "Analytics",
      href: "/admin/analytics",
      icon: "/icons/analytics.svg",
      activeIcon: "/icons/analytics-active.svg",
    },
    {
      label: "Settings",
      href: "/admin/settings",
      icon: "/icons/settings.svg",
      activeIcon: "/icons/settings-active.svg",
    },
    {
      label: "Help and Support",
      href: "/admin/help",
      icon: "/icons/help-and-support.svg",
      activeIcon: "/icons/help-and-support-active.svg",
    },
  ];

  return (
    <aside className="hidden md:flex w-1/6 flex-col bg-darkPurple py-6 text-white space-y-10">
      <div className="mx-10">
        <div className="flex items-center gap-2 mb-1">
          <Image src="/rivo-logo.svg" alt="logo" width={40} height={40} />
          <h1 className="font-bold text-3xl">rivo</h1>
        </div>
        <p className="text-sm">Rapid Transport System.</p>
      </div>

      <nav className="space-y-2 px-4 flex-grow">
        {sidebarLinks.map(({ label, href, icon, activeIcon }) => {
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
              <Image
                src={isActive ? activeIcon : icon}
                alt={label}
                width={20}
                height={20}
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button at Bottom */}
      <div className="px-4 mt-auto">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-white hover:bg-white hover:text-darkPurple"
        >
          <Image src="/icons/logout.svg" alt="logout" width={20} height={20} />
          Log out
        </Button>
      </div>
    </aside>
  );
};

export default SideBar;
