var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: {
		app: getEntrySources([
			"./src/app.js"
		])
	},
	output: {
		filename: "./dist/[name].js",
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
	}
};

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}