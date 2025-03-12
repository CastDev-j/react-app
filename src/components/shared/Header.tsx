import { NavLink } from "react-router";

export const Header = () => {
  return (
    <header className="bg-neutral-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi aplicación</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "underline" : "")}
                >
                  Inicio
                </NavLink>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "underline" : "")}
                >
                  Acerca de
                </NavLink>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <NavLink
                  to="/users"
                  className={({ isActive }) => (isActive ? "underline" : "")}
                >
                  Usuarios
                </NavLink>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
