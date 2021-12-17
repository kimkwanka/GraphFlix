/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */


module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^#apollo/(.*)$': '<rootDir>/src/apollo/$1',
    '^#components/(.*)$': '<rootDir>/src/components/$1',
    '^#generated/(.*)$': '<rootDir>/src/_generated/$1',
    '^#hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^#views/(.*)$': '<rootDir>/src/views/$1',
    '\\.(css|scss)$': '<rootDir>/jest/style.mock.ts',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/_generated/*.{ts,tsx}'],
};