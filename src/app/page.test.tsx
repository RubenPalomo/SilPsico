import { render, RenderResult, screen } from "@testing-library/react";
import Home from "./page";

const getRender = (): RenderResult => {
  return render(<Home />);
};

describe("Home tests", () => {
  it("renders Home Component", () => {
    getRender();

    expect(screen.getByTestId("home")).toBeDefined();
  });
});
