import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import { AppHero } from "../AppHero";

describe("AppHero Component", () => {
  const component = render(
    <AppHero copy="Test Copy" highlight="The HIGHLIGHT" tag="h2" />
  );

  test("should render our Hero", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
