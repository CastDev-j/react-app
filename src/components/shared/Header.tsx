import { FaHome, FaInfoCircle, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router";

export const Header = () => {
  return (
    <header className="bg-neutral-900 p-4">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <h1 className="text-xl font-bold">
          <span className="-tracking-wide">Mi:.</span>
          <span className="font-light tracking-wider text-sm">reactpro</span>
        </h1>
        <nav>
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
  );
};
