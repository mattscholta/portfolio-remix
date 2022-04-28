import type { MetaFunction } from "remix";
import { images } from "~/data/uses";
import { SITE_AUTHOR, SITE_TITLE } from "~/config/constants";
import { Hero } from "~/components/Hero";

export const meta: MetaFunction = () => ({
  title: `Uses | ${SITE_TITLE}`
});

export default function Resume() {
  return (
    <div className="m-auto max-w-5xl pt-10">
      <div className="flex flex-col">
        <Hero
          className="mx-auto max-w-6xl"
          copy="If you're curious"
          highlight="🔧 Uses"
        />

        <section>
          <div className="sticky top-16 bg-color-background">
            <h1 className="py-8 text-xl">Hardware</h1>
            <div className="mb-10 border-t border-solid border-color-border" />
          </div>
          <p>
            I've been happily developing on a Mac over the last 10+ years.
            However, I grew up on PC's and built a few rigs over the years for
            gaming and work. Now days a perk of working in Software our employer
            often supplies a well equipped box.
          </p>

          <ul className="my-10 list-disc columns-2 pl-4">
            <li>Laptop - 14" MacBook Pro, 2021</li>
            <li className="ml-4">M1 Max with 64GB of RAM 😍🔥</li>
            <li>Monitor - 34" LG Curved Ultra-wide</li>
            <li>Storage - TerraMaster RAID Enclosure</li>
            <li className="ml-4">2x WD Gold 4TB @7200 RPM</li>
            <li>Desk - Adjustable height Desk</li>
            <li>Keyboard - Apple Magic Keyboard</li>
            <li>Music - Bose Headphones</li>
            <li>Mouse - Apple Magic Mouse</li>
          </ul>
        </section>

        <section>
          <div className="sticky top-16 bg-color-background">
            <h2 className="py-8 text-xl">Software</h2>
            <div className="mb-10 border-t border-solid border-color-border" />
          </div>
          <p>
            I am actually pleasantly surprised how small this list is... These
            programs are at the core of everything I do daily. While we can
            write code in in VIM or a text editor, life is just better with the
            right tools.
          </p>

          <div className="my-10 grid grid-cols-2 gap-10">
            <div>
              <h3 className="my-4 text-xl">
                <a href="https://code.visualstudio.com/insiders">
                  🧰 Visual Studio Code
                </a>
              </h3>
              <p>
                Is my editor of choice and I could not be happier! It 100% does
                everything I need it to and I am continuously impressed by the
                improvements I've seen to date.
              </p>
            </div>

            <div>
              <h3 className="my-4 text-xl">
                <a href="https://iterm2.com/">$ Iterm2</a>
              </h3>
              <p>
                As far as terminal users go, I use it heavily every day. iTerm2
                is free and full of features I use and many that I don't even
                know exist. Tabs, split-view, fast and reliable.
              </p>
            </div>

            <div>
              <h3 className="my-4 text-xl">
                <a href="https://www.docker.com/products/docker-desktop">
                  🐳 Docker Desktop
                </a>
              </h3>
              <p>
                At the core of the modern development workflow is 🐳 Docker. I
                can't begin to explain how enjoyable a great docker and
                docker-compose workflow can be.
              </p>
            </div>

            <div>
              <h3 className="my-4 text-xl">
                🎨 <a href="https://www.figma.com/">Figma</a> /{" "}
                <a href="https://www.sketch.com/">Sketch</a>
              </h3>
              <p>
                It's not that often that get to play designer but I do enjoy
                keeping up with the tools. Figma is available in the browser +
                app and fast, love it!
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="sticky top-16 bg-color-background">
            <h2 className="py-8 text-xl">Miscellaneous</h2>
            <div className="mb-10 border-t border-solid border-color-border" />
          </div>
          <p>
            A true California native you can find me and the family at the
            beach! When we're not at the beach there is a good chance I am
            hauling ass along the coast on my motorcycle 🏍️💨.
          </p>

          <div className="mb-20 grid grid-cols-5 gap-10 py-10">
            {images.map((data, index) => (
              <img alt="" key={index} src={data.src} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
