import { useLocation } from "remix";
import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER
} from "../config/constants";

export interface FooterProps {}

export const Footer = (_props: FooterProps) => {
  // const date = new Date();
  // const year = date.getFullYear();

  // Hooks
  const { pathname } = useLocation();

  // Setup
  const isResume = pathname.startsWith("/resume");

  // 🔌 Short Circuit
  if (isResume) return null;

  return (
    <footer className="mt-10 justify-center gap-2 text-center text-sm print:hidden md:mt-20">
      <div className="m-auto flex justify-center gap-4">
        <a
          className="p-2"
          href={SOCIAL_LINKEDIN}
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="Follow me on LinkedIn"
            className="footer-social"
            height={16}
            src="/images/svg/linkedin.svg"
            width={16}
          />
        </a>
        <a
          className="p-2"
          href={SOCIAL_GITHUB}
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="Follow me on GitHub"
            className="footer-social"
            height={16}
            src="/images/svg/github.svg"
            width={16}
          />
        </a>
        <a
          className="p-2"
          href={SOCIAL_TWITTER}
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="Follow me on Twitter"
            className="footer-social"
            height={16}
            src="/images/svg/twitter.svg"
            width={16}
          />
        </a>
      </div>
      <p className="font-font-monospace">
        Built with <span className="text-color-primary--">&hearts;</span> in{" "}
        <a
          href="https://www.google.com/search?q=san+diego+weather"
          rel="noreferrer"
          target="_blank"
        >
          San Diego
        </a>
        , CA.
      </p>
    </footer>
  );
};
