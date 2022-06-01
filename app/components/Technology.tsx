import classnames from "classnames";
import { useRef, useState } from "react";
import { data } from "~/data/details";

/**
 * @name Technology
 * @description tbd...
 */
export const Technology = () => {
  const desc = `This is a <b>non</b> exhaustive list of tools and technologies I use to make products come to life. I'm also very comfortable pushing pixels in Figma, Adobe, Video, and 3D modelling.`;

  // Hooks
  const refDescription = useRef<HTMLQuoteElement>(null);
  const [heading, setHeading] = useState("Stack");
  const [description, setDescription] = useState(desc);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:py-20">
      <div className="basis-2/5">
        <h2 className="mb-8 text-xl md:text-3xl">
          Technology <span className="ml-2">🧰</span>
        </h2>

        <div className="work-details flex flex-wrap gap-2">
          {Object.keys(data).map((key) => {
            const active = key === heading;

            return (
              <button
                className={classnames(`rounded-md px-2 py-1 text-sm`, {
                  active
                })}
                key={key}
                type="button"
                onClick={() => {
                  setHeading(key);
                  setDescription(data[key]);
                }}
                onMouseEnter={() => {
                  setHeading(key);
                  setDescription(data[key]);
                }}
              >
                {key}
              </button>
            );
          })}
        </div>
      </div>

      <blockquote
        className="my-8 basis-3/5 text-xl font-light leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description }}
        ref={refDescription}
      />
    </div>
  );
};
