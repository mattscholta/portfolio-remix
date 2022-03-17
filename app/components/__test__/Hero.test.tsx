import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import { Hero } from "../Hero";

describe("Hero Component", () => {
  const component = render(<Hero copy="Test Copy" highlight="The HIGHLIGHT" />);

  test("should render our Hero", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
