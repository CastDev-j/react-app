import { BiSolidShoppingBags } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPrivacyTip } from "react-icons/md";
import { NavLink } from "react-router";

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
          <ul className="flex flex-wrap justify-center md:justify-start items-center text-sm font-medium text-white">
            <li>
              <a
                href="https://castdev-j.netlify.app/"
                className="hover:underline me-4 md:me-6 flex items-center"
              >
                <BiSolidShoppingBags className="mr-2" /> Portafolio
              </a>
            </li>
            <li>
              <a
                href="https://github.com/CastDev-j"
                className="hover:underline me-4 md:me-6 flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 flex items-center">
                <MdPrivacyTip className="mr-2" /> Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <IoIosMail className="mr-2" /> Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-sm font-normal text-white/60 mb-2">
            Ligas a páginas Lazy:
          </span>
          <ul className="flex flex-wrap justify-center md:justify-start items-center text-sm font-medium text-white">
            <li>
              <NavLink className="hover:underline me-4 md:me-6" to="/lazy1">
                Lazy Page 1
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:underline me-4 md:me-6" to="/lazy2">
                Lazy Page 2
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:underline me-4 md:me-6" to="/lazy3">
                Lazy Page 3
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
