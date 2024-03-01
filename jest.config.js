const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverageFrom: ["app/**/*.ts", "app/**/*.tsx"],
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["lcov", "text", "html"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  rootDir: "./",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^_/public/(.*)$": ["<rootDir>/public/$1"],
    "^_/(.*)$": ["<rootDir>/app/$1"],
  },
  testEnvironment: "jest-environment-jsdom",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testRegex: "app/.*\\.test\\.(js|ts|tsx)$",
};
module.exports = createJestConfig(customJestConfig);
