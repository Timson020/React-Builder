const path = require('path')
// const webpack = require('webpack')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const htmlWebpackPlugin = require('html-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
console.info(1)
// 开发环境下的端口
const port = 9000

// 生产环境的页面地址
const host = './'

// 默认配置
const defaultconfig = {
	target: 'web',
	devtool: '#eval-source-map',
	resolve: {
		extensions: ['.jsx', '.js', '.json', '.scss', '.css'],
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
}

// 开发环境配置
const developmentconfig = {
	mode: 'development',
	entry: {
		build: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: './js/[name].js?[hash]',
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
	serve: {
		host: 'localhost',
		port: port,
		clipboard: true,
		hotClient: true,
		reload: false,
		logLevel: 'info',
		logTime: true,
	},
}

// 生产环境打包配置
const releaseconfig = {
	mode: 'production',
	devtool: '',
}

const config = Object.assign(defaultconfig, isProd ? releaseconfig : developmentconfig)

module.exports = config
