const path = require('path');
require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'News Room App',
			template: './src/index.html',
			filename: './index.html',
			meta: {
				viewport: 'width=device-width, initial-scale=1.0',
				charset: 'UTF-8',
			},
		}),
		new Dotenv({
			path: './.env',
			safe: true,
		}),
	],
};
