module.exports = {
  preset: "ts-jest",
  //testEnvironment: "jest-environment-jsdom-fourteen",
  testEnvironment: "node",
  roots: ["<rootDir>/src/"],
  maxWorkers: 1,
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  globalSetup: "./test-setup.js",
};
