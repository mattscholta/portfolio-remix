import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import { Logo } from "../Logo";

describe("Logo Component", () => {
  const component = render(<Logo />);

  test("should render our Logo", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
