import type { Config } from '@jest/types';

// Используйте абсолютные пути вместо <rootDir>
const baseDir = `${__dirname}/src/Doubles`;
const baseTestDir = `${__dirname}/src/test/Doubles`;

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: [`${baseDir}/**/*.ts`],
    testMatch: [`${baseTestDir}/**/*.ts`],
};

export default config;
