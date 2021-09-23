const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack5RemoteTypesPlugin = require('webpack5-remote-types-plugin').default;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const packageJson = require('./package.json');
const dotEnv = require('dotenv');

const env = process.env.NODE_ENV || 'development';
const envVars = dotEnv.config().parsed;
const hostWidgetsModule =
	(envVars ? envVars.REACT_APP_HOST_WIDGETS_MODULE : process.env.REACT_APP_HOST_WIDGETS_MODULE) || '';

const transformDependencies = (deps) => {
	const transformDependencies = {};

	Object.keys(deps).forEach((key) => {
		transformDependencies[key] = {
			eager: true,
			requiredVersion: deps[key],
		};
	});

	return transformDependencies;
};

module.exports = {
	entry: './src/index',
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
				widgetsModule: `widgetsModule@${hostWidgetsModule}`,
			},
			shared: {
				...transformDependencies(packageJson.dependencies),
			},
		}),
		new Webpack5RemoteTypesPlugin({
			remotes: {
				widgetsModule: `widgetsModule@${hostWidgetsModule}`,
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
