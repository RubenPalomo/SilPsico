import React from "react";
import { render } from "@testing-library/react";
import HeaderIconComponent from "./HeaderIconComponent";

describe("HeaderIconComponent", () => {
  it("renders icon correctly", () => {
    const { getByTestId } = render(<HeaderIconComponent />);
    const icon = getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "imgs/sil-psico-icon.png");
  });
});
