module.exports = {
  testEnvironment: "node",
  verbose: true,
  testTimeout: 10000,
  roots: ["<rootDir>/tests"],
  moduleFileExtensions: ["js", "json"],
  collectCoverage: true,
  collectCoverageFrom: ["bin/**/*.js"],
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
};
