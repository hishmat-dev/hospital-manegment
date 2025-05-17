import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { menu } from "../data/menu";

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const getRoutePath = (parentTitle, childTitle) => {
    const parent = parentTitle.toLowerCase().replace(/ /g, "-");
    const child = childTitle.toLowerCase().replace(/ & /g, "-and-").replace(/ /g, "-");
    return `/${parent}/${child}`;
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X /> : <Menu />}
      </button>

      {/* Overlay on mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-white text-gray-900 p-4 overflow-y-auto transform transition-transform duration-300 ease-in-out
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex md:flex-col scrollbar-hide`}
      >

        <nav className="space-y-2">
          {menu.map(({ title, icon, children, path }) => (
            <div key={title}>
              {children ? (
                <div
                  onClick={() => toggleMenu(title)}
                  className="flex items-center justify-between cursor-pointer p-2 rounded hover:bg-gray-200 transition"
                >
                  <div className="flex items-center gap-3">
                    {icon}
                    <span>{title}</span>
                  </div>
                  {openMenus[title] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </div>
              ) : (
                <Link
                  to={path}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 transition"
                >
                  {icon}
                  <span>{title}</span>
                </Link>
              )}

              {children && openMenus[title] && (
                <div className="ml-6 mt-1 space-y-1 text-sm">
                  {children.map((child) => (
                    <Link
                      key={child}
                      to={getRoutePath(title, child)}
                      onClick={() => setMobileOpen(false)}
                      className="block cursor-pointer p-1 hover:bg-gray-300 rounded"
                    >
                      {child}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
