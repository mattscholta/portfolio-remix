import classnames from "classnames";

export interface ExperienceProps {
  className?: string;
  company: string;
  role: string;
}

export const Experience = (props: ExperienceProps) => {
  const { className, company, role } = props;

  // Styles
  const tailwind = `flex-1 max-w-sm m-auto`;
  const cssComponent = classnames("experience", tailwind, className);

  return (
    <div className={cssComponent}>
      <h3 className="mb-4 text-xl font-bold">
        {company} <span className="text-highlight">{role}</span>
      </h3>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam
        eveniet corporis recusandae debitis nulla dolore praesentium.
      </p>
    </div>
  );
};
