import classNames from "classnames";
import { useState } from "react";
import { NavLink } from "remix";

import { Logo } from "./Logo";

export interface HeaderProps {}

export const Header = (_props: HeaderProps) => {
  // Hooks
  const [closed, setClosed] = useState(true);

  // Handlers
  const onToggle = () => {
    setClosed(!closed);
  };

  return (
    <header
      className={classNames("header overflow-hidden print:hidden", { closed })}
    >
      <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-evenly md:text-sm">
        <button
          className="header-logo ml-4 gap-2 px-4 md:hidden"
          onClick={onToggle}
          type="button"
        >
          <img src="/images/svg/menu.svg" className="max-h-4" alt="" />
        </button>
        <div className="flex-1 md:hidden" />

        <NavLink className="header-logo ml-4 gap-2 px-4" to="/">
          <Logo />
          <span className="sr-only">Home</span>
        </NavLink>

        <div className="flex-1" />

        <div className="flex h-full flex-col font-font-monospace md:flex-row">
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
          {/*
          <NavLink className="header-link" to="/sandbox">
            Sandbox
          </NavLink>
          */}
          <NavLink className="header-link" to="/uses">
            Uses
          </NavLink>
        </div>
      </div>
    </header>
  );
};
