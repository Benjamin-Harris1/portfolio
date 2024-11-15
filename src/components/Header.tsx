import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  // Active link style
  const getLinkStyle = (path: string) => {
    const isActive = location.pathname === path;
    return `transition-all duration-300 hover:text-blue-400 ${
      isActive ? "text-blue-400 font-semibold" : ""
    }`;
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900 shadow-xl border-b border-gray-800">
      <div className={`container flex items-center justify-between ${isMenuOpen ? "" : "px-6 py-8"} md:px-6 md:py-8 mx-auto`}>
        <div className={`${isMenuOpen ? "hidden" : "flex"} md:flex items-center space-x-4`}>
          <a 
            href="https://github.com/Benjamin-Harris1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            onClick={closeMenu}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-elias-harris-aba59a2a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            onClick={closeMenu}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="mailto:beha1503@gmail.com"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            onClick={closeMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        <nav 
          className={`${
            isMenuOpen 
              ? "absolute top-full left-0 right-0 bg-gray-900 p-4 shadow-lg border-b border-gray-800" 
              : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-12 text-white">
            <li>
              <NavLink to="/" className={getLinkStyle("/")} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={getLinkStyle("/projects")} onClick={closeMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={getLinkStyle("/about")} onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={getLinkStyle("/contact")} onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          className="absolute md:hidden top-6 right-6 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 transition-transform duration-200 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};