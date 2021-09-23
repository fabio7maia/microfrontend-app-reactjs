const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack5RemoteTypesPlugin = require('webpack5-remote-types-plugin').default;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const packageJson = require('./package.json');

const env = 'development';
process.env.NODE_ENV = process.env.BABEL_ENV = env;
process.env.PUBLIC_URL = '/';

module.exports = {
	entry: './src/index.js',
	mode: env,
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		port: 3001,
	},
	output: {
		publicPath: 'auto',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		plugins: [new TsconfigPathsPlugin()],
	},
	module: {
		rules: [
			{
				test: /bootstrap\.tsx$/,
				loader: 'bundle-loader',
				options: {
					lazy: true,
				},
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					// disable type checker - we will use it in fork plugin
					transpileOnly: true,
				},
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'ibCorporate',
			remotes: {
				dashboardModule: 'dashboardModule@http://localhost:3002/remoteEntry.js',
				widgetsModule: 'widgetsModule@http://localhost:3003/remoteEntry.js',
			},
			shared: {
				...packageJson.dependencies,
				react: { eager: true, requiredVersion: packageJson.dependencies.react },
				'react-dom': { eager: true, requiredVersion: packageJson.dependencies['react-dom'] },
				'react-redux': {
					eager: true,
					requiredVersion: packageJson.dependencies['react-redux'],
				},
			},
		}),
		new Webpack5RemoteTypesPlugin({
			remotes: {
				dashboardModule: 'dashboardModule@http://localhost:3002/remoteEntry.js',
				widgetsModule: 'widgetsModule@http://localhost:3003/remoteEntry.js',
			},
			outputDir: '.webpack-federation-modules-types',
			remoteFileName: '[name]-dts.tgz',
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			templateParameters: {
				PUBLIC_URL: '/public',
			},
		}),
		new Dotenv(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'public/**/*',
					globOptions: {
						ignore: ['**/index.html'],
					},
				},
			],
		}),
		new ForkTsCheckerWebpackPlugin(),
	],
};
