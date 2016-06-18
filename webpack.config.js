var webpack = require("webpack");
var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
var extractTextWebpackPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
	devtool : 'source-map',
	entry: {
		app: [path.resolve(ROOT_PATH, "src/index")],
		vendor: [path.resolve(ROOT_PATH, "src/vendor")]
	},
	output: {
		path: path.resolve(ROOT_PATH, 'build/'),
		filename: "[name]-[hash].js",
		publicPath: '/',
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				include: /src/,
				loader: extractTextWebpackPlugin.extract([
					'css',
					'postcss',
					'sass'
				])
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: [
					"react-hot",
					"babel-loader",
					"eslint-loader"
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
	postcss: function() {
		return [autoprefixer];
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new extractTextWebpackPlugin('[name]-[contenthash].css'),
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			template: path.resolve(ROOT_PATH, 'src/index.html'),
			inject: true
		})
	]
};
