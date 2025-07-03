import type { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-darkPurple flex justify-between items-center px-8 py-2">
        <div className="font-bold text-white text-3xl">rivo</div>

        <div className="size-12 rounded-full bg-gray-50" />
      </header>

      <main className="flex-1 flex flex-col justify-center items-center w-full">
        {children}
      </main>

      <footer className="bg-lightPurple px-8 py-6 space-y-[7px]">
        <p className="font-bold">rivo</p>

        <div>
          <p>Super Admin Panel. You’re in control. Manage users, monitor</p>
          <p> performance, and keep operations seamless from your dashboard.</p>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
