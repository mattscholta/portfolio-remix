import classnames from "classnames";
import { IconLink } from "./IconLink";

export interface ExperienceProps {
  className?: string;
  company: string;
  date: string;
  role: string;
  url: string;
}

export const Experience = (props: ExperienceProps) => {
  const { className, company, date, role, url } = props;

  // Styles
  const tailwind = `flex-1 max-w-sm m-auto min-w-sm text-center`;
  const cssComponent = classnames("experience", tailwind, className);

  return (
    <div className={cssComponent}>
      <h2 className="flex gap-2 text-xl font-bold">
        {company}
        <a
          className=""
          href={url}
          rel="noreferrer"
          title="Open in new window"
          target="_blank"
        >
          <span className="text-highlight">{role}</span>
          <IconLink className="ml-2 mb-1 inline" size={16} />
        </a>
      </h2>
      <div className="font-medium">{date}</div>

      {/*
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam
        eveniet corporis recusandae debitis nulla dolore praesentium.
      </p>
      */}
    </div>
  );
};
