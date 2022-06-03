import { data } from "~/data/companies";

export const SectionCompanies = () => {
  return (
    <section className="work-companies border-0 border-b border-solid border-b-color-border ">
      <div className="flex-1 py-10 md:py-20">
        <h2 className="mb-10 text-center text-xl md:mb-20 md:text-4xl">
          Companies I've built things for.
        </h2>

        <div
          className="mx:mx-20 mx-10 flex flex-1 flex-wrap items-center justify-center gap-10 md:gap-20 lg:mx-40"
          style={{
            filter: "grayscale(1)"
          }}
        >
          {data.map((node) => {
            const { className, company, image, url } = node;

            return (
              <a href={url} key={company} rel="noreferrer" target="_blank">
                <img
                  alt={company}
                  className={`${className} opacity-50 transition-opacity duration-500 hover:opacity-100`}
                  height="auto"
                  loading="lazy"
                  src={image}
                  width="auto"
                />
              </a>
            );
          })}
        </div>

        {/*
        <div className="mx-auto -mb-5 pt-10 text-center italic md:-mb-10 md:pt-20">
          <p className="px-4 text-xs font-light opacity-80 md:text-sm">
            <b>"Agency Life"</b> provided a wonderful opportunity to work
            closely with some of the tech giants.
            <br />
            Being located in <b>San Francisco</b> I caught the startup bug and
            love the challenge.
          </p>
        </div>
        */}
      </div>
    </section>
  );
};
