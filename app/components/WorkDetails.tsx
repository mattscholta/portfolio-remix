import { useRef, useState } from "react";
import { data } from "~/data/details";

/**
 * @name WorkDetails
 * @description tbd...
 */

export const WorkDetails = () => {
  const desc = `This is a <b>non</b> exhaustive list of tools and technologies I use to make products come to life. I'm also very comfortable pushing pixels in Figma, Adobe, Video, and 3D modelling.`;

  // Hooks
  const refDescription = useRef<HTMLQuoteElement>(null);
  const [heading, setHeading] = useState("Stack");
  const [description, setDesciption] = useState(desc);

  return (
    <section className="bg-color-background-dark py-10 text-color-background-light">
      <div className="my-10 mx-auto flex max-w-7xl flex-col gap-10 px-4 md:my-20 md:flex-row md:px-0">
        <div className="basis-2/5">
          <h2 className="mb-8 text-3xl">Tools</h2>

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
                  onMouseEnter={() => {
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

        <blockquote
          className="my-8 basis-3/5 text-xl font-semibold leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
          ref={refDescription}
        />
      </div>
    </section>
  );
};
