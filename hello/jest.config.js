module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    transformIgnorePatterns: ['/node_modules/'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'vue'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': 'vue-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
    setupFilesAfterEnv: [
        './node_modules/jest-enzyme/lib/index.js',
        './utils/setup.js',
    ],
};
