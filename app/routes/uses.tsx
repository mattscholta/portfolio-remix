import type { MetaFunction } from "remix";
import { images } from "~/data/uses";
import { SITE_TITLE } from "~/config/constants";
import { Hero } from "~/components/Hero";

export const meta: MetaFunction = () => ({
  title: `Uses | ${SITE_TITLE}`
});

export default function () {
  // Setup
  const laptop = `https://www.apple.com/shop/buy-mac/macbook-pro/14-inch-space-gray-10-core-cpu-16-core-gpu-1tb`;
  const monitor = `https://www.amazon.com/gp/product/B074JKT894`;
  const storage = `https://www.amazon.com/gp/product/B01MRSRQLA`;
  const disks = `https://www.amazon.com/gp/product/B01AV1697A`;
  const desk = `https://www.amazon.com/gp/product/B07HJJLLML`;
  const keyboard = `https://www.apple.com/shop/product/MLA22B/A/magic-keyboard-us-english`;
  const headphones = `https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B0756CYWWD`;
  const mouse = `https://www.apple.com/shop/product/MLA02LL/A/magic-mouse-2-silver`;

  const linkProps = {
    target: "_blank",
    rel: "noreferrer"
  };

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
            <li>
              Laptop -{" "}
              <a {...linkProps} href={laptop}>
                14" MacBook Pro, 2021
              </a>
            </li>
            <li className="ml-4">M1 Max with 64GB of RAM 😍 🔥</li>
            <li>
              Monitor - <a href={monitor}>34" LG Curved Ultra-wide</a>
            </li>
            <li>
              Storage - <a href={storage}>TerraMaster RAID Enclosure</a>
            </li>
            <li className="ml-4">
              2x <a href={disks}>WD Gold 4TB @7200 RPM</a>
            </li>
            <li>
              Desk - <a href={desk}>Adjustable height Desk</a>
            </li>
            <li>
              Keyboard - <a href={keyboard}>Apple Magic Keyboard</a>
            </li>
            <li>
              Music - <a href={headphones}>Bose Headphones</a>
            </li>
            <li>
              Mouse - <a href={mouse}>Apple Magic Mouse</a>
            </li>
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
                <a
                  className="font-normal"
                  href="https://code.visualstudio.com/insiders"
                >
                  <span className="mr-2">🧰</span> Visual Studio Code
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
                <a className="font-normal" href="https://iterm2.com/">
                  <span className="mr-2">$</span> Iterm2
                </a>
              </h3>
              <p>
                As far as terminal users go, I use it heavily every day. iTerm2
                is free and full of features I use and many that I don't even
                know exist. Tabs, split-view, fast and reliable.
              </p>
            </div>

            <div>
              <h3 className="my-4 text-xl">
                <a
                  className="font-normal"
                  href="https://www.docker.com/products/docker-desktop"
                >
                  <span className="mr-2">🐳</span> Docker Desktop
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
                <span className="mr-2">🎨</span>{" "}
                <a className="font-normal" href="https://www.figma.com/">
                  Figma
                </a>{" "}
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
              <img
                alt=""
                className="rounded-md p-2"
                key={index}
                src={data.src}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
