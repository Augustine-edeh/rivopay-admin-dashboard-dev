const SideBar = () => {
  return (
    <aside className="hidden md:flex w-1/6 flex-col bg-darkPurple shadow-sm p-5 space-y-4">
      <nav className="space-y-2">
        <a href="/admin" className="block p-2 rounded hover:bg-primary/10">
          Dashboard
        </a>
        <a
          href="/admin/users"
          className="block p-2 rounded hover:bg-primary/10"
        >
          Users
        </a>
        <a
          href="/admin/settings"
          className="block p-2 rounded hover:bg-primary/10"
        >
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default SideBar;
