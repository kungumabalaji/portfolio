import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col md:flex-row">
      {/* Sidebar: Will be fixed on larger screens */}
      <Sidebar />

      {/* Main content: Takes full width on mobile and shifts right on larger screens */}
      <main className="flex-1 p-4 sm:p-6 md:ml-72">
        {children}
      </main>
    </div>
  );
};

export default Layout;
