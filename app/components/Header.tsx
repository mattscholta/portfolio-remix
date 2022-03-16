import { NavLink } from "remix";
import { Logo } from "./Logo";

export interface HeaderProps {}

export const Header = (_props: HeaderProps) => {
  return (
    <header className="header">
      <div className="mx-auto flex max-w-2xl items-center justify-center gap-20 text-sm font-semibold uppercase">
        {/*
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        */}
        <NavLink className="header-link" to="/about">
          About
        </NavLink>
        <NavLink className="header-link" to="/blog">
          Blog
        </NavLink>

        {/* Logo / Homepage */}
        <NavLink className="header-logo" to="/">
          {/* <img alt="" src="/logo.svg" /> */}
          <Logo className="p-2" />
        </NavLink>

        <NavLink className="header-link" to="/work">
          Work
        </NavLink>
        <NavLink className="header-link" to="/uses">
          Uses
        </NavLink>
      </div>
    </header>
  );
};
