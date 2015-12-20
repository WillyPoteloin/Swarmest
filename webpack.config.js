var webpack = require("webpack");
var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
	entry: {
		app: [path.resolve(ROOT_PATH, "src/index.js")]
	},
	output: {
		path: path.resolve(ROOT_PATH, 'build/'),
		filename: "bundle.js",
		publicPath: '/',
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				include: /src\/scss/,
				loaders: [
					'style',
					'css',
					'sass'
				]
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: [
					"react-hot",
					"babel-loader"
				]
			}
		]
	},
	devServer: {
		contentBase: path.resolve(ROOT_PATH, 'build'),
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		color: true,
		port: 3000,
	},
	resolve: {
		extensions : ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			title: 'Swarmest'
		}),
	]
};