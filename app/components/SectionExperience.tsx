import { useState } from "react";
import { experience as data } from "~/data/resume";
import { SectionExperienceDetail } from "./SectionExperienceDetail";

export interface SectionExperienceProps {}

export const SectionExperience = () => {
  // Hooks
  // const minValue = data.length;
  const minValue = 3;
  const [shown, setShown] = useState(minValue);

  // Setup
  const experience = data.slice(0, shown);

  // Handlers
  const onToggleExp = () => {
    setShown(shown === minValue ? data.length : minValue);
  };

  return (
    <section>
      <div>
        <h2 className="py-8 text-lg print:py-4 md:text-xl">Experience</h2>
        <div className="mb-8 border-t border-solid border-color-border print:hidden" />
      </div>

      <div className="mb-10 flex flex-col gap-10">
        {experience.map((exp) => (
          <SectionExperienceDetail experience={exp} key={exp.title} />
        ))}
      </div>
      <div className="print:hidden">
        <button
          className="m-10 mx-auto block rounded-2xl border border-color-border bg-color-background-light py-2 px-4 font-font-sans-serif text-xs font-bold uppercase"
          onClick={onToggleExp}
        >
          {shown === minValue ? "Show more" : "Show less"}
        </button>
      </div>
    </section>
  );
};
