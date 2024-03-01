import { RenderResult, render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "./layout";

const getRender = ({
  children,
}: {
  children: React.ReactNode;
}): RenderResult => {
  return render(<RootLayout>{children}</RootLayout>);
};

describe("RootLayout tests", () => {
  const children: React.ReactNode = <span data-testid="children" />;

  it("renders RootLayout Component", () => {
    /* eslint-disable no-console */
    console.error = jest.fn();

    getRender({ children });

    expect(screen.getByTestId("children")).toBeDefined();
  });
});
