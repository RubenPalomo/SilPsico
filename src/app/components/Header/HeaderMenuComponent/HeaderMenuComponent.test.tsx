import React from "react";
import { render } from "@testing-library/react";
import HeaderMenuComponent from "./HeaderMenuComponent";

describe("HeaderMenuComponent", () => {
  it("renders menu items correctly", () => {
    const menuElements = ["Sobre mi", "Tarifas", "Contacto"];
    const { getByText } = render(
      <HeaderMenuComponent menuElements={menuElements} />
    );

    menuElements.forEach((element) => {
      const listItem = getByText(element).closest("li");
      const link = listItem?.querySelector("a");

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute(
        "href",
        `/${element.replace(/ /g, "").toLowerCase()}`
      );
    });
  });
});
