export const SectionHardware = () => {
  // Setup
  const laptop = `https://www.apple.com/macbook-pro/`;
  const monitor = `https://www.amazon.com/gp/product/B074JKT894`;
  const storage = `https://www.amazon.com/gp/product/B01MRSRQLA`;
  const disks = `https://www.amazon.com/gp/product/B01AV1697A`;
  const desk = `https://www.amazon.com/gp/product/B07HJJLLML`;
  const keyboard = `https://www.apple.com/shop/product/MK2A3LL/A/magic-keyboard-us-english`;
  const headphones = `https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B0756CYWWD`;
  const mouse = `https://www.apple.com/shop/product/MMMQ3AM/A/magic-mouse-black-multi-touch-surface`;

  const linkProps = {
    rel: "noreferrer",
    target: "_blank"
  };

  // Styles
  const cssHardware = `flex gap-4 items-center justify-center flex-1 rounded-md border border-solid border-color-border bg-color-background-light px-4 py-8`;

  return (
    <section className="m-auto max-w-6xl py-20 px-4 md:my-10">
      <h2 className="pb-8 text-3xl">
        Hardware <span className="ml-2">💻</span>
      </h2>
      <p>
        I've been happily developing on a Mac over the last 10+ years. However,
        I grew up on PC's and built a few rigs over the years for gaming and
        work. Now days a perk of working in Software our employer often supplies
        a well equipped box.
      </p>

      {/*
      <div className="my-10 grid grid-cols-3 gap-4">
        <div className={cssHardware}>
          <h2 className="text-xl text-color-copy-dark">Laptop</h2>
        </div>
        <div className={cssHardware}>
          <h2 className="text-xl text-color-copy-dark">Monitor</h2>
        </div>
        <div className={cssHardware}>
          <h2 className="text-xl text-color-copy-dark">Desk</h2>
        </div>
        <div className={cssHardware}>
          <h2 className="text-xl text-color-copy-dark">Peripherals</h2>
        </div>
        <div className={cssHardware}>
          <h2 className="text-xl text-color-copy-dark">Storage</h2>
        </div>
      </div>
      */}

      <ul className="my-10 list-disc columns-1 pl-4 md:columns-2 lg:columns-3">
        <li>
          Computer -{" "}
          <a {...linkProps} href={laptop}>
            MacBook Pro 14"
          </a>
        </li>
        <li className="ml-4">M1 Max with 64GB of RAM 😍 🔥</li>
        <li>
          Monitor -{" "}
          <a {...linkProps} href={monitor}>
            34" LG Curved Ultra-wide
          </a>
        </li>
        <li>
          Storage -{" "}
          <a {...linkProps} href={storage}>
            TerraMaster RAID Enclosure
          </a>
        </li>
        <li className="ml-4">
          2x{" "}
          <a {...linkProps} href={disks}>
            WD Gold 4TB @7200 RPM
          </a>
        </li>
        <li>
          Desk -{" "}
          <a {...linkProps} href={desk}>
            Adjustable height Desk
          </a>
        </li>
        <li>
          Keyboard -{" "}
          <a {...linkProps} href={keyboard}>
            Apple Magic Keyboard
          </a>
        </li>
        <li>
          Music -{" "}
          <a {...linkProps} href={headphones}>
            Bose Headphones
          </a>
        </li>
        <li>
          Mouse -{" "}
          <a {...linkProps} href={mouse}>
            Apple Magic Mouse
          </a>
        </li>
      </ul>
    </section>
  );
};
