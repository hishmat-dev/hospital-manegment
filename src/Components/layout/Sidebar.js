import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { menu } from "../data/menu"

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({})

  function toggleMenu(title) {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  // Function to convert title to route path
  const getRoutePath = (parentTitle, childTitle) => {
    const parent = parentTitle.toLowerCase().replace(/ /g, "-")
    const child = childTitle.toLowerCase().replace(/ & /g, "-and-").replace(/ /g, "-")
    return `/${parent}/${child}`
  }

  return (
    <aside className="w-full h-screen bg-white text-gray-900 p-4 space-y-4 overflow-y-auto flex flex-col">
      
      <nav className="w-full space-y-1">
        {menu.map(({ title, icon, children, path }) => (
          <div key={title} className="w-full">
            {children ? (
              <div
                onClick={() => toggleMenu(title)}
                className="flex items-center justify-between cursor-pointer p-2 rounded hover:bg-gray-200 transition"
              >
                <div className="flex items-center gap-3">
                  {icon}
                  <span className="text-medium">{title}</span>
                </div>
                <span className="ml-auto">
                  {openMenus[title] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </span>
              </div>
            ) : (
              <Link to={path} className="flex items-center gap-3 p-2 rounded hover:bg-gray-300 transition">
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
  )
}
