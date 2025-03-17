import { BiSolidShoppingBag } from "react-icons/bi";
import { FaGithub, FaHome, FaInfoCircle, FaUsers } from "react-icons/fa";
import { FooterLink, NavLinkProps, Route } from "./interfaces";
import { MdPrivacyTip } from "react-icons/md";

// import { LazyPageOne } from "./01-lazyload/pages/LazyPage.1";
// import { LazyPageTwo } from "./01-lazyload/pages/LazyPage.2";
// import { LazyPageThree } from "./01-lazyload/pages/LazyPage.3";
import { About } from "./pages/About";
import { Users } from "./pages/Users";
import ErrorPage from "./components/shared/ErrorPage";
import { App } from "./pages/App";
import { lazy } from "react";
import { Cart } from "./02-component-patterns/pages/Cart";

// Configuración de los enlaces del footer

export const footerLinks: FooterLink[] = [
  {
    name: "Portafolio",
    href: "https://castdev-j.netlify.app/",
    Icon: BiSolidShoppingBag,
  },
  {
    name: "GitHub",
    href: "https://github.com/CastDev-j",
    Icon: FaGithub,
  },
  {
    name: "Privacy",
    href: "/privacy",
    Icon: MdPrivacyTip,
  },
  {
    name: "Terms",
    href: "/terms",
    Icon: MdPrivacyTip,
  },
];

// Configuración de las rutas de las páginas Lazy

const lazyOne = lazy(
  () =>
    import(/* webpackChunkName "LazyPage1" */ "./01-lazyload/pages/LazyPage.1")
);
const lazyTwo = lazy(
  () =>
    import(/* webpackChunkName "LazyPage2" */ "./01-lazyload/pages/LazyPage.2")
);
const lazyThree = lazy(
  () =>
    import(/* webpackChunkName "LazyPage3" */ "./01-lazyload/pages/LazyPage.3")
);

const ShoppingPage = lazy(
  () =>
    import(
      /* webpackChunkName "ShoppingPage" */ "./02-component-patterns/pages/Shopping"
    )
);

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: lazyOne,
    name: "Lazy-Page-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: lazyTwo,
    name: "Lazy-Page-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: lazyThree,
    name: "Lazy-Page-3",
  },
  {
    to: "/about",
    path: "about",
    Component: About,
    name: "Acerca de",
  },
  {
    to: "/users",
    path: "users",
    Component: Users,
    name: "Usuarios",
  },
  {
    to: "/",
    path: "",
    Component: App,
    name: "Inicio",
  },
  {
    to: "/shopping",
    path: "shopping",
    Component: ShoppingPage,
    name: "Tienda",
  },
  {
    to: "/shopping/cart",
    path: "shopping/cart",
    Component: Cart,
    name: "Carrito",
  },
  {
    to: "*",
    path: "*",
    Component: ErrorPage,
    name: "Error",
  },
];

// Configuración de los enlaces de navegación

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "font-bold transition-all py-3 px-2 flex items-center gap-2"
    : "hover:text-neutral-100 transition-all py-3 px-2 flex items-center gap-2 text-neutral-100/50";

export const navLinks: NavLinkProps[] = [
  {
    to: "/",
    className: navLinkClassName,
    Icon: FaHome,
    name: "Inicio",
  },
  {
    to: "/about",
    className: navLinkClassName,
    Icon: FaInfoCircle,
    name: "Acerca de",
  },
  {
    to: "/users",
    className: navLinkClassName,
    Icon: FaUsers,
    name: "Usuarios",
  },
  {
    to: "/shopping",
    className: navLinkClassName,
    Icon: BiSolidShoppingBag,
    name: "Tienda",
  },
];
