
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const menu = [
  { path: "#/", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#projects", label: "Projects" },
  { path: "#/contact", label: "Contact" },
];

export default function NavigationChip() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-6 left-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-full shadow-lg shadow-black/10 border border-gray-200 dark:border-neutral-800"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-center gap-1">
            <div className={`h-0.5 w-5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`h-0.5 w-5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`h-0.5 w-5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed top-0 right-0 z-50 h-full w-64 bg-white dark:bg-neutral-900 shadow-xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 pt-20">
          <div className="flex flex-col gap-2">
            {menu.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                {item.label}
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 text-left"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
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
            <a
              key={item.path}
              href={item.path}
              className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              {item.label}
            </a>
          ))}
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
            aria-label="Toggle theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </>
  );
}