import { MetaFunction, useParams } from "remix";

import { Hero } from "~/components/Hero";
import { ScrollTo } from "~/components/ScrollTo";
import { SITE_TITLE } from "~/config/constants";

export const meta: MetaFunction = (args) => ({
  title: `Sample Page | ${SITE_TITLE}`
});

export default function About() {
  // Hooks
  const { slug } = useParams();

  // Styles
  const cssSection = `section-full m-auto flex flex-col items-center justify-center gap-20`;
  const cssSection2 = `${cssSection} gap-0`;

  const twFont = `font-font-serif font-extrabold`;
  const cssHeading = `${twFont} text-3xl mb-4`;
  const cssHeading2 = `${twFont} text-xl mb-2`;

  return (
    <>
      <section className={cssSection} id="section-1">
        <Hero
          className="mx-auto max-w-6xl"
          copy="Sample page"
          highlight="Enjoy"
        />
        <ScrollTo id="/sample#anchor" />
      </section>

      <div className="section-anchor" id="anchor" />
      <section className={cssSection2}>
        <div className="wysiwyg max-w-3xl p-4">
          <h1 className={cssHeading}>Post #{slug}</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ex
            quisquam minima explicabo ad non dolores quae ducimus dicta omnis
            molestiae, quaerat reprehenderit ut ea, itaque harum iure obcaecati
            laboriosam!
          </p>

          <h2>A secondary heading</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            laborum rerum quo amet ullam veniam dolore architecto perspiciatis
            cupiditate laudantium dolorem, unde nisi blanditiis aspernatur,
            nostrum molestias rem, quos temporibus!
          </p>

          <ul>
            <li>A list item here</li>
            <li>A list item here</li>
            <li>A list item here</li>
          </ul>

          <h3>An h3 tag</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            laborum rerum quo amet ullam veniam dolore architecto perspiciatis
            cupiditate laudantium dolorem, unde nisi blanditiis aspernatur,
            nostrum molestias rem, quos temporibus!
          </p>

          <h4>An h4 tag</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            laborum rerum quo amet ullam veniam dolore architecto perspiciatis
            cupiditate laudantium dolorem, unde nisi blanditiis aspernatur,
            nostrum molestias rem, quos temporibus!
          </p>

          <h5>An h5 tag</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            laborum rerum quo amet ullam veniam dolore architecto perspiciatis
            cupiditate laudantium dolorem, unde nisi blanditiis aspernatur,
            nostrum molestias rem, quos temporibus!
          </p>

          <h6>An h6 tag</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            laborum rerum quo amet ullam veniam dolore architecto perspiciatis
            cupiditate laudantium dolorem, unde nisi blanditiis aspernatur,
            nostrum molestias rem, quos temporibus!
          </p>
        </div>

        <div className="section-subcontent w-full">
          <div className="m-auto max-w-6xl p-4">
            <h3 className={cssHeading2}>More posts</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              expedita possimus amet pariatur provident reiciendis earum
              accusamus! Nobis earum voluptatem doloremque deleniti praesentium
              laboriosam beatae corrupti ea sit iste. Impedit!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
