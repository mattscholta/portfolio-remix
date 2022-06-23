export const SectionMisc = () => {
  return (
    <section className="m-auto max-w-6xl px-4 md:my-20">
      <div className="flex flex-col gap-10 md:flex-row">
        <div>
          <h2 className="mb-8 text-3xl">
            Miscellaneous <span className="ml-2">🧩</span>
          </h2>
          <p>
            Living in San Diego you can find me and the family at the beach!
            Otherwise there's a good chance I am hauling ass along the coast on
            my motorcycle 🏍️💨.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-wrap gap-4">
          <img
            alt="Me, my son, and our dog at the beach"
            className="aspect-square max-w-[47%] flex-grow"
            height="auto"
            loading="lazy"
            src="https://s3-us-west-1.amazonaws.com/mattscholta/instagram/05.jpg"
            width={200}
          />
          <img
            alt="My 2014 Triumph Thruxton 900 in front of a Lifeguard tower"
            className="aspect-square max-w-[47%] flex-grow"
            height="auto"
            loading="lazy"
            src="https://s3-us-west-1.amazonaws.com/mattscholta/instagram/07.jpg"
            width={200}
          />
          <img
            alt="My 2014 Triumph Thruxton 900 in front some cool reeds"
            className="aspect-square flex-grow"
            height="auto"
            loading="lazy"
            src="https://s3-us-west-1.amazonaws.com/mattscholta/instagram/06.jpg"
            width={200}
          />
        </div>
      </div>
    </section>
  );
};
