import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import type { RenderResult } from "@testing-library/react";

import { BlogFeatured } from "../BlogFeatured";
import type { BlogFeaturedProps } from "../BlogFeatured";
import { MemoryRouter } from "react-router";

describe("BlogFeatured Component", () => {
  let props: BlogFeaturedProps;
  let component: RenderResult;

  const createWrapper = () => {
    component = render(
      <MemoryRouter>
        <BlogFeatured {...props} />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    props = {
      post: {
        content: {
          html: "<p>lorem ipsum dolor sit amet</p>"
        },
        date: "2020-01-01",
        id: "test-id",
        imageTemp: "https://via.placeholder.com/150",
        slug: "test-slug",
        sticky: false,
        title: "Test Title"
      }
    };

    createWrapper();
  });

  test("should render our BlogFeatured", () => {
    expect(component.baseElement).toMatchSnapshot();

    const elDate = component.getByText("01/01/2020"); // props.post.date
    const elHeading = component.getByText(props.post.title);
    const elImages = component.getAllByAltText(props.post.title ?? "_no_alt_");

    expect(elDate).toBeInTheDocument();
    expect(elHeading).toBeInTheDocument();
    expect(elImages[0]).toBeInTheDocument();
  });
});
