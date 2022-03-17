export interface FooterProps {}

export const Footer = (_props: FooterProps) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="text-center text-sm">
      <div className="mb-2 flex items-center justify-center gap-4">
        <img
          alt="Follow me on GitHub"
          className="footer-social"
          height={16}
          src="/github.svg"
          width={16}
        />
        <img
          alt="Follow me on Twitter"
          className="footer-social"
          height={16}
          src="/twitter.svg"
          width={16}
        />
        <img
          alt="Follow me on LinkedIn"
          className="footer-social"
          height={16}
          src="/linkedin.svg"
          width={16}
        />
      </div>
      <p>
        Built with <span className="text-color-primary">&hearts;</span> in{" "}
        <a
          // href="https://www.google.com/search?q=san+diego+weather"
          href="https://www.surfline.com/surf-report/carlsbad-state-beach-north/5d4dc10680c2430001b119fb"
          rel="noreferrer"
          target="_blank"
        >
          San Diego
        </a>
        , California. &copy; {year}
      </p>
    </footer>
  );
};
