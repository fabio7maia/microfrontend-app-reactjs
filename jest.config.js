// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');

module.exports = {
	coverageThreshold: {
		global: {
			branches: 70,
		},
	},
	roots: ['<rootDir>/src'],
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/flows/**/*',
		'!src/**/*.d.ts',
		'!**/src/serviceWorker.ts',
		'!**/src/setupTests.js',
	],
	setupFiles: ['react-app-polyfill/jsdom', './src/setupTests.js'],
	setupFilesAfterEnv: [],
	testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
	testEnvironment: 'jest-environment-jsdom-fourteen',
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
		'^.+\\.css$': '<rootDir>/node_modules/react-scripts/config/jest/cssTransform.js',
		'^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/node_modules/react-scripts/config/jest/fileTransform.js',
	},
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', '^.+\\.module\\.(css|sass|scss)$'],
	modulePaths: [],
	moduleNameMapper: {
		'^react-native$': 'react-native-web',
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
		'^@assets': resolve(__dirname, './src/assets'),
		'^@components': resolve(__dirname, './src/components'),
		'^@configs': resolve(__dirname, './src/configs'),
		'^@constants': resolve(__dirname, './src/constants'),
		'^@drawers': resolve(__dirname, './src/drawers'),
		'^@flows': resolve(__dirname, './src/flows'),
		'^@helpers': resolve(__dirname, './src/helpers'),
		'^@hooks': resolve(__dirname, './src/hooks'),
		'^@i18n': resolve(__dirname, './src/i18n'),
		'^@modals': resolve(__dirname, './src/modals'),
		'^@screens': resolve(__dirname, './src/screens'),
		'^@services': resolve(__dirname, './src/services'),
		'^@store': resolve(__dirname, './src/store'),
		'^@themes': resolve(__dirname, './src/themes'),
		'^@types': resolve(__dirname, './src/types'),
	},
	moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
	watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
	testResultsProcessor: 'jest-sonar-reporter',
};
