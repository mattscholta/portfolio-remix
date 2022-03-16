import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import { Footer } from "../Footer";

describe("Footer Component", () => {
  const component = render(<Footer />);

  test("should render our footer", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});

test("should work as expected", () => {
  expect(Math.sqrt(4)).toBe(2);
});
