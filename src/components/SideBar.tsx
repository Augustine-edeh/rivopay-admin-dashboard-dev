import Image from "next/image";
import Link from "next/link";
// import { sidebarLinks } from "@/constants/sidebar-links"; // Update this path as needed

const SideBar = () => {
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

      <nav className="flex- 1 space-y-2 px-4">
        {sidebarLinks.map(({ label, href, icon }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 p-2 rounded hover:bg-primary/10 transition-colors"
          >
            <Image
              src={icon}
              alt={`${label} icon`}
              width={5}
              height={5}
              className="w-5 h-5"
            />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      {/* Logout button pinned to bottom */}
      <div className="bg-amber-200 px-4">
        <button className="w-full p-2 rounded hover:bg-red-500/10 text-red-400 hover:text-red-500 transition-colors">
          Log out
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
