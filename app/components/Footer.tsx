export interface FooterProps {}

export const Footer = (_props: FooterProps) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="text-sm text-center text-color-copy-light">
      <p>
        Built with <span className="text-color-primary">&hearts;</span> in San
        Diego, California. &copy; {year}
      </p>
    </footer>
  );
};
