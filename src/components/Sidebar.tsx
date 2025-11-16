import { NavLink } from "./NavLink";
import profilePhoto from "@public/assets/profile.png";

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => {
  const navItems = [
    { path: "/", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/projects", label: "Projects" },
    { path: "/academics", label: "Academics" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border flex flex-col z-50 transition-all duration-300 ${
        isOpen ? "w-72" : "w-0"
      } lg:w-72`}
    >
      {/* Profile Section */}
      <div className={`p-8 text-center border-b border-sidebar-border ${isOpen ? "block" : "hidden"}`}>
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20">
          <img src={profilePhoto} alt="Kunguma Balaji Nagarajan" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-xl font-bold text-sidebar-foreground mb-1">
          Kunguma Balaji Nagarajan
        </h2>
        <p className="text-sm text-primary font-medium">AI Engineer & Researcher</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200"
              >
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Info */}
      <div className={`p-6 border-t border-sidebar-border space-y-3 ${isOpen ? "block" : "hidden"}`}>
        <a
          href="mailto:kungumabalaji1616@gmail.com"
          className="flex items-center gap-3 text-sm text-sidebar-foreground/70 hover:text-primary transition-colors"
        >
          <span className="truncate">kungumabalaji1616@gmail.com</span>
        </a>
        <a
          href="tel:+447424903788"
          className="flex items-center gap-3 text-sm text-sidebar-foreground/70 hover:text-primary transition-colors"
        >
          <span>+44 7424903788</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
