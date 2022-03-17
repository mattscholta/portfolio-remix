export interface FooterProps {}

export const Footer = (_props: FooterProps) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="text-center text-sm">
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
