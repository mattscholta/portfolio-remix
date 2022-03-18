import { NavLink } from "remix";

import { Logo } from "./Logo";

export interface HeaderProps {}

export const Header = (_props: HeaderProps) => {
  return (
    <header className="header">
      <div className="relative mx-auto flex w-full max-w-2xl items-center justify-evenly gap-1 text-xs uppercase md:gap-20 md:text-sm">
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/work">
          Work
        </NavLink>
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
      <button className="absolute right-8" type="submit">
        Toggle
      </button>
    </header>
  );
};
