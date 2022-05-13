import * as React from "react";

import { getMetaTags } from "../seo";

describe("seo: metadata", () => {
  let tags: React.MetaHTMLAttributes<HTMLMetaElement>[];
  const metadata = getMetaTags("http://testing.com", false);

  it('23 "metadata" tags', () => {
    expect(metadata.length).toBe(23);
  });

  it('3 "apple" tags', () => {
    tags = metadata.filter((metaTag) => metaTag.name?.startsWith("apple-"));
    expect(tags.length).toBe(3);
  });

  it('1 "charSet" tags', () => {
    tags = metadata.filter((metaTag) => metaTag.charSet === "utf-8");
    expect(tags.length).toBe(1);
  });

  // it('1 "facebook" tags', () => {
  //   tags = metadata.filter((metaTag) => metaTag.property?.startsWith('fb:'));
  //
  //   expect(tags.length).toBe(1);
  // });

  it('5 "open-graph" tags', () => {
    tags = metadata.filter((metaTag) => metaTag.property?.startsWith("og:"));

    expect(tags.length).toBe(5);
  });

  it('5 "twitter" tags', () => {
    tags = metadata.filter((metaTag) =>
      metaTag.property?.startsWith("twitter:")
    );

    expect(tags.length).toBe(5);
  });

  it('1 "viewport" tags', () => {
    tags = metadata.filter((metaTag) => metaTag.name === "viewport");
    expect(tags.length).toBe(1);
  });
});
