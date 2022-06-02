import { getMetaTags } from "../seo";

describe("seo: metadata", () => {
  let tags: React.MetaHTMLAttributes<HTMLMetaElement>[];
  const metadata = getMetaTags("http://testing.com", false);

  it('## "metadata" tags', () => {
    expect(metadata.length).toBe(24);
  });

  it('## "apple" tags', () => {
    tags = metadata.filter((metaTag) => metaTag.name?.startsWith("apple-"));
    expect(tags.length).toBe(3);
  });

  it('## "charSet" tags', () => {
    tags = metadata.filter((metaTag) => metaTag.charSet === "utf-8");
    expect(tags.length).toBe(1);
  });

  // it('## "facebook" tags', () => {
  //   tags = metadata.filter((metaTag) => metaTag.property?.startsWith('fb:'));
  //
  //   expect(tags.length).toBe(1);
  // });

  it('## "open-graph" tags', () => {
    tags = metadata.filter((metaTag) => metaTag.property?.startsWith("og:"));

    expect(tags.length).toBe(5);
  });

  it('## "twitter" tags', () => {
    tags = metadata.filter((metaTag) =>
      metaTag.property?.startsWith("twitter:")
    );

    expect(tags.length).toBe(5);
  });

  it('## "viewport" tags', () => {
    tags = metadata.filter((metaTag) => metaTag.name === "viewport");
    expect(tags.length).toBe(1);
  });
});
