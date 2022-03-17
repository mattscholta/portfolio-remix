import { expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { Header } from "../Header";

describe("Header Component", () => {
  const component = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  test("should render our footer", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
