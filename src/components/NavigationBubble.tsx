import { NavLink } from "react-router-dom";

const menu = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export default function NavigationChip() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-2
          px-4 py-2
          bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md
          rounded-full
          shadow-lg shadow-black/10
          border border-gray-200 dark:border-neutral-800
        "
      >
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              [
                "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                // Active tab styling
                isActive
                  ? "dark:text-green-600"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
              ].join(" ")
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}