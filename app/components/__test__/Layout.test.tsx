import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import { Layout } from "../Layout";

describe("Layout Component", () => {
  const component = render(<Layout />);

  test("should render our Layout", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
