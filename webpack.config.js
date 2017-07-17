var path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: `build.js`
	},
	module: {
		rules: [{
			test: /\.jsx$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(scss||sass)$/,
			loader: 'style-loader!css-loader!sass-loader'
		}, {
			test: /\.(eot|ttf|woff|woff2)$/,
			loader: 'file-loader'
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]?[hash]'
			}
		}]
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json', '.scss', '.css'],
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	target: 'web',
	devtool: '#eval-source-map'
}

