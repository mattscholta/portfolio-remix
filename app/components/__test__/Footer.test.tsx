import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import { Footer } from "../Footer";
import { MemoryRouter } from "react-router";

describe("Footer Component", () => {
  const component = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  test("should render our footer", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
