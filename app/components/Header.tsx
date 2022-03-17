import { NavLink } from "remix";

import { Logo } from "./Logo";

export interface HeaderProps {}

export const Header = (_props: HeaderProps) => {
  return (
    <header className="header">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-evenly gap-1 text-sm uppercase md:gap-20">
        {/*
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/about">
          About
        </NavLink>
        */}
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/work">
          Work
        </NavLink>

        {/* Logo / Homepage */}
        <NavLink className="header-logo" to="/">
          <Logo />
          <span className="sr-only">Home</span>
        </NavLink>

        <NavLink className="header-link" to="/blog">
          Blog
        </NavLink>
        <NavLink className="header-link" to="/uses">
          Uses
        </NavLink>
      </div>
    </header>
  );
};
