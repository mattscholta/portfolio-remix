import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import { AppLogo } from "../AppLogo";

describe("AppLogo Component", () => {
  const component = render(<AppLogo />);

  test("should render our AppLogo", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
