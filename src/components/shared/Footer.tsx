import { BiSolidShoppingBags } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 p-2">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-white/60">
          © 2025{" "}
          <a href="/" className="hover:underline">
            Mi Aplicación Sección 3
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          <li>
            <a
              href="https://castdev-j.netlify.app/"
              className="hover:underline me-4 md:me-6 flex items-center"
            >
              <BiSolidShoppingBags  className="mr-2" /> Portafolio
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
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
