import { Hero } from "~/components/Hero";

export default function Work() {
  const cssSection = `section-full flex flex-col gap-20 items-center justify-center max-w-6xl`;
  const cssHeading = "text-3xl mb-4 font-font-serif font-extrabold";

  return (
    <main>
      <section className={cssSection}>
        <Hero
          copy="I've been at it a while now"
          highlight={`Some "recent" Work`}
        />
      </section>

      <section className={cssSection}>
        <div>
          <h2 className={cssHeading}>RocketCMS 🚀</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad
            dignissimos deserunt consectetur tempore libero, architecto
            voluptate nesciunt maxime cumque. Repudiandae reprehenderit
            consequuntur error totam perferendis officia inventore pariatur vel.
          </p>
        </div>

        <div className="text-right">
          <h2 className={cssHeading}>Portfolio Update 🧑‍💻</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad
            dignissimos deserunt consectetur tempore libero, architecto
            voluptate nesciunt maxime cumque. Repudiandae reprehenderit
            consequuntur error totam perferendis officia inventore pariatur vel.
          </p>
        </div>

        <div>
          <h2 className={cssHeading}>Remix Example 🧑‍💻</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad
            dignissimos deserunt consectetur tempore libero, architecto
            voluptate nesciunt maxime cumque. Repudiandae reprehenderit
            consequuntur error totam perferendis officia inventore pariatur vel.
          </p>
        </div>

        <div className="text-right">
          <h2 className={cssHeading}>thredUP 🧑‍💻</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad
            dignissimos deserunt consectetur tempore libero, architecto
            voluptate nesciunt maxime cumque. Repudiandae reprehenderit
            consequuntur error totam perferendis officia inventore pariatur vel.
          </p>
        </div>
      </section>
    </main>
  );
}
