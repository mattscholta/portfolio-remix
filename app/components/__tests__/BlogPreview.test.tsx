import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import type { RenderResult } from "@testing-library/react";

import { BlogPreview } from "../BlogPreview";
import type { BlogPreviewProps } from "../BlogPreview";
import { MemoryRouter } from "react-router";

describe("BlogPreview Component", () => {
  let props: BlogPreviewProps;
  let component: RenderResult;

  const createWrapper = () => {
    component = render(
      <MemoryRouter>
        <BlogPreview {...props} />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    props = {
      content: "<p>Hello World</p>",
      date: "2020-01-01",
      image: "https://example.com/image.jpg",
      slug: "hello-world",
      title: "Hello World"
    };

    createWrapper();
  });

  test("should render our BlogPreview", () => {
    expect(component.baseElement).toMatchSnapshot();

    const elDate = component.getByText("01/01/2020"); // props.post.date
    const elHeading = component.getByText(props.title);
    const elImages = component.getAllByAltText(props.title ?? "_no_alt_");

    expect(elDate).toBeInTheDocument();
    expect(elHeading).toBeInTheDocument();
    expect(elImages[0]).toBeInTheDocument();
  });
});
