const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  displayName: 'storyshots',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // tsconfig.jsonのcompilerOptions>pathsの定義に合わせる
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/jest.storyshotsImage.ts'],
};

module.exports = createJestConfig(customJestConfig);
