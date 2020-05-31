/* eslint-disable quotes */
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  displayName: 'components',
  testEnvironment: "jsdom",
  testMatch: [
    '**/spec/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/spec/__mocks__/',
    '<rootDir>/spec/setupTests.js'
  ],
  setupFilesAfterEnv: ['<rootDir>/spec/setupTests.js'],
  maxConcurrency: 5,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/spec/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.jsx'],
  coveragePathIgnorePatterns: [
    '/client/src/index.jsx',
    '/node_modules/',
    '/client/src/styles/'
  ],
  coverageThreshold: {
    'global': {
      'branches': 100,
      'functions': 100,
      'lines': 100,
      'statements': 100
    }
  },
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'html'
  ],
  // preset: 'babel-preset-jest',
  verbose: true,

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  // testURL: "http://localhost",

  // A map from regular expressions to paths to transformers
  // transform: undefined,

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "/node_modules/"
  // ],

};
