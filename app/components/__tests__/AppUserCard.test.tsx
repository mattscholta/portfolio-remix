import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import type { RenderResult } from "@testing-library/react";

import { AppUserCard } from "../AppUserCard";
import type { AppUserCardProps } from "../AppUserCard";

describe("AppUserCard Component", () => {
  let props: AppUserCardProps;
  let component: RenderResult;

  const createWrapper = () => {
    component = render(<AppUserCard {...props} />);
  };

  beforeEach(() => {
    props = {
      alt: "Image Alt text, because we should do better!",
      className: "user-card-classname",
      copy: "lorem ipsum dolor sit amet",
      image: "https://via.placeholder.com/150"
    };

    createWrapper();
  });

  test("should render our AppUserCard", () => {
    expect(component.baseElement).toMatchSnapshot();

    const elCopy = component.getByText(props.copy);
    const elImages = component.getAllByAltText(props.alt ?? "_no_alt_");

    expect(elCopy).toBeInTheDocument();
    expect(elImages[0]).toBeInTheDocument();
  });
});
