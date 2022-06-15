import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import type { RenderResult } from "@testing-library/react";

import { AppTags } from "../AppTags";
import type { AppTagsProps } from "../AppTags";

describe("AppTags Component", () => {
  let props: AppTagsProps;
  let component: RenderResult;

  const createWrapper = () => {
    component = render(<AppTags {...props} />);
  };

  beforeEach(() => {
    props = {
      classNameTag: "tag-classname",
      heading: "App Tag - Test Heading",
      tags: ["One", "Two", "Three"]
    };

    createWrapper();
  });

  test("should render our AppTags", () => {
    expect(component.baseElement).toMatchSnapshot();

    props.tags.forEach((tag) => {
      const className = props.classNameTag ?? "";
      const elTag = component.getByText(tag);
      const elHeading = component.getByText(tag);

      expect(elHeading).toBeInTheDocument();
      expect(elTag).toBeInTheDocument();
      expect(elTag.classList.contains(className)).toBe(true);
    });
  });
});
