import { NavLink } from "react-router";
import { footerLinks, routes } from "../../config";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 p-4">
      <div className="w-full mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="text-center md:text-left">
          <span className="text-sm text-white/60">
            © 2025{" "}
            <a href="/" className="hover:underline">
              Mi Aplicación Sección 3
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <ul className="flex flex-wrap justify-center md:justify-start items-center text-sm font-medium text-white gap-2">
            
            {
              footerLinks.map(({Icon, href, name}) => (
                <li>
                  <a
                    href={href}
                    className="hover:underline me-4 md:me-6 flex items-center"
                  >
                    <Icon className="mr-2"/> {name}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-sm font-normal text-white/60 mb-2">
            Ligas a páginas:
          </span>
          <ul className="flex flex-wrap justify-center md:justify-start items-center text-sm font-medium text-white gap-2">
            {routes.map((route) => (
              <li>
                <NavLink className="hover:underline me-4 md:me-6" to={route.to}>
                  {route.name.split("-").join(" ")}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
