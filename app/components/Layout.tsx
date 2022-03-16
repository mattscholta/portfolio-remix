export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (_props) => {
  const { children } = _props;

  return (
    <div className="flex flex-col section-full pt-2 overflow-auto">
      <div className="flex flex-1 items-center justify-center">{children}</div>
    </div>
  );
};
