import classNames from "classnames";

export interface BlogUpcomingProps {
  className?: string;
}

/**
 * @name BlogUpcoming
 * @description tbd...
 */
export const BlogUpcoming = (props: BlogUpcomingProps) => {
  const { className } = props;

  return (
    <div className={classNames("flex flex-col gap-10", className)}>
      <div>
        <h3 className="text-2xl">Upcoming Posts</h3>
        <ul className="mt-8">
          <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">
            Throw away code - the product life cycle
          </li>
          <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">
            Developer tooling - debuggers &amp; loggers
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
