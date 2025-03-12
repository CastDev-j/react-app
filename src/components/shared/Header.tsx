import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { navLinks } from "../../config";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Cerrar el menú cuando la ubicación cambie
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <header className="bg-neutral-900 p-4">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <h1 className="text-xl font-bold">
            <span className="-tracking-wide">Mi:.</span>
            <span className="font-light tracking-wider text-sm">reactpro</span>
          </h1>
          <button
            className="text-neutral-100 sm:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <nav className="hidden sm:flex">
            <ul className="flex space-x-4 items-center justify-center">
              {navLinks.map(({ to, Icon, className, name }) => (
                <li key={to}>
                  <NavLink to={to} className={className}>
                    <Icon /> <span>{name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <div
        className={`sm:hidden bg-neutral-900 p-4 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav>
          <ul className="flex flex-col space-y-2 items-center justify-center">
            {navLinks.map(({ to, Icon, className, name }) => (
              <li key={to}>
                <NavLink to={to} className={className}>
                  <Icon /> <span>{name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
