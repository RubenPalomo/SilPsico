import { loadEnvConfig } from "@next/env";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
    }),
    useServerInsertedHTML: jest.fn(),
  };
});

loadEnvConfig(process.cwd());
jest.setTimeout(30000);
