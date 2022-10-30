import classNames from "classnames";

export interface BlogUpcomingProps {
  className?: string;
}

export const BlogUpcoming = (props: BlogUpcomingProps) => {
  const { className } = props;

  return (
    <div className={classNames("flex flex-col gap-10", className)}>
      <div>
        <h3 className="text-2xl">Upcoming Posts</h3>
        <ul className="mt-8">
          {/*
          <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">
            Career (re)alignment.
          </li>
          */}
          <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">
            Escape Hatches - brought up in Vercel conf
          </li>
          <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">
            We are all salesmen, quick prototypes, sandboxes
          </li>
          <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">
            Developer tooling - debuggers &amp; loggers
          </li>
          <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">
            Lerna is back!
          </li>
          <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">
            You are not Google - moving quickly
          </li>
          <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">
            Reviewing pull requests - a simple framework
          </li>
        </ul>
      </div>
    </div>
  );
};
