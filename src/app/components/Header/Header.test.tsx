import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders header correctly", () => {
    const { getByText, getByAltText } = render(<Header />);

    const title = getByText("Silvia de Isidro Delgado");
    const menuComponent = getByText("Sobre mi");
    const iconComponent = getByAltText("icon");

    expect(title).toBeInTheDocument();
    expect(menuComponent).toBeInTheDocument();
    expect(iconComponent).toBeInTheDocument();
  });
});
