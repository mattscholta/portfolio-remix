import classnames from "classnames";

export interface ExperienceProps {
  className?: string;
  company: string;
  date: string;
  role: string;
}

export const Experience = (props: ExperienceProps) => {
  const { className, company, date, role } = props;

  // Styles
  const tailwind = `flex-1 max-w-sm m-auto min-w-sm text-center`;
  const cssComponent = classnames("experience", tailwind, className);

  return (
    <div className={cssComponent}>
      <h3 className="text-xl font-bold">
        {company} <span className="text-highlight">{role}</span>
      </h3>
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
