import React from "react";

import { Moon, Sun} from "lucide-react";

export const Navbar = () => {
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 `}>
      <div className="container mx-auto px-4 h-16 md:h-20">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <a href="#home" className="font-poppins font-bold text-xl md:text-2xl">
              Portfolio
            </a>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className={`nav-link text-sm font-medium`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              
            </button>
          </div>
        </div>
      </div>

    </header>
  );
};
