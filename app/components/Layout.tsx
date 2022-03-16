export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (_props) => {
  const { children } = _props;

  return (
    <div className="section-full flex flex-col">
      <div className="flex flex-1 items-center justify-center">{children}</div>
    </div>
  );
};
