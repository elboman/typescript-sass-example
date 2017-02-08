var path = require("path");
var webpack = require("webpack");

var config = {
	entry: {
		"main": path.resolve(__dirname, "src", "index.ts"),
	},
	output: {
		path: path.resolve(__dirname, "_bundles"),
		filename: "[name].js",
	},
	resolve: {
		extensions: ["", ".ts"]
	},
	devtool: 'source-map',
	module: {
		loaders: [
      {
        test: /\.(scss|css)$/,
        include: path.resolve(__dirname, 'src'),
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
			{
				test: /\.(ts|tsx)?$/,
				loader: "awesome-typescript-loader",
				exclude: /(node_modules|__tests__)/
			}
		]
	}
};

module.exports = config;