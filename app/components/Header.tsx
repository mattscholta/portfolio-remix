import { NavLink } from "remix";
import { Logo } from "./Logo";

export interface HeaderProps {}

export const Header = (_props: HeaderProps) => {
  return (
    <header className="bg-color-background border-b-color-border border text-color-copy">
      <div className="max-w-2xl mx-auto flex gap-20 items-center justify-center uppercase font-semibold text-sm">
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
