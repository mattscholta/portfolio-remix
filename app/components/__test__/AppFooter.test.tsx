import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import { AppFooter } from "../AppFooter";
import { MemoryRouter } from "react-router";

describe("AppFooter Component", () => {
  const component = render(
    <MemoryRouter>
      <AppFooter />
    </MemoryRouter>
  );

  test("should render our footer", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
