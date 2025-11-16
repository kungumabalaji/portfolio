import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      <main
        className={`flex-1 p-8 transition-all duration-300 ${
          isSidebarOpen ? "ml-72" : "ml-0"
        }`}
      >
        {children}
      </main>

      {/* Mobile Sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        className="fixed bottom-8 right-8 p-4 bg-primary text-white rounded-full lg:hidden"
      >
        ☰
      </button>
    </div>
  );
};

export default Layout;
