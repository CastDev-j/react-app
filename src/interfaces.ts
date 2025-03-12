import { IconType } from "react-icons";

export interface Route {
  to: string;
  path: string;
  Component: React.ComponentType;
  name: string;
}

export interface FooterLink {
  name: string;
  href: string;
  Icon: IconType;
}

export interface NavLinkProps {
  to: string;
  Icon: IconType;
  className: (props: { isActive: boolean }) => string;
  name: string;
}
