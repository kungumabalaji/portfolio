import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Sidebar />
      <main className="ml-72 min-h-screen p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
