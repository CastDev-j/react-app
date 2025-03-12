import { FaHome, FaInfoCircle, FaUsers, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router";
import { useState, useEffect } from "react";

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
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold transition-all py-3 px-2 flex items-center gap-2"
                      : "hover:text-neutral-100 transition-all py-3 px-2 flex items-center gap-2 text-neutral-100/50"
                  }
                >
                  <FaHome /> <span>Inicio</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold transition-all py-3 px-2 flex items-center gap-2"
                      : "hover:text-neutral-100 transition-all py-3 px-2 flex items-center gap-2 text-neutral-100/50"
                  }
                >
                  <FaInfoCircle /> <span>Acerca de</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold transition-all py-3 px-2 flex items-center gap-2"
                      : "hover:text-neutral-100 transition-all py-3 px-2 flex items-center gap-2 text-neutral-100/50"
                  }
                >
                  <FaUsers /> <span>Usuarios</span>
                </NavLink>
              </li>
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
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold transition-all py-3 px-2 flex items-center gap-2"
                    : "hover:text-neutral-100 transition-all py-3 px-2 flex items-center gap-2 text-neutral-100/50"
                }
              >
                <FaHome /> <span>Inicio</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold transition-all py-3 px-2 flex items-center gap-2"
                    : "hover:text-neutral-100 transition-all py-3 px-2 flex items-center gap-2 text-neutral-100/50"
                }
              >
                <FaInfoCircle /> <span>Acerca de</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold transition-all py-3 px-2 flex items-center gap-2"
                    : "hover:text-neutral-100 transition-all py-3 px-2 flex items-center gap-2 text-neutral-100/50"
                }
              >
                <FaUsers /> <span>Usuarios</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};