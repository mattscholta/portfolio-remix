import { expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { AppHeader } from "../AppHeader";

describe("AppHeader Component", () => {
  const component = render(
    <MemoryRouter>
      <AppHeader />
    </MemoryRouter>
  );

  test("should render our footer", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
