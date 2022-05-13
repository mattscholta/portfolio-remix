import { Outlet } from "remix";

export default () => {
  return (
    <main className="mx-auto max-w-5xl py-10 md:py-20">
      <h3 className="text-3xl">Sandbox</h3>

      <Outlet />
    </main>
  );
};
