import { useRef, useState } from "react";
import { data } from "~/data/details";

/**
 * @name WorkDetails
 * @description tbd...
 */

export const WorkDetails = () => {
  const desc = `This is a <b>non</b> exhaustive list of tools and technologies I've used in my work.`;

  // Hooks
  const refDescription = useRef<HTMLParagraphElement>(null);
  const refHeading = useRef<HTMLHeadingElement>(null);
  const [heading, setHeading] = useState("Stack");
  const [description, setDesciption] = useState(desc);

  return (
    <section className="bg-color-background-dark py-10 text-color-background-light">
      <div className="my-10 mx-auto flex max-w-7xl flex-col items-start items-center gap-10 px-4 md:my-20 md:flex-row md:px-0">
        <div className="flex-1">
          {/* <h2 className="mb-8 text-3xl">Tools</h2> */}
          <div className="flex flex-wrap gap-2">
            {Object.keys(data).map((key) => {
              const isActive = key === heading;
              const coloring = !isActive
                ? "bg-color-background-light text-color-background-dark"
                : "bg-color-primary text-color-background-light";

              return (
                <button
                  className={`${coloring} rounded-md px-2 py-1 text-xs`}
                  key={key}
                  type="button"
                  onClick={() => {
                    setHeading(key);
                    setDesciption(data[key]);
                  }}
                >
                  {key}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1">
          <h2 className="mb-8 text-2xl" ref={refHeading}>
            {heading}
          </h2>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            ref={refDescription}
          />
        </div>
      </div>
    </section>
  );
};
