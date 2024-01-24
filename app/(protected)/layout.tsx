import React from "react";
import { Navbar } from "./_components/navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-full overflow-auto py-8 flex flex-col gap-y-10 items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 scrollbar-hide">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
