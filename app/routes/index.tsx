import { Hero } from "~/components/Hero";

export default function Index() {
  return (
    <main>
      <section className="section-full flex items-center justify-center gap-10 ">
        <Hero copy="Welcome friend 👋" highlight="Matthew Scholta" />
        <img
          alt=""
          className="mb-20 max-h-40 rounded-full"
          src="https://media-exp1.licdn.com/dms/image/C5603AQGOIqLiltzE6Q/profile-displayphoto-shrink_800_800/0/1607310269762?e=1652918400&v=beta&t=ejJuCWmtmTXc5qekueVDpqqCmCv7zRncqNS6cLI7bBI"
        />
      </section>

      <section className="section-full flex items-center justify-center gap-10 ">
        <h2 className="text-center text-2xl text-color-primary">section 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sint
          aperiam ratione ullam voluptas, commodi sapiente voluptatibus beatae
          quidem ab, assumenda iusto quibusdam quod ipsam? Ea rem nesciunt
          asperiores labore?
        </p>
      </section>
    </main>
  );
}
