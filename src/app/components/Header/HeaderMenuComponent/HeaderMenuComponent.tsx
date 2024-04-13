import Link from "next/link";
import React from "react";
import { HeaderMenuComponentProps } from "./HeaderMenuComponent.props";

export default function HeaderMenuComponent({
  menuElements,
  currentPage,
}: HeaderMenuComponentProps) {
  const currentPath = currentPage.replaceAll(" ", "").toLowerCase();

  return (
    <nav className="flex justify-end min-w-52">
      <ul className="flex space-x-4 mt-2 mr-2">
        {menuElements.map((element, index) => (
          <li key={index}>
            <Link
              href={
                element === "Inicio"
                  ? "/"
                  : `/${element.replaceAll(" ", "").toLowerCase()}`
              }
            >
              <p
                className={`text-xs sm:text-base transition-transform transform-gpu ${
                  currentPath ===
                  element
                    .replaceAll(" ", "")
                    .replace("Inicio", "/")
                    .toLowerCase()
                    ? "scale-110 border-b-2 border-blue-400"
                    : "hover:scale-110"
                } `}
              >
                {element}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
