export interface FooterProps {}

export const Footer = (_props: FooterProps) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="text-center text-sm">
      <div className="mb-2 flex items-center justify-center gap-4">
        <img
          className="footer-social"
          src="/twitter.svg"
          alt=""
          height={20}
          width={20}
        />
        <img
          className="footer-social"
          src="/github.svg"
          alt=""
          height={20}
          width={20}
        />
        <img
          className="footer-social"
          src="/linkedin.svg"
          alt=""
          height={20}
          width={20}
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
