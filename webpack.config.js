const path = require( 'path' )
const webpack = require('webpack')

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join( __dirname, 'public', 'dist' ),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}, {
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			],
			test: /\.s?css$/
		}, {
			test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
			loader: 'url-loader?limit=100000'
		}]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join( __dirname, 'public' ),
		publicPath: '/dist/'
	},

};