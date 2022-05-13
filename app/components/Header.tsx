import classnames from "classnames";
import { NavLink, useLocation } from "remix";

import { Logo } from "./Logo";

export interface HeaderProps {}

export const Header = (_props: HeaderProps) => {
  // Hooks
  const { pathname } = useLocation();

  // Setup
  const isResume = pathname.startsWith("/resume");

  // Styles
  const cssResume = classnames({ relative: isResume });

  return (
    <header className={`${cssResume} header overflow-hidden print:hidden`}>
      <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-evenly  md:text-sm">
        <NavLink className="header-logo ml-4 gap-2 px-4" to="/">
          <Logo />
          <span className="sr-only">Home</span>
        </NavLink>

        <div className="flex-1" />

        <div className="mr-8 flex gap-10 font-font-monospace">
          <NavLink className="header-link" to="/">
            About
          </NavLink>
          <NavLink className="header-link" to="/blog">
            Blog
          </NavLink>
          <NavLink className="header-link" to="/work">
            Portfolio
          </NavLink>
          <NavLink className="header-link" to="/resume">
            Resume
          </NavLink>
          <NavLink className="header-link" to="/uses">
            Uses
          </NavLink>
        </div>
      </div>
    </header>
  );
};
