import type { Experience as ExperienceType } from "~/data/resume";

export interface ExperienceProps {
  experience: ExperienceType;
}

export const Experience = (props: ExperienceProps) => {
  const { experience } = props;

  // Setup
  const { company, companyUrl, date, description, highlights, image, title } = experience; // prettier-ignore

  return (
    <div className="flex flex-col gap-10 md:flex-row" key={title}>
      <div className="flex flex-col gap-2 text-base md:basis-[160px]">
        <div className="flex">
          <h4 className="flex items-center gap-2 font-bold">
            <a
              className="text-color-copy hover:underline"
              dangerouslySetInnerHTML={{ __html: company }}
              href={companyUrl}
              rel="noreferrer"
              target="_blank"
            />
            {image && (
              <img alt="" className="h-4 w-4" loading="eager" src={image} />
            )}
          </h4>
        </div>
        <h3 className="uppercase- text-xs font-medium">
          <div className="uppercase">{title}</div>
          <div className="text-color-copy-light">{date}</div>
        </h3>
      </div>

      <div className="flex-1 text-sm leading-4">
        <div
          dangerouslySetInnerHTML={{
            __html: description
          }}
        />
        <ul className="my-4 ml-4 list-disc text-sm font-light">
          {highlights.map((highlight, index) => (
            <li
              className="my-1"
              key={index}
              dangerouslySetInnerHTML={{ __html: highlight }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
