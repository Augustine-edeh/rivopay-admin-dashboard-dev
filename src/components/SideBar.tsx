import Link from "next/link";
// import { sidebarLinks } from "@/constants/sidebar-links"; // Update this path as needed

const SideBar = () => {
  const sidebarLinks = [
    { label: "Dashboard", href: "/admin" },
    { label: "Transactions", href: "/admin/transactions" },
    { label: "Cards Management", href: "/admin/cards" },
    { label: "Users", href: "/admin/users" },
    { label: "Booking", href: "/admin/booking" },
    { label: "Merchants", href: "/admin/merchants" },
    { label: "Drivers", href: "/admin/drivers" },
    { label: "Overview", href: "/admin/overview" },
    { label: "Analytics", href: "/admin/analytics" },
    { label: "Settings", href: "/admin/settings" },
    { label: "Help and Support", href: "/admin/help" },
  ];

  return (
    <aside className="hidden md:flex w-1/6 flex-col bg-darkPurple py-6 text-white space-y-10">
      <div className="mx-10">
        <h1 className="font-bold text-3xl">rivo</h1>
        <p className="text-sm">Rapid Transport System.</p>
      </div>

      <nav className="flex- 1 space-y-2 px-4">
        {sidebarLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="block p-2 rounded hover:bg-primary/10 transition-colors"
          >
            {label}
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
