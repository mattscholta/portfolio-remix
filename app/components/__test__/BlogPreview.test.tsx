import { expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { BlogPreview } from "../BlogPreview";

describe("BlogPreview Component", () => {
  const component = render(
    <MemoryRouter>
      <BlogPreview id={10} image="" title="test title" />
    </MemoryRouter>
  );

  test("should render our BlogPreview", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
